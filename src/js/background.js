// filter image
function filter(info, tab) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { url: info.srcUrl, palette: info.menuItemId }, function (response) { });
    });
}

// create menu
function createMenu() {
    const titles = ['None', 'Okabe and Ito', 'Tol (bright)', 'Tol (muted)', 'Tol (light)'];

    for (let i = 0; i < titles.length; i++) {
        chrome.contextMenus.create({
            title: titles[i],
            type: "radio",
            id: titles[i],
            contexts: ['image'],
            checked: false,
            onclick: filter
        });
    }
}

// get cached setting for first load
chrome.storage.local.get(['applyAll'], function(settings) {
    if (!settings.applyAll) {
        createMenu();
    }
});

// update based on change
chrome.storage.onChanged.addListener(function(changes, namespace) {
    if (namespace === 'local') {
        for (let key in changes) {
            if (key === 'applyAll') {
                let curr_applyAll = changes[key].newValue;
                if (!curr_applyAll) {
                    createMenu();
                } else {
                    chrome.contextMenus.removeAll();
                }
            }
        }
    }
});