const { createApp, ref, watch } = Vue;

createApp({
  // Usando composition API
  setup() {
    // Definir el tema o cargar desde localStorage
    const tema = ref(localStorage.getItem("tema") || "claro");

    const cambiarTema = () => {
      tema.value = tema.value === "oscuro" ? "claro" : "oscuro";
      // Guardar en localStorage
      localStorage.setItem("tema", tema.value);
    };

    // Cambiar la clase del body cuando cambia el tema
    // Watch se debe importar
    watch(
      tema,
      (nuevoTema) => {
        document.body.className = nuevoTema;
      },
      { immediate: true }
    );

    return {
      tema,
      cambiarTema,
    };
  },
}).mount("#app7");
