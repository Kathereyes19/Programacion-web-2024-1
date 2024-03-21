import { useReducer } from 'react';
import { ToDoReducer } from '../reducers/ToDoReducer';

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

export const useForm = (createTasks) => {
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
        createTasks(state);
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
