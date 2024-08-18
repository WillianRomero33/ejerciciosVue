const { createApp, ref } = Vue

createApp({

  setup() {

    const mensaje = ref('')
    
    const mostrarAlert = () => {
        alert(mensaje.value);
    }

    return {
        mensaje,
        mostrarAlert,
    }
  }

  
}).mount('#app4')

