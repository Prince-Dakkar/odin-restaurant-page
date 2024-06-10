function load_home() {
    const content = document.querySelector("#content");
    content.innerHTML = ` 
        <div id="content-c"> 
            <div id="opaque-d"> 
                <div id="inside-o">
                    <p id="intro">
                        Satisfy both your tastebuds and your proclivities here with us at Primal Instincts. 
                    </p>
                </div>
            </div>
        </div>
    `;
    const opaque = document.querySelector("#opaque-d");
    opaque.style.textAlign = "center";
    opaque.style.fontSize = "42px";
    opaque.style.height = "500px";
    opaque.style.width = "400px";
    
    const ins = document.querySelector("#inside-o");
    ins.style.width = "200px";
}

export default load_home;