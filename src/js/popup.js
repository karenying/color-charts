document.addEventListener('DOMContentLoaded', function() {
    var palettes = document.getElementsByTagName('input');
    for (let item of palettes) {
        item.onclick = function() {
            chrome.runtime.sendMessage(this.value);
            alert(this.value);
        }
    }
}, false);