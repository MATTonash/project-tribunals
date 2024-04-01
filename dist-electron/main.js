"use strict";
const electron = require("electron");
const path = require("node:path");
const fs = require("fs");
const IPC_ACTIONS = {
  Data: {
    SAVE_DATA: "SAVE_DATA"
  }
};
const { SAVE_DATA } = IPC_ACTIONS.Data;
const handleSaveData = (_event, data) => {
  let stringData = JSON.stringify(data);
  fs.writeFileSync("data.json", stringData);
  console.log("Data Saved!");
};
const ipcHandlers = [
  {
    event: SAVE_DATA,
    callback: handleSaveData
  }
];
const registerIpcHandlers = () => {
  ipcHandlers.forEach((handler) => {
    electron.ipcMain.on(handler.event, handler.callback);
  });
};
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = electron.app.isPackaged ? process.env.DIST : path.join(process.env.DIST, "../public");
let win;
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];
function createWindow() {
  win = new electron.BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "favicon.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js")
    }
  });
  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
  win.setMinimumSize(1366, 768);
}
electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    electron.app.quit();
    win = null;
  }
});
electron.app.on("activate", () => {
  if (electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
electron.app.whenReady().then(() => {
  registerIpcHandlers();
  createWindow();
});
