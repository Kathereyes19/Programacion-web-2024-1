import { useState } from 'react'

const initInputValue = ''

export const useForm = (createTask) => {
    const [inputValue, setInputValue] = useState(initInputValue)

    const disableBtn = inputValue.trim() === ''

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (disableBtn) {
            return
        }
        createTask(inputValue)
        setInputValue(initInputValue)
    }

    return {
        inputValue,
        disableBtn,
        handleChange,
        handleSubmit
    }
}