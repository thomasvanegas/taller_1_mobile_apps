console.log("Inicio");

// Callback en el Task Queue
setTimeout(() => {
    console.log("setTimeout ejecutado");
}, 0);

// Microtarea (Promesa) - Se ejecuta antes que el setTimeout
Promise.resolve().then(() => console.log("Promesa resuelta"));

console.log("Fin");