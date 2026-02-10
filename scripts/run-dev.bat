@echo off
cd /d "%~dp0.."
echo Checking Node.js...
where node >nul 2>&1
if errorlevel 1 (
  echo Node.js not found in PATH. Please install Node.js 18+ and add to PATH.
  pause
  exit /b 1
)
if not exist "node_modules" (
  echo Installing dependencies...
  call npm install
)
echo Starting dev server at http://localhost:3000
echo Open browser: http://localhost:3000/en
start http://localhost:3000/en
call npm run dev
