cd /d "%~dp0
cd %CD%/client
START cmd.exe /k "@"%SYSTEMDRIVE%\Program Files\Git\bin\bash.exe" npm run dev"
cd ../server
node server.ts
echo test
pause