function load_contact() {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <h1 id="contact-into"> Contact Us </h1>
        <div id="contact1">
            <p id="name1">Hannibal Lector</p>
            <ul>
                <li>Chef/Butcher/Owner</li>
                <li>123-456-7890</li>
                <li>Lector@primalinstincts.com</li>
            </ul>
        </div>
        <div id="contact2">
            <p id="name2">William Graham</p>
            <ul>
                <li>Artisian/Screener</li>
                <li>149-420-3282</li>
                <li>Graham@primalinstincts.com</li>
            </ul>

        </div>
        <div id="contact3">
            <p id="name3">Alana Bloom</p>
            <ul>
                <li>Waiter/Contections</li>
                <li>242-424-1111</li>
                <li>Bloom@primalinstincts.com</li>
            </ul>
        </div>
    `;
}

export default load_contact;