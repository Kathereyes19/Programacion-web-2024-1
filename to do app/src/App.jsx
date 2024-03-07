import { Button } from "./components/Button/Button"
import { Form } from "./components/Form/Form"
import { ToDoAppContextSource } from "./context/ToDoAppContextSource"

export default function App (){
    return(
        <>
        <Button/>
        <Form/>
        <ToDoAppContextSource/>
        </>
    ) 
}