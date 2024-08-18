const { createApp, ref, defineComponent, watch } = Vue;

// Definir el componente MensajeCondicional
const MensajeCondicional = defineComponent({
  props: {
    condicion: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const mensajeA = 'Este es el mensaje A';
    const mensajeB = 'Este es el mensaje B';

    // Definir la condición para mostrar los mensajes
    const mostrarMensajeA = ref(props.condicion === 'A');
    const mostrarMensajeB = ref(props.condicion === 'B');

    // Observar cambios en la prop 'condicion' y actualizar los mensajes
    watch(() => props.condicion, (nuevoValor) => {
      mostrarMensajeA.value = nuevoValor === 'A';
      mostrarMensajeB.value = nuevoValor === 'B';
    });

    return {
      mensajeA,
      mensajeB,
      mostrarMensajeA,
      mostrarMensajeB
    };
  },
  template: `
    <div>
      <p v-if="mostrarMensajeA">Mensaje A: {{ mensajeA }}</p>
      <p v-else-if="mostrarMensajeB">Mensaje B: {{ mensajeB }}</p>
      <p v-else>Mensaje por defecto</p>
    </div>
  `
});

// Crear y montar la aplicación Vue
createApp({
  components: {
    MensajeCondicional
  },
  setup() {
    // Definir el estado de la condición
    const condicion = ref('A');

    // Función para cambiar el valor de la condición
    const cambiarCondicion = () => {
      condicion.value = condicion.value === 'A' ? 'B' : 'A';
    };

    return {
        MensajeCondicional,
      condicion,
      cambiarCondicion
    };
  }
}).mount('#app8');
