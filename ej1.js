const { createApp, ref } = Vue

createApp({


  // Usando composition API
  setup() {
    // variable que contendra el mensaje a mostrar
    const msj = ref('Hola Bienvenido, inicia tu proyectos con Vue.js')
    const autor = ref("Willian")

    //Función para que se genere el cambio de frase
    const cambiarFrase = () => {
        msj.value = "Vue.js facilitará tu desarrollo de interfaces de usuario";
        autor.value = "romero,willian"
    }

    //retonar los valores
    return {
      msj,
      autor,
      cambiarFrase,
    }
  }
}).mount('#app')


