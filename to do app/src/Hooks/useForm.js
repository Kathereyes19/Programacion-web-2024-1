import { useState } from 'react';

const initInputValue = {
    taskName: '',
    description: '',
    priority: ''
};

// Define un objeto llamado initInputValue que representa los valores iniciales del formulario. 
// Tiene tres campos: taskName, description y priority, inicializados con cadenas vacías.

export const useForm = (createTasks) => {
    const [inputValues, setInputValues] = useState(initInputValue);

// Se utiliza para gestionar el estado de un formulario de entrada
// Recibe una función createTasks como argumento. Esta función se utilizará para crear una nueva tarea con los valores del formulario.

// Utiliza useState para definir el estado inputValues, que almacena los valores del formulario. 
// initInputValue se utiliza como valor inicial del estado.

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValues({
            ...inputValues,
            [name]: value
        });
    };

    // Se utilizará para manejar los cambios en los campos del formulario. 
    // Extrae el nombre y el valor del campo que cambió del evento e.target 
    // Actualiza el estado inputValues con el nuevo valor utilizando la sintaxis

    const handleSubmit = (e) => {
        e.preventDefault();
        createTasks(inputValues);
        setInputValues(initInputValue);
    };

    // Se utilizará para manejar la presentación del formulario. 
    // Llama a e.preventDefault() para evitar que el formulario se envíe automáticamente. 
    // Luego, llama a la función createTasks con los valores actuales del formulario
    // restablece el estado del formulario a los valores iniciales utilizando setInputValues(initInputValue).

    return {
        inputValues,
        handleChange,
        handleSubmit
    };
};
