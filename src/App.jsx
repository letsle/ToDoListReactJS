import { useState } from "react"
import { Item, Container, ToDoList, Input, Button, List } from "./styles"


function App (){
    const [tasks, setTasks] = useState([])
    const [inputValue, setInputValue] = useState('')


    function inputChange(event) {
       setInputValue(event.target.value)
       
    }


    function buttonClick() {
        setTasks([...tasks, inputValue])
    
    }


    return (
        <Container>
            <ToDoList>
                <Input placeholder="Digite a sua tarefa" onChange={inputChange} />
                <Button onClick={buttonClick}>Adicionar Tarefa</Button>

                <List>
                    {
                        tasks.map(( item, index )=> ( 
                            <Item key={index}>{item}</Item>
                        ) ) 
                    }
                </List>
            </ToDoList>
        </Container>
    )
}


export default App