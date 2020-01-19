
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action === "updateIcon") {
       if(msg.value == 0){
        chrome.browserAction.setIcon({
            path : "UI/Icons/notification_icon.png"
          });
        }
        else if(msg.value == 1){
        chrome.browserAction.setIcon({
            path : "UI/Icons/default_icon.png"
            });
        }
        else if(msg.value == 2){
        chrome.browserAction.setIcon({
            path : "UI/Icons/grey_icon.png"
            });
        }
        
    }
});

