// Get a reference to the trapezoid element
const trapezoid = document.querySelector(".trapezoid");

// Function to move the trapezoid
function moveTrapezoid() {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Calculate the vertical movement
  const verticalMovement = scrollPosition / 2; // Adjust the factor as needed

  // Apply the transform to move the trapezoid
  trapezoid.style.transform = `translateY(${verticalMovement}px)`;
}

// Add an event listener for scroll events
window.addEventListener("scroll", moveTrapezoid);
