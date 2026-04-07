function collectSystemInfo() {

    const info = {
        Browser: navigator.userAgent,
        Platform: navigator.platform,
        Language: navigator.language,
        CookiesEnabled: navigator.cookieEnabled,
        OnlineStatus: navigator.onLine,
        ScreenWidth: screen.width,
        ScreenHeight: screen.height
    };

    localStorage.setItem("systemInfo", JSON.stringify(info));
}

function displaySystemInfo() {

    const data = JSON.parse(localStorage.getItem("systemInfo"));

    const container = document.getElementById("systemInfo");

    let html = "";

    for (let key in data) {
        html += `<p><strong>${key}</strong>: ${data[key]}</p>`;
    }

    container.innerHTML = html;
}

collectSystemInfo();
displaySystemInfo();

async function loadComments() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/14/comments");
    const comments = await response.json();

    const container = document.getElementById("comments");

    comments.forEach(comment => {

        const block = document.createElement("div");

        block.innerHTML = `
        <h4>${comment.name}</h4>
        <p>${comment.body}</p>
        <small>${comment.email}</small>
        <hr>
        `;

        container.appendChild(block);

    });

}

loadComments();

setTimeout(() => {

document.getElementById("modal").style.display = "flex";

}, 10000);




const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

function autoTheme(){

const hour = new Date().getHours();

if(hour >= 7 && hour < 21){

document.body.classList.add("light");

}else{

document.body.classList.add("dark");

}

}

autoTheme();