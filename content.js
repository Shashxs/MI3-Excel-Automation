// content.js

const { ipcRenderer } = require('electron');

function setupDoubleClickToCopy(specificText) {
    // Check if document and window.getSelection are defined
    if (typeof document !== "undefined" && typeof window.getSelection === "function") {
        // Add event listener only if document and window.getSelection are defined
        document.addEventListener('dblclick', function(event) {
            var selectedText = window.getSelection().toString();
            
            if (selectedText) {
                if (selectedText.includes(specificText)) {
                    // Send a message to the main process to copy text to clipboard
                    ipcRenderer.send('copy-to-clipboard', selectedText);
                } else {
                    console.log('Selected text:', selectedText);
                }
            }
        });
    }
}

// Export the function
module.exports = {
    setupDoubleClickToCopy: setupDoubleClickToCopy
};
