import { useEffect, useState } from "react";
import "./Popup.css";

export default function Popup() {
  const [highlights, setHighlights] = useState([]);

  useEffect(() => {
    chrome.storage.local.get(["highlights"], (result) => {
      setHighlights(result.highlights || []);
    });
  }, []);

  const deleteHighlight = (index) => {
    const newList = highlights.filter((_, i) => i !== index);
    setHighlights(newList);
    chrome.storage.local.set({ highlights: newList });
  };

  return (
    <div className="popup-container">
      <h2>📌 Saved Highlights</h2>
      <div className="highlight-list">
        {highlights.length === 0 ? (
          <p className="empty-state">No highlights saved.</p>
        ) : (
          highlights.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <span className="highlight-text">{highlight}</span>
              <button className="delete-btn" onClick={() => deleteHighlight(index)}>❌</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
