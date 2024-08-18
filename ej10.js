const { createApp, ref, defineComponent, watch } = Vue;

// Definir el componente MensajeVariable
const MensajeVariable = defineComponent({
  props: {
    valor: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const mensaje = ref('');

    // Usar watch para observar cambios en 'valor'
    watch(
      () => props.valor,
      (nuevoValor) => {
        // Cambiar el mensaje cuando 'valor' cambie
        if (nuevoValor === 'vue') {
          mensaje.value = 'vue es muy divertido';
        } else if (nuevoValor === 'por que') {
          mensaje.value = 'Es interesante la forma de trabajar';
        } else {
          mensaje.value = 'Valor desconocido';
        }
      },
      { immediate: true } // Para que se ejecute inmediatamente con el valor inicial
    );

    return {
      mensaje
    };
  },
  template: `
    <div>
      <p>Valor Actual: {{ valor }}</p>
      <p v-if="mensaje">Mensaje: {{ mensaje }}</p>
    </div>
  `
});

// Crear y montar la aplicación Vue
createApp({
  components: {
    MensajeVariable
  },
  setup() {
    // Definir variables
    const valor = ref("");

    return {
      valor
    };
  }
}).mount("#app10");
