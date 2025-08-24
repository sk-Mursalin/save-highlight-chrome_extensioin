chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "SAVE_HIGHLIGHT") {
    chrome.storage.local.get(["highlights"], (result) => {
      const highlights = result.highlights || [];
      highlights.push(msg.text);
      chrome.storage.local.set({ highlights });
    });
  }
});
