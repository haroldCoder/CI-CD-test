/// <reference types="vite/client" />
declare global {
    interface Window {
      updateFile: () => void;
    }
}
