
// NAVIGATION

function showSection(sectionName) {
    let sections = document.querySelectorAll(".section");

    sections.forEach(function(section) {
        section.classList.remove("active");
    });

    document.getElementById(sectionName).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// SIGN LANGUAGE VIDEO CATALOG

let signs = [

    {
        name: "Hello",
        category: "Greetings",
        video: "fea5jK8t4Ng",
        description: "A common greeting."
    },

    {
        name: "Good morning",
        category: "Greetings",
        video: "y1Baezm8n9k",
        description: "A greeting used in the morning."
    },

    {
        name: "Good afternoon",
        category: "Greetings",
        video: "2apesscJET4",
        description: "A greeting used in the afternoon."
    },

    {
        name: "Please",
        category: "Greetings",
        video: "x8UsgewqHjE",
        description: "A polite expression."
    },

    {
        name: "Thank you",
        category: "Greetings",
        video: "ACHyaxL-ogo",
        description: "An expression of gratitude."
    },

    {
        name: "Help",
        category: "Everyday",
        video: "IdgElwNZUA8",
        description: "Used when someone needs assistance."
    },

    {
        name: "Invitation",
        category: "Everyday",
        video: "KYYg5qVk_f0",
        description: "An invitation to participate."
    },

    {
        name: "Hunger",
        category: "Everyday",
        video: "4tbKqbbKsgA",
        description: "The feeling of needing food."
    },

    {
        name: "Service",
        category: "Everyday",
        video: "KoIoMjvOAP0",
        description: "A concept related to providing help or assistance."
    },

    {
        name: "Work",
        category: "Everyday",
        video: "xpAJ0vf0cfo",
        description: "An activity or occupation."
    },

    {
        name: "Transformation",
        category: "Everyday",
        video: "m6OMJuREhcI",
        description: "A process of change."
    },

    {
        name: "Love",
        category: "Emotions",
        video: "WdWLD7_BR-E",
        description: "An expression of affection."
    },

    {
        name: "Happy",
        category: "Emotions",
        video: "kCdZolVunVk",
        description: "A feeling of happiness."
    },

    {
        name: "Proud",
        category: "Emotions",
        video: "7FAC0mMGan0",
        description: "A feeling of pride."
    },

    {
        name: "Relaxed",
        category: "Emotions",
        video: "VuRsOLIIMdg",
        description: "A calm and peaceful feeling."
    },

    {
        name: "Patience",
        category: "Emotions",
        video: "6BI8FXVi6Hc",
        description: "The ability to wait calmly."
    },

    {
        name: "Smile",
        category: "Emotions",
        video: "YZucWPLbY2g",
        description: "A happy facial expression."
    },

    {
        name: "Beautiful",
        category: "Expressions",
        video: "C-AHGxh6L6A",
        description: "Something or someone beautiful."
    },

    {
        name: "Pretty",
        category: "Expressions",
        video: "LPdH0Ap7yu4",
        description: "A positive description of appearance."
    },

    {
        name: "Handsome",
        category: "Expressions",
        video: "acYgezlswg8",
        description: "A positive description of appearance."
    },

    {
        name: "Determined",
        category: "Expressions",
        video: "sc8awxkB_bI",
        description: "Someone who has a strong purpose."
    },

    {
        name: "Sociable",
        category: "Expressions",
        video: "sG1vX2P5nro",
        description: "Someone who enjoys interacting with others."
    },

    {
        name: "Creative",
        category: "Expressions",
        video: "nMHqKEYIfOg",
        description: "Someone who has creative ideas."
    },

    {
        name: "Committed",
        category: "Expressions",
        video: "jl9mGTBtjHU",
        description: "Someone dedicated to a goal."
    },

    {
        name: "Lucky",
        category: "Expressions",
        video: "RZT-kR_oPtw",
        description: "Someone who has good fortune."
    },

    {
        name: "Cool",
        category: "Expressions",
        video: "Yj_ei_sTv5c",
        description: "A common expression of approval."
    }

];


// CATALOG VARIABLES

let selectedCategory = "All";


// DISPLAY ALL SIGNS

function displaySigns(list) {

    let grid = document.getElementById("signGrid");

    grid.innerHTML = "";

    document.getElementById("resultsCount").textContent =
        list.length + " signs found";

    if (list.length === 0) {

        document.getElementById("noResults").classList.remove("hidden");

        return;

    }

    document.getElementById("noResults").classList.add("hidden");

    list.forEach(function(sign) {

        let card = document.createElement("article");

        card.classList.add("sign-card");

        card.innerHTML = `
            <div class="sign-video">
                <iframe
                    src="https://www.youtube.com/embed/${sign.video}"
                    title="${sign.name} - Colombian Sign Language"
                    loading="lazy"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="sign-info">
                <span class="sign-category">
                    ${sign.category}
                </span>

                <h3>${sign.name}</h3>

                <p>${sign.description}</p>
            </div>
        `;

        grid.appendChild(card);

    });

}


// FILTER BY CATEGORY AND SEARCH

function filterSigns() {

    let search = document.getElementById("searchInput")
        .value.toLowerCase();

    let filtered = signs.filter(function(sign) {

        let matchesSearch =
            sign.name.toLowerCase().includes(search) ||
            sign.category.toLowerCase().includes(search) ||
            sign.description.toLowerCase().includes(search);

        let matchesCategory =
            selectedCategory === "All" ||
            sign.category === selectedCategory;

        return matchesSearch && matchesCategory;

    });

    displaySigns(filtered);

}


// SELECT CATEGORY

function selectCategory(category, button) {

    selectedCategory = category;

    let buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(function(item) {
        item.classList.remove("active");
    });

    button.classList.add("active");

    filterSigns();

}


// INITIALIZE CATALOG

displaySigns(signs);

