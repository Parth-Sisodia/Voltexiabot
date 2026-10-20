async function loadGuilds() {
    const res = await fetch("/guilds");
    const data = await res.json();

    const container = document.getElementById("guilds");

    data.guilds.forEach(g => {
        const div = document.createElement("div");
        div.className = "card";

        div.innerHTML = `
            <h2>${g.name}</h2>
            <a class="button" href="/settings/${g.id}">Manage</a>
        `;

        container.appendChild(div);
    });
}

window.onload = loadGuilds;
