# https://raw.githubusercontent.com/sairamaj/techtips/master/deployment/armtemplates
<# Test the arm templates #>
Test-AzureRmResourceGroupDeployment -ResourceGroupName deleteme `
 -TemplateFile .\armtemplates\master.template.json `
 -TemplateParameterFile .\armtemplates\master.parameters.json `
 -repoBaseUrl https://raw.githubusercontent.com/sairamaj/techtips/master/deployment/armtemplates