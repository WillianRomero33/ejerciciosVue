const { createApp, ref } = Vue

createApp({
  // Usando composition API
  setup() {

    // definicion de variables para el cálculo
    const num1 = ref(0);
    const num2 = ref(0);
    const resultado = ref(0);

    // Funciones para calculos matematicos
    // suma
    const calcularS = () => {
      resultado.value = num1.value + num2.value;
    };

    // resta
    const calcularR = () => {
        resultado.value = num1.value - num2.value;
    };

    // multiplicación
    const calcularM = () => {
        resultado.value = num1.value * num2.value;
    };

    // División
    const calcularD = () => {
        resultado.value = num1.value / num2.value;
    };

    //Borrar los numeros ingresados en los inputs
    const limpiar = () => {
        num1.value = 0;
        num2.value = 0;
    };

    return {
        num1,
        num2,
        resultado,
        calcularS,
        calcularR,
        calcularM,
        calcularD,
        limpiar,
    }
  }

  

  
}).mount('#app6')

