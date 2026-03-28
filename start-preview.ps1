$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 4173
$url = "http://127.0.0.1:$port/"

Write-Host "Starting preview server from $projectRoot" -ForegroundColor Cyan
Write-Host "Preview URL: $url" -ForegroundColor Green

Set-Location $projectRoot
python -m http.server $port --bind 127.0.0.1
