chrome.action.onClicked.addListener((tab) => {
    if (tab.url) {
        try {
            const currentUrl = new URL(tab.url);
            const originalHostname = currentUrl.hostname;

            if (originalHostname.endsWith(".kras.lib.keio.ac.jp")) {
                console.log("すでにkras経由のURLのため、処理を中断します。");
                return;
            }

            const modifiedHostname = originalHostname.replace(/\./g, "-");
            const newHostname = modifiedHostname + ".kras.lib.keio.ac.jp";
            const newUrl = `https://${newHostname}${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;

            chrome.tabs.update(tab.id, { url: newUrl });
        } catch (e) {
            console.error("URLの処理中にエラーが発生しました:", e);
        }
    }
});