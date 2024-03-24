import { initInputValue } from '../Hooks/useForm'; 

export const formReducer = (state, action) => { 

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
