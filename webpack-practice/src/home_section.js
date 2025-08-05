// import "./styles.css";

export const homeSection = document.createElement("section");
homeSection.classList.add("hero");

const heroContent = document.createElement("div");
heroContent.classList.add("hero-content");

const heroHeading = document.createElement("h1");
heroHeading.classList.add("main-title");
heroHeading.textContent = "Savor the Flavors You Crave";

const heroMessage = document.createElement("p");
heroMessage.classList.add("main-subtitle");
heroMessage.textContent = "Experience culinary excellence in the heart of the city. Fresh ingredients, masterful techniques, and unforgettable flavors.";

const reserveBtn = document.createElement("a");
reserveBtn.href ="#reservations";
reserveBtn.classList.add("btn");
reserveBtn.textContent = "Reserve Your Table";

heroContent.appendChild(heroHeading);
heroContent.appendChild(heroMessage);
heroContent.appendChild(reserveBtn);
homeSection.appendChild(heroContent);

// export default homeSection;