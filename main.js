// Configuración del sonido de fondo
const backgroundSound = new Howl({
    src: ['https://upbeduco-my.sharepoint.com/:u:/g/personal/thomas_vanegasa_upb_edu_co/EZZNO56p8tlBjKxiYp5mkIUBZFSK6RL43s8X5B5g_RZ_Sw?e=rEd7ux'],
    loop: true,
    volume: 1
});

// Iniciar el sonido cuando la página cargue
window.addEventListener('load', () => {
    backgroundSound.play();

    // Animación de la nube
    gsap.to("#nube", {
        x: 800,
        duration: 20,
        repeat: -1,
        ease: "none"
    });

    // Animación del sol
    gsap.to("#sol", {
        y: -50,
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    });

    // Animación de la bicicleta
    gsap.to("#bici", {
        x: 400,
        rotation: 360,
        duration: 4,
        repeat: -1,
        ease: "power1.inOut",
        yoyo: true
    });
});