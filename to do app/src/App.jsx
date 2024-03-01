import { Form } from "./components/Form/Form"
import { ToDoAppContextSource } from "./context/ToDoAppContextSource"

export default function App (){
    return(
        <>
        <Form/>
        <ToDoAppContextSource/>
        </>
    ) 
}