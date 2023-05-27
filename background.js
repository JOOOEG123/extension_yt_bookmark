chrome.runtime.onInstalled.addListener( (as) => {
    console.log("background.js onInstalled", as);
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
        console.log("background.js tabs.onUpdated", tabId, changeInfo, tab);
        if (tab.url && tab.url.includes("https://www.youtube.com/watch")) {
        const quueryParams = new URLSearchParams(tab.url.split("?")[1]);
            const v = quueryParams.get("v");
            console.log("v", v);
            chrome.tabs.sendMessage(tabId, {type: "NEW_VIDEO", payload: {v, changeInfo}});
        }
    })
});
