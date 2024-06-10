function load_contact() {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <div id="content-c"> 
            <div id="opaque-d"> 
                <div id="inside-co">
                
                    <h1 id="contact-intro"> Contact Us </h1>
                    <div id="contact1">
                        <p class="name" id="name1">Hannibal Lector</p>
                        <ul>
                            <li>Chef/Butcher/Owner</li>
                            <li>123-456-7890</li>
                            <li>Lector@primalinstincts.com</li>
                        </ul>
                    </div>
                    <div id="contact2">
                        <p class="name" id="name2">William Graham</p>
                        <ul>
                            <li>Artisian/Screener</li>
                            <li>149-420-3282</li>
                            <li>Graham@primalinstincts.com</li>
                        </ul>

                    </div>
                    <div id="contact3">
                        <p class="name" id="name3">Alana Bloom</p>
                        <ul>
                            <li>Hostess/Connections </li>
                            <li>242-424-1111</li>
                            <li>Bloom@primalinstincts.com</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    `;

    const opaque = document.querySelector("#opaque-d");
    opaque.style.padding = "0px 50px 0px 50px";
    opaque.style.fontSize = "24px";
    

    const title = document.querySelector("#contact-intro");
    title.style.textDecoration = "underline";

    const items = document.querySelectorAll(".name");
    items.forEach(item => {
        item.style.fontWeight = "bold";
        item.style.fontSize = "28px";
        item.style.marginBottom = "-20px";
    })
}


export default load_contact;