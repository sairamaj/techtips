Select-AzureRmSubscription -SubscriptionName 'Visual Studio Enterprise'

$ResourceGroupName = 'testing'
$TemplateFile = 'templates\vm.script.extension.json'
$TemplateParameterFile = 'templates\vm.script.extension.parameters.json'

# Creating a deployment 
New-AzureRmResourceGroupDeployment `
    -Name TestAutomationDeployment `
    -ResourceGroupName $ResourceGroupName `
    -TemplateFile $TemplateFile `
    -TemplateParameterFile $TemplateParameterFile