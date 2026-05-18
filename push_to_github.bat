@echo off
title Push "Hamro Ramro CV" to GitHub
color 0b
cls

echo ===================================================
echo   🚀 Welcome to "Hamro Ramro CV" GitHub Pusher
echo ===================================================
echo.
echo This helper will link your local CV Maker repository
echo to your GitHub account and push the code.
echo.
echo ---------------------------------------------------
echo  Step 1: Go to https://github.com/new
echo  Step 2: Create a new repository named:
echo          "hamro-ramro-cv"
echo  Step 3: Copy the HTTPS clone URL
echo         (e.g., https://github.com/username/hamro-ramro-cv.git)
echo ---------------------------------------------------
echo.

:ask_url
set /p REPO_URL="Enter your GitHub Repository URL: "

if "%REPO_URL%"=="" (
    echo.
    color 0c
    echo [ERROR] URL cannot be empty! Please enter your repository URL.
    echo.
    goto ask_url
)

echo.
echo Connecting to GitHub repository...
echo.

:: Configure git remote
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%
git branch -M main

echo Pushing code to GitHub...
echo.
git push -u origin main

if %ERRORLEVEL% NEQ 0 (
    echo.
    color 0c
    echo ===================================================
    echo   ❌ Error pushing to GitHub!
    echo ===================================================
    echo Please make sure:
    echo 1. You created the repository on GitHub.
    echo 2. The URL you entered is correct.
    echo 3. You have logged into GitHub in your terminal.
    echo.
    pause
    exit /b %ERRORLEVEL%
)

echo.
color 0a
echo ===================================================
echo   🎉 Success! Your code is now live on GitHub!
echo ===================================================
echo.
pause
