document.addEventListener("mouseup", () => {
  const selectedText = window.getSelection().toString().trim();
  if (selectedText.length > 0) {
    const popup = document.createElement("div");
    popup.innerText = "Save Highlight?";
    popup.style.position = "absolute";
    popup.style.top = `${event.pageY}px`;
    popup.style.left = `${event.pageX}px`;
    popup.style.background = "yellow";
    popup.style.padding = "4px";
    popup.style.cursor = "pointer";
    popup.style.zIndex = 9999;
    document.body.appendChild(popup);

    popup.onclick = () => {
      chrome.runtime.sendMessage({ type: "SAVE_HIGHLIGHT", text: selectedText });
      popup.remove();
    };

    setTimeout(() => popup.remove(), 3000);
  }
});
