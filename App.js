import React from 'react';   
import NameList from './NameList';
  
function App() {  
  const myLists = ['test 1', 'test 2', 'test 3', 'test 4', 'test 5'];   

  return (  
    <div>  
        <NameList myLists={myLists} />  
    </div>  
  );  
}  



export default App;