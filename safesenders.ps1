# Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
Remove-Variable AdminUser -ErrorAction SilentlyContinue
Remove-Variable TestUser -ErrorAction SilentlyContinue
$AdminUser = "admin-vieira@phishxnew.onmicrosoft.com"
$TestUser = "pedro.vieira@phishx.io"
Get-Content .\safesenders.txt -Raw | Invoke-Expression
