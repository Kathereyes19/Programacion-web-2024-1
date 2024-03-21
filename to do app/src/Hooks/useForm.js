import { useReducer } from 'react';

const initInputValue = {
    taskName: '',
    description: '',
    priority: ''
};

const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INPUT_VALUES':
            return {
                ...state,
                ...action.payload
            };
        case 'RESET_INPUT_VALUES':
            return {
                ...state,
                ...initInputValue
            };
        default:
            return state;
    }
};

export const useForm = (createTask) => {
    const [state, dispatch] = useReducer(formReducer, initInputValue);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'SET_INPUT_VALUES',
            payload: {
                [name]: value
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(state); // Aquí se pasa el estado del formulario a la función createTask
        dispatch({
            type: 'RESET_INPUT_VALUES'
        });
    };

    return {
        inputValues: state,
        handleChange,
        handleSubmit
    };
};