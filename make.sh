#!/bin/bash
cd ~/NonBackup/SIILO
/usr/local/bin/nativefier --name "Siilo" https://web.siilo.com --single-instance --counter -p windows -a x64  --inject ./unread.js --icon ./trayicon.ico --app-user-model-id Nativefier.Siilo
/usr/local/bin/nativefier --name "Siilo" https://web.siilo.com --single-instance --counter  --inject ./unread.js --tray --icon ./trayicon.icns  

cp nativefier/bin/ShortcutCreator.exe ./Siilo-win32-x64 
cp ShortcutCreator.txt ./Siilo-win32-x64/ShortcutCreator.bat
rm Siilo-windows.zip
zip -r Siilo-windows.zip ./Siilo-win32-x64 