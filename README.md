# SiiloExtensions
This script extends Siilo Web App https://siilo.com as an Electron Desktop App with [Nativefier](https://github.com/jiahaog/nativefier) 's --inject and --counter options.

Current features:
=====

* provides local push notifications if window is not in focus. The app needs to be open.
* push notification includes 
    * unread count
    * last sender
    * last message content
* provides support for unread messages badge on OSX
* show unread message count in Taskbar Name on Windows
* fixes line breaks in Siilo's detailed case view

Usage:
=====

Requires: [Nativefier](https://github.com/jiahaog/nativefier)

`see make.sh to generate .zip`

On OSX
------

Open .app

On Windows:
----------

Use this [Fork of Nativefier](https://github.com/rdcvnh/nativefier) with Notification Support to generate zip.

`Instal to C:\Apps\Siilo-win32-x64`

`run  C:\Apps\Siilo-win32-x64\ShortcutCreator.bat`

`Open Siilo from Start Menu`

Planned:
=====

* windows badge support ?
