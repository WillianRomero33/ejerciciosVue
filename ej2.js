const { createApp, ref } = Vue

createApp({
  // Usando composition API
  setup() {

    // definir variable del contador
    const counter = ref(0)

    // creacion de la funcion para el contador
    function increment() { 
        counter.value++
    }

    return {
        counter,
      increment,
    }
  }
  
}).mount('#app2')

