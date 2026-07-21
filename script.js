let entries = [];

fetch("entries.json")
.then(r => r.json())
.then(data => {
    entries = data;
    roll();
});

function roll(){

    const item = entries[Math.floor(Math.random()*entries.length)];

    document.getElementById("text").textContent = item.text;
    document.getElementById("image").src = item.image;
}