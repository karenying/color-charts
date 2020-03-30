document.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#about').addEventListener("click", function () {
        if (chrome.runtime.openOptionsPage) {
            chrome.runtime.openOptionsPage();
        } else {
            window.open(chrome.runtime.getURL('about.html'));
        }
    });

    let palettes = document.getElementsByName('palette');
    for (let palette of palettes) {
        palette.onclick = function () {
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, { selected: palette.value }, function (response) { });
            });
        }
    }

    let checkbox = document.getElementsByName('apply')[0];
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { applyAll: checkbox.checked }, function (response) { });
    });
    checkbox.onclick = function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { applyAll: checkbox.checked }, function (response) { });
        });
    }
}, false);