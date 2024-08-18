const { createApp, ref, watch } = Vue;

createApp({
  // Usando composition API
  setup() {
    // Definir variables
    const nombres = ref('');
    const apellidos = ref('');
    const nombreC = ref('');

    const nombreCompleto = () => {
      nombreC.value = nombres.value+" "+apellidos.value;
    };

    return {
      nombres,
      apellidos,
      nombreC,
      nombreCompleto,
    };
  },
}).mount("#app9");
