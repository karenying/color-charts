document.addEventListener(
    'DOMContentLoaded',
    function () {
        // Open about link
        document.querySelector('#about').addEventListener('click', function () {
            if (chrome.runtime.openOptionsPage) {
                chrome.runtime.openOptionsPage();
            } else {
                window.open(chrome.runtime.getURL('about.html'));
            }
        });

        let palettes = document.getElementsByName('palette');

        // Get cached selected palette value and set radio button
        chrome.storage.local.get(['paletteSelected'], function (result) {
            let paletteSelected = result.paletteSelected;
            for (let palette of palettes) {
                if (palette.value === paletteSelected) {
                    palette.checked = true;
                }
            }
        });

        // Update preferences on click
        for (let palette of palettes) {
            palette.onclick = function () {
                chrome.storage.local.set(
                    { paletteSelected: palette.value },
                    function () {
                        console.log('Palette selected: ' + palette.value);
                    }
                );
            };
        }

        let checkbox = document.getElementsByName('apply')[0];

        // Get cached apply all preference and set toggle
        chrome.storage.local.get(['applyAll'], function (result) {
            checkbox.checked = result.applyAll;
        });

        // Update preferences on click
        checkbox.onclick = function () {
            chrome.storage.local.set(
                { applyAll: checkbox.checked },
                function () {
                    let value = checkbox.checked ? 'on' : 'off';
                    console.log('Apply all turned ' + value + '.');
                }
            );
        };
    },
    false
);
