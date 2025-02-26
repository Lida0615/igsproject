// tabs
let portfolioData = [];

fetch("https://beged.ru/bootProject/data.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Ошибка загрузки: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    portfolioData = data;
    renderPortfolio(data);
  })
  .catch(error => console.error("Ошибка:", error));

function renderPortfolio(portfolio, selectedCategory = "all") {
  const container = document.getElementById("portfolio1");
  const currentCards = container.querySelectorAll(".tab_block");

  currentCards.forEach(card => {
    card.classList.add("hide");
  });

  setTimeout(() => {
    container.innerHTML = "";

    const filteredPortfolio =
      selectedCategory === "all"
        ? portfolio
        : portfolio.filter(
            item => Array.isArray(item.categories) && item.categories.includes(selectedCategory)
          );

    if (!filteredPortfolio.length) {
      container.innerHTML = "<p>Нет элементов в данной категории.</p>";
      return;
    }

    filteredPortfolio.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("tab_block");

      const title = document.createElement("div");
      title.classList.add("portfolio-title");
      title.textContent = item.title || "Без названия";

      const category = document.createElement("div");
      category.classList.add("portfolio-category");
      category.textContent = Array.isArray(item.categories)
        ? item.categories.join(", ")
        : "Без категории";

      const description = document.createElement("p");
      description.classList.add("portfolio-description");
      description.textContent = item.description || "Нет описания";

      const imageUrl = item.photo || item.image;
      if (imageUrl) {
        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = item.title || "Изображение";
        card.appendChild(image);
      }

      card.appendChild(title);

      setTimeout(() => {
        card.classList.add("show");
      }, index * 100);

      container.appendChild(card);
    });

    setTimeout(() => {
      container.style.opacity = 1;
    }, 100);
  }, 500);
}

document.getElementById("categoryTabs").addEventListener("click", event => {
  if (event.target.classList.contains("tab")) {
    document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));

    event.target.classList.add("active");

    renderPortfolio(portfolioData, event.target.dataset.category);
  }
});

// burger
(function () {
  const menu = document.getElementById("menu");
  const menuBtn = document.querySelector(".menu-btn");
  const menuLinks = document.querySelectorAll(".menu-link");

  function toggleMenu() {
    menu.classList.toggle("active");
  }

  function closeMenuAndScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      menu.classList.remove("active");
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  }

  function closeMenuOnClickOutside(event) {
    if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
      menu.classList.remove("active");
    }
  }

  menuBtn.addEventListener("click", toggleMenu);
  menuLinks.forEach(link => link.addEventListener("click", closeMenuAndScroll));
  document.addEventListener("click", closeMenuOnClickOutside);
})();

