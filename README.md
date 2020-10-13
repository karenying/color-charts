# Color Charts

Color Charts is a Chrome extension that aims to increase the readability of charts, graphs, and diagrams on the web. Visuals that depend on colors to convey informationmay be hard to read for people with color blindness. Color Charts improves upon existing extensions by using researched color blind friendly palettes. It allows for filtering of visuals on a web page, with the option to choose between 4 different color blind friendly palettes. Built with vanilla JavaScript, Color Charts interacts with HTML &lt;img&gt; elements in the Chrome browser, utilizing HTML canvas and base64 encoding to filter the images.

This extension was designed for the Spring 2020 Princeton CS Independent Work Seminar: Random Apps of Kindness -- Accessibility Technologies and User Interfaces.

Read the final paper [here](https://github.com/karenying/color-charts/blob/master/src/assets/paper.pdf). View the final presentation slides [here](https://github.com/karenying/color-charts/blob/master/src/assets/slides.pdf).

**To use**:

1. Clone this repo.
2. Head over to Chrome Extensions (usually `chrome://extensions` in the address bar) and turn "Developer Mode" on the top left.
3. Click "Load unpack" and select the destination as the cloned repository folder
4. The Color Charts icon should now appear to the left of the address bar. Click on the icon to trigger the popup and utilize the extension as described in this section.

**Disclaimer**: Color Charts only applies to HTML &lt;img&gt; elements. It does not work in PDFs, or on SVGs. It also only applies to images on the same domain as the page it appears on. It is not compatible with cross-origin images (images whose source is from another domain). To see the full extent of the extension, test Color Charts on this [page](https://karenying.github.io/color-charts-dummy-page/).
