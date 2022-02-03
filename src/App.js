
import './App.css';
import React,{ useState } from 'react';
import TodoLists from './TodoLists';

const App = () => {
  const [inputList, setInputList] = useState("buy books");
  const [Items ,setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const TodoItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };
   
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem , index) => {
        return index !== id;
      })
    })
  };

    return(
        <div class="Main" > 
        <div class="center">
        <br />
        <h1>TODO</h1>
        <br />
        <input type="text" placeholder='Add a item' value={inputList } onChange={ itemEvent} />
        <button onClick={TodoItems}> ADD </button>

        <ol>
            {Items.map( (itemval, index)  => {
              return <TodoLists key={index} id={index} text={itemval}
              onSelect = {deleteItems}/>;
            })}
        </ol>
            </div></div>
    )
}
export default App;