// Main JavaScript for VitalCare
// ...add your custom scripts here...

// Scroll to top button
window.addEventListener('DOMContentLoaded', () => {
    const btn = document.createElement('button');
    btn.innerHTML = '⬆';
    btn.title = 'العودة للأعلى';
    btn.style.position = 'fixed';
    btn.style.bottom = '32px';
    btn.style.right = '32px';
    btn.style.background = '#0c7ff2';
    btn.style.color = '#fff';
    btn.style.border = 'none';
    btn.style.borderRadius = '50%';
    btn.style.width = '48px';
    btn.style.height = '48px';
    btn.style.fontSize = '2rem';
    btn.style.boxShadow = '0 4px 16px rgba(0,0,0,0.12)';
    btn.style.cursor = 'pointer';
    btn.style.opacity = '0';
    btn.style.transition = 'opacity 0.4s';
    btn.style.zIndex = '9999';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    document.body.appendChild(btn);
    window.addEventListener('scroll', () => {
        btn.style.opacity = window.scrollY > 200 ? '1' : '0';
    });
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
