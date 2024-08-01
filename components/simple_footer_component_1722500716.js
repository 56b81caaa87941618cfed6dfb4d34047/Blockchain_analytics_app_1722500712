/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722500716", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 backdrop-filter backdrop-blur-lg bg-opacity-30 border border-pink-300 border-opacity-30 rounded-lg shadow-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-10 mx-auto lg:py-16 md:p-12 lg:p-14">
                <hr id="footer-divider" class="my-8 border-pink-200 sm:mx-auto border-opacity-50 lg:my-10">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-10 filter drop-shadow-lg" alt="Landwind Logo" />
                            BlockScan - Blockchain Analytics Platform
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white text-opacity-90 font-medium">
                        Stay ahead of the crypto curve with BlockScan's advanced on-chain data analysis tools. Gain real-time insights into new blockchain activity and emerging trends.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
