# SiiloExtensions
Provides extra functionality to Siilo Web App https://siilo.com 
For use with [Nativefier](https://github.com/jiahaog/nativefier) 's --inject and --counter option.

Currently:

* provides local push notifications if window is not in focus.
* provides support for unread messages badge 

use with:

`nativefier --name "Siilo" https://web.siilo.com --single-instance --counter  --inject ./unread.js`

Planned:

* message content
* message sender
