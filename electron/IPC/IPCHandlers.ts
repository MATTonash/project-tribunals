import { IpcMainEvent, ipcMain } from "electron";
import { IPC_ACTIONS } from "./IPCActions";
import { writeFileSync } from "fs";

const { SAVE_DATA } = IPC_ACTIONS.Data;

// Small example of saving data using ipc
const handleSaveData = (_event: IpcMainEvent, data: any) => {
  let stringData = JSON.stringify(data);
  writeFileSync("data.json", stringData);
  console.log("Data Saved!");
};

const ipcHandlers = [
  {
    event: SAVE_DATA,
    callback: handleSaveData,
  },
];

export const registerIpcHandlers = () => {
  ipcHandlers.forEach((handler: { event: string; callback: any }) => {
    ipcMain.on(handler.event, handler.callback);
  });
};
