@echo off
rem ensure variables are temporary
setlocal enabledelayedexpansion
rem Switch to the nodejs directory to set up PATH
cd "C:\Program Files\nodejs"
rem Ensure this Node.js and npm are first in the PATH
set "PATH=%APPDATA%\npm;%cd%;%PATH%"
pushd "%cd%"
rem Figure out the Node.js version.
set print_version=.\node.exe -p -e "process.versions.node + ' (' + process.arch + ')'"
for /F "usebackq delims=" %%v in (`%print_version%`) do set version=%%v
rem Print message.
if exist npm.cmd (
  echo Your environment has been set up for using Node.js !version! and npm.
) else (
  echo Your environment has been set up for using Node.js !version!.
)
popd
cd "C:\Users\Jeanbeaux\eloquentlizard.github.io"
title TiddlyWiki Build
tiddlywiki --build index favicon > logfile.txt
PAUSE
robocopy  %cd%\output %cd% index.html favicon.ico /mt > logfile.txt