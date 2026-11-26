const searchInput = document.querySelector(".header__search");
const productCards = document.querySelectorAll(".product-card");

if (searchInput) {
    searchInput.addEventListener("input", (event) => {
        const query = event.target.value.toLowerCase().trim();

        productCards.forEach((card) => {
            const title = card.querySelector(".product-card__title").textContent.toLowerCase();
            const description = card.querySelector(".product-card__description").textContent.toLowerCase();
            const matches = title.includes(query) || description.includes(query);

            card.style.display = matches ? "flex" : "none";
        });
    });
}