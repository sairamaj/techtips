call npm run-script build
echo %errorlevel%
if %ERRORLEVEL% NEQ 0 goto error
cd dist
func host start
goto done
:error
echo 'Error occurred'
:done
