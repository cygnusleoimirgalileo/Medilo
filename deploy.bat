@echo off
echo Building your React app...
call npm run build
echo.
echo Deploying to GitHub Pages...
echo This might take a moment...
call npx gh-pages -d dist
echo.
echo Deployment complete!
echo Visit your site at: https://cygnusleoimirgalileo.github.io/Medilo/
pause