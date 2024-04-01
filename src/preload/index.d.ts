import { ElectronAPI } from '@electron-toolkit/preload'
import { IPCAPI } from './IPCAPI'

declare global {
  interface Window {
    electron: ElectronAPI
    ipc: IPCAPI
  }
}
