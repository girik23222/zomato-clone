// Logo bounce effect on page load
window.onload = function() {
    const logo = document.querySelector(".logo img");
    logo.classList.add("bounce");

    setTimeout(() => {
        logo.classList.remove("bounce");
    }, 2000);
};

// Animation for search bar focus
const searchBar = document.querySelector('input');
searchBar.addEventListener('focus', function() {
    this.style.transition = '0.3s';
    this.style.boxShadow = '0 0 10px rgba(255, 87, 34, 0.8)';
});

searchBar.addEventListener('blur', function() {
    this.style.boxShadow = 'none';
});

// Adding a simple bounce animation class
document.querySelector(".logo img").classList.add("animated");

// CSS for the bounce animation using JS
const styleElement = document.createElement('style');
styleElement.innerHTML = `
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}
.animated.bounce {
    animation: bounce 2s;
}
`;

// Smooth scroll to top when "Order Now" button is clicked
const orderNowButton = document.querySelector('.order-now');
orderNowButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add hover animation to benefits section
const benefits = document.querySelectorAll('.benefit img');
benefits.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.classList.add('hovered');
    });
    img.addEventListener('mouseout', () => {
        img.classList.remove('hovered');
    });
});

document.head.appendChild(styleElement);


