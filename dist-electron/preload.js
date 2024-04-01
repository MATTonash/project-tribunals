"use strict";
const electron = require("electron");
const IPC_ACTIONS = {
  Data: {
    SAVE_DATA: "SAVE_DATA"
  }
};
const { SAVE_DATA } = IPC_ACTIONS.Data;
const ipcAPI = {
  saveData: (data) => electron.ipcRenderer.send(SAVE_DATA, data)
};
electron.contextBridge.exposeInMainWorld("ipcAPI", ipcAPI);
