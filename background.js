chrome.action.onClicked.addListener((tab) => {
    if (tab.url) {
        try {
            const currentUrl = new URL(tab.url);
            const originalHostname = currentUrl.hostname;

            // ドメインの"."を"-"に置換
            const modifiedHostname = originalHostname.replace(/\./g, "-");

            // 新しいホスト名を作成
            const newHostname = modifiedHostname + ".kras.lib.keio.ac.jp";

            // 新しいURLを構築
            const newUrl = `https://${newHostname}${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`;

            // 現在のタブを新しいURLに更新
            chrome.tabs.update(tab.id, { url: newUrl });
        } catch (e) {
            console.error("URLの処理中にエラーが発生しました:", e);
        }
    }
});