// --- Performance: Pause Animations When Tab is Hidden ---
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') {
        document.body.classList.add('animations-paused');
    } else {
        document.body.classList.remove('animations-paused');
    }
});
