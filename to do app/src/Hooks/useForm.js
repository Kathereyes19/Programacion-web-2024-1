import { useReducer } from 'react';
import { formReducer } from '../reducers/formReducer';
export const initInputValue = {
    taskName: '',
    description: '',
    priority: ''
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
        createTask(state); 
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
