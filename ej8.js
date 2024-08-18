const { createApp, ref, defineComponent, watch, onMounted, onBeforeUnmount } = Vue;

// Definir el componente MensajeCondicional
const MensajeCondicional = defineComponent({
  props: {
    condicion: {
      type: String,
      required: true
    }
  },
  setup(props) {
    //Definir variables de los mensajes a mostrar
    const mensajeA = 'Este es el mensaje A';
    const mensajeB = 'Este es el mensaje B';

    // Definir la condición para mostrar los mensajes
    const mostrarMensajeA = ref(props.condicion === 'Primer mensaje');
    const mostrarMensajeB = ref(props.condicion === 'Segundo mensaje');

    // Observar cambios en la props 'condicion' y actualizar los mensajes
    watch(() => props.condicion, 
    (nuevoValor) => {
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
    const condicion = ref('B');
    const mensajeTecla = ref('');

    const tecla = '';

    const pressTecla = (event) => {
      if (event.key !== tecla) {
        mensajeTecla.value = `Se presionó la tecla ${event.key}`;
      }
    };

    onMounted(() => {
      window.addEventListener('keydown', pressTecla);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('keydown', pressTecla);
    });

    const cambiarCondicion = () => {
      condicion.value = condicion.value === 'A' ? 'B' : 'A';
    };

    return {
      condicion,
      cambiarCondicion,
      mensajeTecla
    };
  },
  template: `
    <div>
      <mensaje-condicional :condicion="condicion" />
      <button @click="cambiarCondicion">Cambiar Condición</button>
      <br>
      <hr>
        <br>  <br>
      <p>Puede presionar cualquier tecla y se mostrara en pantalla el nombre de la tecla presionada</p>
      <h2>{{ mensajeTecla }}</h2>
    </div>
  `
}).mount('#app8');
