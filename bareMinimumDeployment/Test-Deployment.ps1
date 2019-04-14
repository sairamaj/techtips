# https://raw.githubusercontent.com/sairamaj/techtips/master/deployment/armtemplates
<# Test the arm templates #>
$results = `Test-AzureRmResourceGroupDeployment -ResourceGroupName deletemeapim `
 -TemplateFile .\armtemplates\master.template.json `
 -TemplateParameterFile .\armtemplates\master.parameters.json `
 -repoBaseUrl https://raw.githubusercontent.com/sairamaj/techtips/master/deployment/armtemplates

 $results |fl
 $results.Details |fl