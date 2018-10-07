param(
   [parameter(mandatory=$true)]
   $Password
)
$website = 'saitech'
$username = 'sairamaj'
$password = $Password
$base64AuthInfo = [Convert]::ToBase64String([Text.Encoding]::ASCII.GetBytes(("{0}:{1}" -f $username,$password)))
$apiBaseUrl = "https://$website.scm.azurewebsites.net/api"
$deployments = Invoke-RestMethod -Uri "$apiBaseUrl/deployments" -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} -Method GET 
# check whether top one is failed
$lastDeployment = $deployments | Sort-Object -Descending start_time | Select-Object -First 1
if( $lastDeployment.active -eq $false){
    Write-Warning "last deployment failed"
    $answer = Read-Host -Prompt "Do you want to get detailed logs(y/n)?"
    if( $answer -eq 'y'){
        Write-Warning "$($lastDeployment.message) Deployment failed."
        Write-Host 'Getting the logs'
        $logs = Invoke-RestMethod -Uri $lastDeployment.log_url -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} -Method GET 
        $detailUrl = $logs | Where-Object details_url -ne $null
        $detailedLog = Invoke-RestMethod -Uri $detailUrl.details_url -Headers @{Authorization=("Basic {0}" -f $base64AuthInfo)} -Method GET 
        $detailedLog | Select-Object message
    }else{
        $deployments | Sort-Object -Descending start_time | Select-Object -First 3 | Select-Object start_time, message, active

    }
}else{
    # display the last 3 deployments
    $deployments | Sort-Object -Descending start_time | Select-Object -First 3 | Select-Object start_time, message, active
}
