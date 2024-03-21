import { Header } from "./components/Header/Header"
import { Form } from "./components/Form/Form"
import { Filter } from "./components/Filters/Filters"
import { List } from "./components/List/List"
import { Footer } from "./components/Footer/Footer"
import { TodoContextProvider } from "./context/ToDoAppContext"

export default function App (){
    return(
        <>
        <TodoContextProvider>
        <Header/>
        <Form/>
        <Filter/>
        <List/>
        <Footer/>
        </TodoContextProvider>
        </>
    ) 
}