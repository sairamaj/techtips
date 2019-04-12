<# Test the arm templates #>
Test-AzureRmResourceGroupDeployment -ResourceGroupName deleteme `
 -TemplateFile .\armtemplates\master.template.json `
 -TemplateParameterFile .\armtemplates\master.parameters.json
 