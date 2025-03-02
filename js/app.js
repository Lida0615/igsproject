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
      title.textContent = item.name || "Без названия";

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
// menu
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const menuBtn = document.querySelector(".menu-btn");
  const servicesSection = document.getElementById("services");

  function handleResize() {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1700) {
          menu.classList.remove("hidden", "open");
          menuBtn.style.display = "none";
          window.removeEventListener("scroll", handleScroll);
      } else if (screenWidth >= 1500 && screenWidth <= 1700) {
          menu.classList.remove("hidden");
          menuBtn.style.display = "none";
          window.addEventListener("scroll", handleScroll);
      } else {
          menu.classList.add("hidden");
          menuBtn.style.display = "block";
          window.removeEventListener("scroll", handleScroll);
      }
  }

  function handleScroll() {
      if (window.innerWidth >= 1500 && window.innerWidth <= 1700) {
          const servicesPosition = servicesSection.getBoundingClientRect().top + window.scrollY;
          const scrollPosition = window.scrollY;

          if (scrollPosition >= servicesPosition) {
              menu.classList.add("hidden");
              menuBtn.style.display = "block";
          } else {
              menu.classList.remove("hidden");
              menuBtn.style.display = "none";
          }
      }
  }


  menuBtn.addEventListener("click", function () {
      menu.classList.toggle("hidden"); 
  });

  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", handleScroll);
  handleResize(); 
});


// 
document.addEventListener("DOMContentLoaded", function () {
  const orderBtn = document.querySelector(".order_btn"); // Кнопка открытия
  const popupOverlay = document.getElementById("popupOverlay"); // Затемненный фон popup
  const popupClose = document.getElementById("popupClose"); // Кнопка закрытия X

  // Открытие popup
  orderBtn.addEventListener("click", function () {
      popupOverlay.classList.add("active");
  });

  // Закрытие popup на кнопку X
  popupClose.addEventListener("click", function () {
      popupOverlay.classList.remove("active");
  });

  // Закрытие popup при клике на затемненный фон
  popupOverlay.addEventListener("click", function (event) {
      if (event.target === popupOverlay) {
          popupOverlay.classList.remove("active");
      }
  });
});
