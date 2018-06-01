#!/bin/bash
cd ~/NonBackup/SIILO
/usr/local/bin/nativefier --name "Siilo" https://web.siilo.com --single-instance --counter -p windows -a x64  --inject ./unread.js  --inject ./casewrap.css --icon ./icon.ico --app-user-model-id Nativefier.Siilo
/usr/local/bin/nativefier --name "Siilo" https://web.siilo.com --single-instance --counter  --inject ./unread.js --icon ./icon.icns  --inject ./casewrap.css 

cp nativefier/bin/ShortcutCreator.exe ./Siilo-win32-x64 
cp ShortcutCreator.txt ./Siilo-win32-x64/ShortcutCreator.bat
#cp changes.png ./Siilo-darwin-x64/Siilo.app/Contents/Resources/app/inject 
#cp changes.png ./Siilo-win32-x64/resources/app/inject/ 

rm Siilo-windows.zip
rm Siilo-OSX.zip
zip -q -r Siilo-windows.zip ./Siilo-win32-x64 
zip -q -r Siilo-OSX.zip ./Siilo-darwin-x64/Siilo.app 