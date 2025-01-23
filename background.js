chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed');
});
  
chrome.action.onClicked.addListener((tab) => {
  // Change the background color of the current tab on button click
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: changeBackgroundColor
  });
});
  
function changeBackgroundColor() {
  document.body.style.backgroundColor = 'lightblue';
}