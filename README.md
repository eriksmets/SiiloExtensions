# SiiloExtensions
This script extends Siilo Web App https://siilo.com as an Electron Desktop App with [Nativefier](https://github.com/jiahaog/nativefier) 's --inject and --counter options.

Current features:
------

* provides local push notifications if window is not in focus.
* provides support for unread messages badge 

Usage:
-----

`nativefier --name "Siilo" https://web.siilo.com --single-instance --counter  --inject ./unread.js`

Planned:
----

* message content
* message sender
