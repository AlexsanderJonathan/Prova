document.addEventListener("DOMContentLoaded", () => {
    // Aqui é o exe de Dark mode poha
    const toggleDarkMode = document.createElement("button");
    toggleDarkMode.textContent = "Dark Mode";
    document.body.appendChild(toggleDarkMode);
  
    toggleDarkMode.addEventListener("click", () => {
      document.body.classList.toggle("dark");
    });
  
    // Fb visual
    const articles = document.querySelectorAll("article");
    articles.forEach(article => {
      article.addEventListener("mouseover", () => {
        article.style.backgroundColor = "#e0f7fa";
      });
      article.addEventListener("mouseout", () => {
        article.style.backgroundColor = "#fff";
      });
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
  
    // Zoom canalha
    cards.forEach(card => {
      card.addEventListener("mouseover", () => {
        card.style.transform = "scale(1.1)";
      });
      card.addEventListener("mouseout", () => {
        card.style.transform = "scale(1)";
      });
    });
  
    const filterInput = document.createElement('input');
    filterInput.setAttribute("type", "text");
    filterInput.setAttribute("placeholder", "Filtrar imagens...");
    document.querySelector('main').prepend(filterInput);
  
    filterInput.addEventListener("input", (e) => {
      const searchTerm = e.target.value.toLowerCase();
      cards.forEach(card => {
        const description = card.querySelector("p").textContent.toLowerCase();
        card.style.display = description.includes(searchTerm) ? "block" : "none";
      });
    });
  });
  