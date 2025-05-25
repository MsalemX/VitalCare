// UI enhancements for VitalCare
// ...add your UI scripts here...

// Dynamic navigation highlight
window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
        if (link.href === window.location.href || link.href === window.location.origin + window.location.pathname) {
            link.style.color = '#0c7ff2';
            link.style.fontWeight = 'bold';
            link.style.textDecoration = 'underline';
        }
    });
    // Button ripple effect
    document.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', function (e) {
            const circle = document.createElement('span');
            circle.className = 'ripple-effect';
            circle.style.left = e.offsetX + 'px';
            circle.style.top = e.offsetY + 'px';
            this.appendChild(circle);
            setTimeout(() => circle.remove(), 600);
        });
    });
});

// Ripple effect style
const rippleStyle = document.createElement('style');
rippleStyle.innerHTML = `.ripple-effect { position: absolute; border-radius: 50%; background: rgba(12,127,242,0.2); transform: scale(0); animation: ripple .6s linear; pointer-events: none; width: 80px; height: 80px; left: 0; top: 0; z-index: 10; } @keyframes ripple { to { transform: scale(2.5); opacity: 0; } } button { position: relative; overflow: hidden; }`;
document.head.appendChild(rippleStyle);
