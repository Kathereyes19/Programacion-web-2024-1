import { initInputValue } from '../Hooks/useForm'; 
// Esta importación sugiere que el código hace uso de un hook llamado useForm 
// y de alguna forma de inicialización de valores de entrada.

export const formReducer = (state, action) => { //Toma dos parámetros: state y action. 
    // El state representa el estado actual del formulario
    // El action representa la acción que se va a ejecutar en ese estado.

    switch (action.type) { //manejar diferentes tipos de acciones
        case 'SET_INPUT_VALUES':
            return {
                ...state,
                ...action.payload
            };

        //  Se utiliza para actualizar los valores de entrada del formulario.
        // Cuando se ejecuta esta acción, el reductor devuelve un nuevo estado que consiste en el estado actual 
        // más los valores proporcionados en el campo payload de la acción.

        //un "payload" se refiere a la parte de una acción que lleva información relevante para realizar una operación específica.
    
        case 'RESET_INPUT_VALUES':
            return {
                ...state,
                ...initInputValue
            };

            // Esta acción se utiliza para restablecer los valores de entrada del formulario a sus valores iniciales. 
            // Cuando se ejecuta esta acción, el reductor devuelve un nuevo estado que consiste en el estado actual 
            //más los valores iniciales proporcionados en initInputValue.
        default:
            return state;
    }
};
