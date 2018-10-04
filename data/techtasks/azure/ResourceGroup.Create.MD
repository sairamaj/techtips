### Summary
    Create a Resource group
#### AZ
```console
    
```
### Powershell
```powershell
    Connect-AzureRmAccount      # this will prompt for user credentials if not logged in already
    New-AzureRmResourceGroup -Name test -Location westus2   
    Get-AzureRmResourceGroup    # list all the resources
    Remove-AzureRmResourceGroup -Name test -Force       # removes without prompt.
```
### C#
```csharp
    // csharp code here

```


### Resources
[Azure Resource Manager overview](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-overview)
