const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".MenuLinks");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("show");
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });
}

// 1. Create a new date object representing the current date and time
const today = new Date();

// 2. Format the date cleanly (e.g., "Monday, June 22, 2026")
const formattedDate = today.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// 3. Find the HTML element by its ID and insert the formatted date
document.getElementById('displayDate').textContent = formattedDate;