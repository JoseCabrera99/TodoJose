import React from "react";

function useLocalStorage(ItemName, initialValue){

    const[error, setError] = React.useState(false);
    const[loading, setLoading] = React.useState(true);
    const [item, setItem] = React.useState(initialValue);
  
    React.useEffect(()=>{
      setTimeout(()=>{
        try{
        const localStorageItem = localStorage.getItem('ItemName');
        let parseItem;
      
        if (!localStorageItem){  
          localStorage.setItem('ItemName',JSON.stringify(initialValue));
          parseItem = initialValue;
        }else{
          parseItem = JSON.parse(localStorageItem);
        }
  
        setItem(parseItem);
        setLoading(false);
        } catch(error){
          setError(error);
        }
      },3000)
    });
  
    const saveItem = (newItem) => {
      try{
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem('ItemName', stringifiedItem);
        setItem(newItem);
      }catch(error){
        setError(error);
      }
  
    };
  
    return{
      item,
      saveItem,
      loading,
      error,
    };
  }

  export { useLocalStorage };