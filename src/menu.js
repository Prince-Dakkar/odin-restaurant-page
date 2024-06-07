function load_menu() {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <h1 id="menu-head">Menu</h1>
        <div id="item1"> 
            <p id="item1-name">Traditional Indulgence</p>
            <ul>
                <li>Attire: Formal</li>
                <li>Table size: 2-8</li>
                <li>Includes: Chefs Choice 8 Courses with wine pairings</li>
            </ul>
        </div>
        <div id="item2">
            <p id="item2-name">Hands-On Preparation</p>
            <ul>
                <li>Attire: Formal as well as discrete attire</li>
                <li>Table size: 2-3</li>
                <li>Includes: Traditional Indulgence + Selection of main course & butcher options</li>
            </ul>
        </div>
    `;
}

export default load_menu;