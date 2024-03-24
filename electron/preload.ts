import { ipcRenderer, contextBridge } from "electron";
import { IPC_ACTIONS } from "./IPC/IPCActions";

const { SAVE_DATA } = IPC_ACTIONS.Data;

export interface IPCAPI {
  saveData: (data: any) => void;
}

const ipcAPI: IPCAPI = {
  saveData: (data: any) => ipcRenderer.send(SAVE_DATA, data),
};

contextBridge.exposeInMainWorld("ipcAPI", ipcAPI);
