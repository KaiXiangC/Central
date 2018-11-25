# Server

實際使用的中控

頻道說明:

> handshake1和handshake2為測試連線用的頻道
> service用來傳代碼
> 其餘頻道用來傳資料

使用方式:

> npm i
> node index.js

start.bat為選用的啟動方式，使用[node supervisor](https://www.npmjs.com/package/supervisor)可以方便我們在修改程式碼後立刻重啟中控

需要使用下列指令安裝node supervisor才能使用:

> npm install supervisor -g

***

Central we used in this project

Channels:

> handshake1 and handshake2 is used to test connection
> service is what we used to send code (integer)
> Other channels is used to send actual data

Usage:

> npm i
> node index.js

start.bat is alternative way to start central, by using [node supervisor](https://www.npmjs.com/package/supervisor) we can immediately restart Central after we changed Central code.

You need to used following command to install node supervisor in order to use it.

> npm install supervisor -g