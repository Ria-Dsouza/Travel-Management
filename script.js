
const destinationsData = [
    {
      name: "Paris",
      image: "images/paris.jpg",
      description: "The city of love and lights."
    },
    {
      name: "Tokyo",
      image: "images/tokyo.jpg",
      description: "Experience the vibrant culture of Tokyo."
    },
    {
      name: "New York",
      image: "images/new-york.jpg",
      description: "The city that never sleeps."
    }
  ];
  
  // Function to display popular destinations
  function displayDestinations() {
    const destinationsSection = document.getElementById("destinations");
    const destinationList = document.createElement("ul");
  
    destinationsData.forEach(destination => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<h3>${destination.name}</h3>
                            <img src="${destination.image}" alt="${destination.name}">
                            <p>${destination.description}</p>`;
      destinationList.appendChild(listItem);
    });
  
    destinationsSection.appendChild(destinationList);
  }
  
  // Function to handle navigation scrolling
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  }
  
  // Display popular destinations on page load
  window.onload = function () {
    displayDestinations();
  };
  
  // Event listeners for navigation
  document.getElementById("homeLink").addEventListener("click", () => scrollToSection("home"));
  document.getElementById("destinationsLink").addEventListener("click", () => scrollToSection("destinations"));
  document.getElementById("packagesLink").addEventListener("click", () => scrollToSection("packages"));
  document.getElementById("contactLink").addEventListener("click", () => scrollToSection("contact"));
  