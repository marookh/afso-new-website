$largeFiles = Get-ChildItem -Recurse -File | Where-Object {$_.Length -gt 50MB}
foreach ($file in $largeFiles) {
    $sizeMB = [math]::Round($file.Length / 1MB, 2)
    Write-Host "$sizeMB MB - $($file.FullName)"
}

