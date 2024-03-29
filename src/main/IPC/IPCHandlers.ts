import { IpcMainEvent, ipcMain } from 'electron'
import { IPC_ACTIONS } from './IPCActions'

const { PING } = IPC_ACTIONS.TEST

const handlePing = (_event: IpcMainEvent) => {
  console.log('Pong! The IPC is functioning correctly: ', new Date())
}

const ipcHandlers = [
  {
    event: PING,
    callback: handlePing
  }
]

export const registerIpcHandlers = () => {
  ipcHandlers.forEach((handler: { event: string; callback: any }) => {
    ipcMain.on(handler.event, handler.callback)
  })
}
