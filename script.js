const items = [
    { name: "Pizza 🍕", tags: ["cheap", "fast"] },
    { name: "Biryani 🍛", tags: ["spicy"] },
    { name: "Burger 🍔", tags: ["cheap", "fast"] },
    { name: "Sushi 🍣", tags: ["expensive"] }
];

let index = 0;

const card = document.getElementById("card");
const itemName = document.getElementById("item-name");
const itemTags = document.getElementById("item-tags");
const delayText = document.getElementById("delay");
const popup = document.getElementById("exitPopup");

function showCard() {
    if (index >= items.length) {
        card.style.display = "none";
        popup.style.display = "flex";
        return;
    }

    itemName.textContent = items[index].name;
    itemTags.textContent = "Tags: " + items[index].tags.join(", ");
}

showCard();

document.getElementById("nah").onclick = function() {
    card.style.display = "none";
    index++;
    setTimeout(function() {
        card.style.display = "block";
        showCard();
    }, 300);
};

document.getElementById("yeah").onclick = function() {
    const selectedTags = Array.from(
        document.querySelectorAll("input:checked")
    ).map(tag => tag.value);

    const match = items[index].tags.some(tag =>
        selectedTags.includes(tag)
    );

    if (match) {
        alert("🎉 MATCH FOUND!");
        card.style.boxShadow = "0 0 30px lime";
    }

    showFunnyDelay();
    index++;

    setTimeout(showCard, 500);
};

function showFunnyDelay() {
    const delays = [
        "Cow crossing the road 🐄 +5 mins",
        "Chef forgot salt 🧂 +3 mins",
        "Delivery guy vibing 🎧 +2 mins"
    ];

    delayText.textContent =
        delays[Math.floor(Math.random() * delays.length)];
}

function exitApp() {
    alert("Thanks for using the app 👋");
    window.close();
}
