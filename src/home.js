function load_home() {
    const content = document.querySelector("#content");
    content.innerHTML = `
        <img src="../src/hannibal_table.png" alt="cool img">
        
        <div id="opaque-d"> 
            <p id="intro">
                Satisfy both your tastebuds and your proclivities here with us at Primal Instincts. 
            </p>
        </div>
    `;
}

export default load_home;