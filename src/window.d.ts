// This file augments the type of "Window" with the ipcAPI.
// Otherwise TypeScript shits itself.
import { IPCAPI } from "../electron/preload";

declare global {
  interface Window {
    ipcAPI: IPCAPI;
  }
}
