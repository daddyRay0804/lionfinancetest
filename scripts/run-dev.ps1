# Lion Finance - 本地开发服务器
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
  Write-Host "Node.js not found in PATH. Please install Node.js 18+ and add to PATH." -ForegroundColor Red
  exit 1
}

if (-not (Test-Path "node_modules")) {
  Write-Host "Installing dependencies..."
  npm install
}

Write-Host "Starting dev server at http://localhost:3000" -ForegroundColor Green
Write-Host "Open browser: http://localhost:3000/en" -ForegroundColor Cyan
Start-Process "http://localhost:3000/en"
npm run dev
