const { app, BrowserWindow } = require('electron')

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'My Custom Title',
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true
        }
    })

    mainWindow.loadURL('https://www.bilibili.com/') // 在这里设置网址

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})
