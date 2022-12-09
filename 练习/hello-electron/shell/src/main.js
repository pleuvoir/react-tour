const {BrowserWindow, app} = require("electron");

app.whenReady().then(() => {
    const window = new BrowserWindow({
        title: "😑"
    });
    const url = "http://localhost:3000";
    window.loadURL(url).then(() => {
        console.info(`启动成功：${url}`)
    })
})