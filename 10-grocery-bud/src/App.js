import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

 // get values from local storege
 const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if(list){
     return JSON.parse(list);
  } else {
    return [];
  }
}

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState(getLocalStorage()); 
  const [alert, setAlert] = useState({show:false,type:'',msg:''});
  const [editingId, setEditingId] = useState(null); 

  const handleSubmit = e => {
    e.preventDefault();

    if(!item){     // check for empty value
      showAlert(true,"danger","Please enter value");
    } 
    else if(item && editingId !== null ) {    // edit item
      setList(list.map(element => {
        if(element.id === editingId)  { 
         return {...element,title:item};
        } 
        return element;
      }));
      showAlert(true,"success","Value changed");
      setItem("");
      setEditingId(null);
    } else { // add item
        let newItem = {id:new Date().getTime().toString(),title:item};
        setList((list) => {
          return [...list,newItem];
        });
        showAlert(true,"success","Item added to the list");
        setItem("");
        }
  } 

  const handelDelete = id => {
    const newList = list.filter((item => item.id !== id));
    setList(newList);
    showAlert(true,"danger","Item removed");
  }

  const handelEdit = id => {
    setEditingId(id);
    const itemName = list.find(item => item.id === id);
    setItem(itemName.title);
  }

  const showAlert = (show=false,type='',msg='') => {
    setAlert({show,type,msg});
  }
  const clearAllItems = () =>{
    setList([]);
    showAlert(true,"danger","Empty list");
  }
  // store into local storage
  useEffect(() => {
    localStorage.setItem("list",JSON.stringify(list));
  },[list])

  return (
      <section className="section-center">
        <form className="grocery-form" onSubmit={handleSubmit}>   
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}     
           <h3>Grocery Bud</h3>
          <div className="form-control">
              <input type="text" 
                     className="grocery"
                     placeholder="e.g. Poteto" 
                     value={item}
                     onChange={(e) => setItem(e.target.value) }
                     />
               <button type="submit" className="submit-btn">{editingId !== null ? "Edit" : "Submit"}</button>
            </div> 
            </form> 
            {
                list.length > 0 && 
                <div className="grocery-container">  
                 <List list={list} handelDelete={handelDelete} handelEdit={handelEdit}/>
                 <button type="button" className="clear-btn" onClick={clearAllItems}>Clear Items</button>
              </div>
            }

      </section>
  )
}

export default App
