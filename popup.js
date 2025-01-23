document.getElementById('changeColorBtn').addEventListener('click', () => {
    chrome.runtime.sendMessage({ action: 'changeColor' });
  });