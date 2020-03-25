document.addEventListener('DOMContentLoaded', function() {
    var palettes = document.getElementsByTagName('input');
    for (let palette of palettes) {
        palette.onclick = function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {selected: palette.value}, function(response) {});  
            });
        }
    }
}, false);