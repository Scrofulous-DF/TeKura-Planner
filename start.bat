cd /d "%~dp0
cd %CD%/client
IF "%1" == "-w"  (
    START cmd.exe /k "@"%SYSTEMDRIVE%\Program Files\Git\bin\bash.exe" npm run dev"
    cd ../server
    START cmd.exe /k "node --watch server.ts"
) ELSE (
    START cmd.exe /k "node server.ts"
)