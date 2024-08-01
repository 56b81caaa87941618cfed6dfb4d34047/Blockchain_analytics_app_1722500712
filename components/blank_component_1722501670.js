/* Summary: The blank component contains the following two parts:
- To the left: There is an empty div with text on top and bottom.
- To the right: There is an empty div.

If the user asks you to insert components left and right of each other, first wrap them into `<div class="grid"> </div` and then use the following syntax:
<div class="grid">
    <!-- these components appear to the left side -->
    <div id="left-side-container" class="flex"> Left side part here </div>

    <!-- these components appear to the right side -->
    <div id="right-side-container" class="flex"> Right side part here</div>
</div>
*/
Vue.component("blank_component_1722501670", {
    template: `
        <div>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
            <section id="blank-section" class="bg-gradient-to-br from-pink-400 to-purple-600 flex-1 min-h-screen flex items-center justify-center">
                <div id="blank-container" class="max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 backdrop-filter backdrop-blur-lg bg-opacity-20 bg-white rounded-3xl shadow-lg border border-opacity-20 border-white p-8">
                    <h1 class="text-4xl font-extrabold text-white mb-6">Cosmic Fantasy</h1>
                    <p class="text-lg text-pink-100 mb-8">Explore the surreal landscapes of our imagination</p>
                    <div class="grid grid-cols-2 gap-8">
                        <div class="bg-white bg-opacity-10 p-6 rounded-2xl shadow-md">
                            <i class='bx bx-planet text-5xl text-pink-300 mb-4'></i>
                            <h2 class="text-2xl font-bold text-white mb-2">Alien Worlds</h2>
                            <p class="text-pink-100">Discover exotic planets and celestial wonders</p>
                        </div>
                        <div class="bg-white bg-opacity-10 p-6 rounded-2xl shadow-md">
                            <i class='bx bx-landscape text-5xl text-purple-300 mb-4'></i>
                            <h2 class="text-2xl font-bold text-white mb-2">Mystic Mountains</h2>
                            <p class="text-pink-100">Trek through luminescent peaks and valleys</p>
                        </div>
                    </div>
                </div>
            </section>  
        </div>          
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
