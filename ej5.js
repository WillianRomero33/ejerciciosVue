const { createApp, ref } = Vue

createApp({
  // Usando composition API
  setup() {

    // definicion de variables para una tareas
    const tareas = ref([]);
    const nuevaTarea = ref('');

    // Función para agregar tareas
    const agregarTarea = () => {
        // si la variables nueva tarea esta vacia, que se agregue una nueva tarea
        // con los valores de id y name
        if (nuevaTarea.value.trim() !== '') {
            tareas.value.push({
              id: Date.now(),
              name: nuevaTarea.value,
            });
            // Limpia el input después de agregar la tarea
            nuevaTarea.value = ''; 
          }
    };

    // Función para borrar tareas
    const borrarTarea = (id) => {
        tareas.value = tareas.value.filter(tarea => tarea.id !== id);
    }

    return {
        agregarTarea,
        tareas,
        nuevaTarea,
        borrarTarea,
    }
  }

  

  
}).mount('#app5')

