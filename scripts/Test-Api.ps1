param(
    [switch]
    $Azure
)

Function Test-Manual{
param($BaseUrl)
    $TechTaskUrl = "$BaseUrl/techtasks"
    $TechTipsUrl = "$BaseUrl/techtips"
    Write-Host "$TechTaskUrl"
    $tasks = (Invoke-RestMethod -Uri $TechTaskUrl)
    Write-Host "Tech Tasks"
    $tasks
    $techtips = (Invoke-RestMethod -Uri $TechTipsUrl)
    Write-Host "Tech Tips"
    $techtips
   # Read-Host "Press any key to continue."
}

if( $Azure.IsPresent){
    Test-Manual -BaseUrl 'https://saitech.azurewebsites.net/api'
}else{
    Test-Manual -BaseUrl 'http://localhost:7071/api'
}
