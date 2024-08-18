const { createApp, ref } = Vue

createApp({
  // Usando composition API
  setup() {

    // Definicion de variales
    const frase = 'Vue.js es una framework de código abierto para el desarrollo de interfaces de usuario de forma reactiva'; 
    const mensaje = ref(frase);

    // Función para ocultar la frase disponible
    const ocultarFrase = () => { 
        mensaje.value = "";
    }

    //Función para volver a mostar la frase
    const mostrarFrase = () => {
        mensaje.value = frase;
    }

    return {
        mensaje,
        ocultarFrase,
        mostrarFrase,
    }
  }
  
}).mount('#app3')

