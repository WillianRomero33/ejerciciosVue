const { createApp, ref } = Vue

createApp({
  // Usando composition API
  setup() {
    // Definir el tema predeterminado o cargar desde localStorage
    const tema = ref(localStorage.getItem('tema') || 'claro');

    const cambiarTema = () => {
      tema.value = tema.value === 'oscuro' ? 'claro' : 'oscuro';
      localStorage.setItem('tema', tema.value); // Guardar la preferencia en localStorage
    };

    return {
        tema,
        cambiarTema,
    }
  }

  

  
}).mount('#app7')

