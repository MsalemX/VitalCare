// Animations and transitions for VitalCare
// ...add your animation scripts here...

// Smooth page transitions
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.opacity = 0;
    document.body.style.transition = 'opacity 0.7s';
    setTimeout(() => { document.body.style.opacity = 1; }, 100);
    // Animate all cards
    document.querySelectorAll('.rounded-xl, .rounded-lg').forEach((el, i) => {
        el.style.transform = 'translateY(40px)';
        el.style.opacity = 0;
        setTimeout(() => {
            el.style.transition = 'all 0.7s cubic-bezier(.4,2,.3,1)';
            el.style.transform = 'translateY(0)';
            el.style.opacity = 1;
        }, 300 + i * 120);
    });
});
