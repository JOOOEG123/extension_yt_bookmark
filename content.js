(() => {
    let currentpage = null;
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        const { type, payload } = request;
        if (type === "NEW_VIDEO") {
            console.log("NEW_VIDEO", payload);
            currentpage = payload.v;
            newVideo();

        }
    });

    const newVideo = () => {
        console.log("newVideo", currentpage);
        chrome.storage.local.get(["videos"], (result) => {
            console.log("get", result);
            const videos = result.videos || {};
            const video = videos[currentpage] || { views: 0 };
            video.views++;
            videos[currentpage] = video;
            chrome.storage.local.set({ videos }, () => {
                console.log("set", videos);
            });
        }
        );
        chrome.storage.sync.set({ currentpage }, () => {
            console.log("set sync: ", currentpage);
        }
        );
    }



})();

