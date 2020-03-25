document.addEventListener('DOMContentLoaded', function() {
    var palettes = document.getElementsByTagName('input');
    for (let item of palettes) {
        item.onclick = function() {
            // chrome.runtime.sendMessage(this.value);
            // alert(item.value);
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
                chrome.tabs.sendMessage(tabs[0].id, {selected: item.value}, function(response) {});  
            });
        }
    }
}, false);