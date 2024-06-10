function load_menu() {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div id="content-c"> 
            <div id="opaque-d"> 
                <div id="inside-co">

                    <h1 id="menu-head">Menu</h1>
                    <div id="item1"> 
                        <p class="item" id="item1-name">Traditional Indulgence</p>
                        <ul>
                            <li>Attire: Formal</li>
                            <li>Table size: 2-8</li>
                            <li>Includes: Chef's Choice 8 Course w/ Wine Pairings</li>
                        </ul>
                    </div>
                    <div id="item2">
                        <p  class="item" id="item2-name">Hands-On Preparation</p>
                        <ul>
                            <li>Attire: Discrete Attire (in addition to Formal)</li>
                            <li>Table size: 2-3</li>
                            <li>Includes: Traditional Indulgence + Selection of Main Course & Butcher Options</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    `;
    const opaque = document.querySelector("#opaque-d");
    opaque.style.padding = "30px 50px 30px 50px";
    opaque.style.fontSize = "24px";

    const title = document.querySelector("#menu-head");
    title.style.textDecoration = "underline";

    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.style.fontWeight = "bold";
        item.style.fontSize = "28px";
    })
}

export default load_menu;