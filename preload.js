// preload.js

const { contextBridge, ipcRenderer } = require('electron');


// In your renderer process file
const notification = new Notification('Welcome', { body: 'Welcome MI 3 Team' });
setTimeout(() => {
  notification.close();
}, 3000);


contextBridge.exposeInMainWorld('electron', {
  ipcRenderer: ipcRenderer,
  clipboardReadText: () => ipcRenderer.invoke('clipboard-read-text'),
  copyToClipboard: (text) => ipcRenderer.send('copy-to-clipboard', text)
});