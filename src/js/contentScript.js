// ------------------- Color constants --------------------------------------
// Color wheel
const CW_RED = {
    rgb: [255, 0, 0],
    Lab: [53.23288178584245, 80.10930952982204, 67.22006831026425],
};

const CW_ORANGE = {
    rgb: [255, 127, 0],
    Lab: [66.853804382266, 43.32394349110946, 73.90977076096983],
};

const CW_YELLOW = {
    rgb: [255, 255, 0],
    Lab: [97.13824698129729, -21.555908334832285, 94.48248544644461],
};

const CW_LIGHT_GREEN = {
    rgb: [127, 255, 0],
    Lab: [89.87420853068859, -68.06912800112336, 85.7823696705245],
};

const CW_GREEN = {
    rgb: [0, 255, 0],
    Lab: [87.73703347354422, -86.1846364976253, 83.18116474777854],
};

const CW_TURQUOISE = {
    rgb: [0, 255, 127],
    Lab: [88.47265520282772, -76.90097301637367, 47.0252935988744],
};

const CW_CYAN = {
    rgb: [0, 255, 255],
    Lab: [91.11652110946342, -48.079618466228766, -14.138127754846131],
};

const CW_LIGHT_BLUE = {
    rgb: [0, 127, 255],
    Lab: [54.44754715922328, 19.4140731865301, -71.36367783765967],
};

const CW_BLUE = {
    rgb: [0, 0, 255],
    Lab: [32.302586667249486, 79.19666178930935, -107.8636810449517],
};

const CW_PURPLE = {
    rgb: [127, 0, 255],
    Lab: [40.78700884794503, 83.10852255459103, -93.50954337949518],
};

const CW_MAGENTA = {
    rgb: [255, 0, 255],
    Lab: [60.319933664076004, 98.25421868616108, -60.84298422386232],
};

const CW_PINK = {
    rgb: [255, 0, 127],
    Lab: [54.857758849253244, 84.48066810163252, 4.62720489978099],
};

const COLOR_WHEEL = [
    CW_RED,
    CW_ORANGE,
    CW_YELLOW,
    CW_LIGHT_GREEN,
    CW_GREEN,
    CW_TURQUOISE,
    //CW_CYAN,
    CW_LIGHT_BLUE,
    CW_BLUE,
    CW_PURPLE,
    CW_MAGENTA,
    CW_PINK,
];

// Okabe & Ito
const OI_ORANGE = {
    rgb: [230, 159, 0],
    Lab: [70.60762637435988, 16.479368409699436, 74.68205534443231],
};
const OI_LIGHT_BLUE = {
    rgb: [86, 180, 233],
    Lab: [69.82710600588366, -12.016685908533443, -34.773378828178195],
};
const OI_GREEN = {
    rgb: [0, 158, 115],
    Lab: [57.74308134412172, -45.74064450080628, 12.75498766717198],
};
const OI_YELLOW = {
    rgb: [240, 228, 66],
    Lab: [89.11374483025025, -13.325520162133841, 75.45401525170064],
};
const OI_RED = {
    rgb: [213, 94, 0],
    Lab: [54.18742429248152, 43.274479516557385, 63.28428306351207],
};
const OI_DARK_BLUE = {
    rgb: [0, 114, 178],
    Lab: [45.9733427569253, -2.7341220208763617, -41.37285042024996],
};
const OI_PINK = {
    rgb: [204, 121, 167],
    Lab: [61.047355974201054, 38.53526903867133, -10.607542323987573],
};
const BLACK = {
    rgb: [0, 0, 0],
    Lab: [0, 0, 0],
};

// Tol (bright)
const TB_PINK = {
    rgb: [238, 102, 119],
    Lab: [60.79203693921427, 53.84879361524636, 17.27317349172872],
};
const TB_GREEN = {
    rgb: [34, 136, 51],
    Lab: [49.72263896411893, -46.76254071031405, 36.735986216635055],
};
const TB_DARK_BLUE = {
    rgb: [68, 119, 170],
    Lab: [48.66679781991668, -1.3058506936485803, -32.36144006257147],
};
const TB_YELLOW = {
    rgb: [204, 187, 68],
    Lab: [75.32384768169656, -7.683001687697699, 60.03656876314142],
};
const TB_LIGHT_BLUE = {
    rgb: [102, 204, 238],
    Lab: [77.39046821126635, -20.186890383484645, -25.785712958573725],
};
const TB_PURPLE = {
    rgb: [170, 51, 119],
    Lab: [41.60384371395073, 54.415673982225854, -11.863230196590123],
};
const TB_GRAY = {
    rgb: [187, 187, 187],
    Lab: [75.88062353321, 0.004166707036734607, -0.008244055896833302],
};

// Tol (muted)
const TM_LIGHT_BLUE = {
    rgb: [136, 204, 238],
    Lab: [78.80626208508707, -12.759163081336345, -23.498078164004042],
};
const TM_GREEN = {
    rgb: [68, 170, 153],
    Lab: [63.57223369051775, -33.6419138090891, -0.04608227218834138],
};
const TM_DARK_GREEN = {
    rgb: [17, 119, 51],
    Lab: [43.58323284129402, -43.077417458006224, 29.44723889604677],
};
const TM_DARK_BLUE = {
    rgb: [51, 34, 136],
    Lab: [22.392352955864773, 37.73178147263176, -54.039310633841666],
};
const TM_YELLOW = {
    rgb: [221, 204, 119],
    Lab: [81.77824982129096, -5.455493114701671, 44.30095011825017],
};
const TM_DARK_YELLOW = {
    rgb: [153, 153, 51],
    Lab: [61.475886861471, -13.052804785520344, 51.38233421367734],
};
const TM_PINK = {
    rgb: [204, 102, 119],
    Lab: [55.75790794113969, 42.05991100830536, 9.496420925424465],
};
const TM_DARK_PINK = {
    rgb: [136, 34, 85],
    Lab: [31.884577050838026, 46.95197384210989, -5.520197672762506],
};
const TM_PURPLE = {
    rgb: [170, 68, 153],
    Lab: [45.607065619762764, 52.2037775424824, -26.395536865726555],
};
const GRAY = {
    rgb: [221, 221, 221],
    Lab: [88.11543698710965, 0.004721545275254702, -0.009341833449094672],
};

// Tol (light)
const TL_LIGHT_GREEN = {
    rgb: [191, 196, 101],
    Lab: [76.97837346208507, -15.229395589503813, 46.70353112686612],
};
const TL_DARK_GREEN = {
    rgb: [170, 170, 0],
    Lab: [67.49813867059089, -15.908662820362684, 69.729838337105],
};
const TL_BLUE = {
    rgb: [119, 170, 221],
    Lab: [67.94082792758167, -3.316905783813495, -31.01573877306969],
};
const TL_RED = {
    rgb: [238, 136, 102],
    Lab: [67.08510460798784, 35.7487375206943, 35.10583544081545],
};
const TL_YELLOW = {
    rgb: [238, 221, 136],
    Lab: [87.80835645572, -5.671762030260097, 43.73343142033082],
};
const TL_PINK = {
    rgb: [255, 170, 187],
    Lab: [78.22633784294831, 33.42700739567406, 4.1933027420084645],
};
const TL_LIGHT_BLUE = {
    rgb: [153, 221, 255],
    Lab: [84.84582407583349, -12.926675337134652, -23.271175855387515],
};
const TL_GREEN = {
    rgb: [68, 187, 153],
    Lab: [68.80157855384934, -41.34912237733279, 7.513750272739461],
};

const OKABE_ITO = [
    OI_ORANGE,
    OI_PINK,
    OI_YELLOW,
    OI_GREEN,
    OI_DARK_BLUE,
    OI_LIGHT_BLUE,
    OI_RED,
    BLACK,
];

const TOL_BRIGHT = [
    TB_DARK_BLUE,
    TB_PINK,
    TB_GREEN,
    TB_YELLOW,
    TB_LIGHT_BLUE,
    TB_PURPLE,
    TB_GRAY,
];

const TOL_MUTED = [
    TM_DARK_PINK,
    TM_DARK_BLUE,
    TM_YELLOW,
    TM_DARK_GREEN,
    TM_LIGHT_BLUE,
    TM_PINK,
    TM_GREEN,
    TM_DARK_YELLOW,
    TM_PURPLE,
    GRAY,
];

const TOL_LIGHT = [
    TL_BLUE,
    TL_RED,
    TL_YELLOW,
    TL_PINK,
    TL_LIGHT_BLUE,
    TL_GREEN,
    TL_LIGHT_GREEN,
    TL_DARK_GREEN,
    GRAY,
];

// ------------------- Helper methods --------------------------------------
rgbToLab = function (rgb) {
    let r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        x,
        y,
        z;

    r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

    x = (r * 0.4124 + g * 0.3576 + b * 0.1805) / 0.95047;
    y = (r * 0.2126 + g * 0.7152 + b * 0.0722) / 1.0;
    z = (r * 0.0193 + g * 0.1192 + b * 0.9505) / 1.08883;

    x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
    y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
    z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

    return [116 * y - 16, 500 * (x - y), 200 * (y - z)];
};

// Randomize array in-place using Durstenfeld shuffle algorithm
shuffleArray = function (array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    return array;
};

// Filter an image with given palette
filter = function (image, palette) {
    // Create canvas
    let canvas = document.createElement('canvas');
    canvas.width = image.naturalWidth;
    canvas.height = image.naturalHeight;

    let ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);

    // Draw image
    let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imgData.data;

    let colorMap = {};

    // Map colors to color wheel colors
    for (let i = 0; i < data.length; i += 4) {
        let r = data[i],
            g = data[i + 1],
            b = data[i + 2];
        let rgb = [r, g, b];
        let Lab = rgbToLab(rgb);

        let rg_diff = Math.abs(r - g),
            gb_diff = Math.abs(g - b),
            br_diff = Math.abs(b - r);

        // If color isn't a shade of gray
        if (rg_diff >= 15 || gb_diff >= 15 || br_diff >= 15) {
            let closest,
                dist = Number.POSITIVE_INFINITY;

            COLOR_WHEEL.forEach((color) => {
                // Compute distance
                let curr_dist =
                    Math.pow(color.Lab[0] - Lab[0], 2) +
                    Math.pow(color.Lab[1] - Lab[1], 2) +
                    Math.pow(color.Lab[2] - Lab[2], 2);

                if (curr_dist < dist) {
                    closest = color;
                    dist = curr_dist;
                }
            });

            let closestToString = closest.rgb.join('-');
            // If color hasn't been seen yet add it to the map
            if (!colorMap.hasOwnProperty(closestToString)) {
                colorMap[closestToString] = 1;
            } else {
                colorMap[closestToString]++;
            }
            // Overwrite current color with closest match based on LAB distance
            data[i] = closest.rgb[0];
            data[i + 1] = closest.rgb[1];
            data[i + 2] = closest.rgb[2];
        }
    }

    let i = 0; // Index for iterating through palette
    let shuffledPalette = shuffleArray(palette);

    for (let colorWheelColor in colorMap) {
        // Check if it's a significant color
        if (colorMap[colorWheelColor] > 500) {
            colorMap[colorWheelColor] = shuffledPalette[i].rgb;
            i++;
        } else {
            colorMap[colorWheelColor] = [255, 255, 255];
        }
    }

    // Recolor using colorMap and palette colors
    for (let i = 0; i < data.length; i += 4) {
        let r = data[i],
            g = data[i + 1],
            b = data[i + 2];
        let rgb = [r, g, b];

        let rgbToString = rgb.join('-');
        if (colorMap.hasOwnProperty(rgbToString)) {
            let reColor = colorMap[rgbToString];
            data[i] = reColor[0];
            data[i + 1] = reColor[1];
            data[i + 2] = reColor[2];
        }
    }

    // Update canvas image
    ctx.putImageData(imgData, 0, 0, 0, 0, canvas.width, canvas.height);

    // Create base64 url
    let base64_url = canvas.toDataURL();

    return base64_url;
};

// Check if image is filtered
isFiltered = function (image) {
    return image.src.startsWith('data');
};

// Cache the orignal image links of the page before filtering
cacheOriginalImages = function () {
    chrome.storage.local.set({ originalLinks: [] }, function () {
        console.log('Cache cleared.');
    });

    let links = [];
    let images = document.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
        if (!isFiltered(images[i])) {
            links.push(images[i].src);
        } else {
            links.push(null);
        }
    }

    chrome.storage.local.set({ originalLinks: links }, function () {
        console.log('Original images cached');
    });
};

// Reset to original page
resetToOriginalImages = function () {
    // Retrieve original links
    chrome.storage.local.get(['originalLinks'], function (cache) {
        let images = document.getElementsByTagName('img');

        if ((images.length = cache.originalLinks.length)) {
            for (let i = 0; i < images.length; i++) {
                // If image is filtered, revert it
                if (isFiltered(images[i]) && cache.originalLinks[i] !== null) {
                    images[i] = new Image();
                    images[i].src = cache.originalLinks[i];
                    console.log('reverting');
                }
            }
        }

        // callback();
    });
};

// Apply selective filtering
selectivelyFilter = function () {
    // Listen to messages from background.js for context menu clicks
    chrome.runtime.onMessage.addListener(function (message) {
        let images = document.getElementsByTagName('img');

        for (let i = 0; i < images.length; i++) {
            let image = images[i],
                currPalette;
            if (image.src === message.url) {
                switch (message.palette) {
                    case 'Okabe and Ito':
                        currPalette = OKABE_ITO;
                        break;
                    case 'Tol (bright)':
                        currPalette = TOL_BRIGHT;
                        break;
                    case 'Tol (muted)':
                        currPalette = TOL_MUTED;
                        break;
                    case 'Tol (light)':
                        currPalette = TOL_LIGHT;
                        break;
                }

                let base64_url = filter(image, currPalette);
                images[i].src = base64_url;
            }
        }
        return true;
    });
};

// Filter all the images on the page
filterAll = function (palette) {
    let currPalette;

    switch (palette) {
        case 'okabe_ito':
            currPalette = OKABE_ITO;
            break;
        case 'tol_bright':
            currPalette = TOL_BRIGHT;
            break;
        case 'tol_muted':
            currPalette = TOL_MUTED;
            break;
        case 'tol_light':
            currPalette = TOL_LIGHT;
            break;
    }

    // Cache original images
    cacheOriginalImages();

    // Get all images
    let images = document.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
        let image = images[i];

        let base64_url = filter(image, currPalette);
        images[i].src = base64_url;
    }
};

//----------------------------------------------------------------------------
// Get cached prefernces for first load
chrome.storage.local.get(['applyAll'], function (settings) {
    // Apply all setting on
    if (settings.applyAll) {
        chrome.storage.local.get(['paletteSelected'], function (result) {
            filterAll(result.paletteSelected);
        });
    }
    // Selective filtering on
    else {
        selectivelyFilter();
    }
});

//----------------------------------------------------------------------------
// Deal with on change
chrome.storage.onChanged.addListener(function (changes, namespace) {
    if (namespace === 'local') {
        for (let key in changes) {
            // Check for toggle change
            if (key === 'applyAll') {
                let curr_applyAll = changes[key].newValue;
                // Toggle from on --> off, selective filtering on
                if (!curr_applyAll) {
                    // Remove filters
                    chrome.storage.local.get(['originalLinks'], function (
                        cache
                    ) {
                        if (cache.originalLinks.length > 0) {
                            resetToOriginalImages();
                        }
                    });
                    selectivelyFilter();
                }
                // Toggle from off --> on
                else {
                    chrome.storage.local.get(['paletteSelected'], function (
                        result
                    ) {
                        filterAll(result.paletteSelected);
                    });
                }
            }

            // Check for palette change
            else if (key === 'paletteSelected') {
                chrome.storage.local.get(['applyAll'], function (settings) {
                    if (settings.applyAll) {
                        console.log('hi');
                        filterAll(changes[key].newValue);
                    }
                });
            }
        }
    }
    return true;
});
