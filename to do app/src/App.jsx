import { Form } from "./components/Form/Form"
import { Filter } from "./components/Filters/Filters"
import { List } from "./components/List/List"
import { Footer } from "./components/Footer/Footer"
import { TodoContextProvider } from './context/ToDoAppContextProvider'

export default function App (){
    return(
        <div className='animate__animated animate__fadeInDown'>
        <>
        <TodoContextProvider>
        <Form/>
        <Filter/>
        <List/>
        <Footer/>
        </TodoContextProvider>
        </>
        </div>
    ) 
}