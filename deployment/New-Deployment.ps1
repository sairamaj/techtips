# https://raw.githubusercontent.com/sairamaj/techtips/master/deployment/armtemplates
<# Test the arm templates #>
New-AzureRmResourceGroupDeployment -ResourceGroupName deletemeapim `
 -TemplateFile .\armtemplates\master.template.full.json `
 -TemplateParameterFile .\armtemplates\master.parameters.json `
  -repoBaseUrl https://raw.githubusercontent.com/sairamaj/techtips/master/deployment/armtemplates