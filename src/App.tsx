import './App.css'
import {useEffect} from "react";
import {ApiTodoLists} from "./api/api-todolists";

function App() {

    useEffect(() => {
        ApiTodoLists.getTodoLists().then( (res)=>{
            console.log(res.data)
        } )
    }, []);

    return (
        <>
            Hello World!
        </>
    )
}

export default App
