import { useState } from 'react';

const initInputValue = {
    taskName: '',
    description: '',
    priority: ''
};

// Define un objeto llamado initInputValue que representa los valores iniciales del formulario. 
// Tiene tres campos: taskName, description y priority, inicializados con cadenas vacías.

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUES':
            return {
                ...state,
                inputValues: action.payload
            };
        case 'RESET_INPUT_VALUES':
            return {
                ...state,
                inputValues: initInputValue
            };
        default:
            return state;
    }
};


export const useForm = (createTasks) => {
    const [state, dispatch] = useReducer(formReducer, {
        inputValues: initInputValue
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'SET_INPUT_VALUES',
            payload: {
                ...state.inputValues,
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTasks(state.inputValues);
        dispatch({
            type: 'RESET_INPUT_VALUES'
        });
    };


    return {
        inputValues: state.inputValues,
        handleChange,
        handleSubmit
    };
};
