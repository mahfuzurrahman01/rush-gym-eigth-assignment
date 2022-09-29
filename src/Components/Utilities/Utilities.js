
const setTheInnerText = (id,value) =>{
    const field = document.getElementById(id);
    field.innerText = value;
}
const setToLocalStorage = (id) =>{
    localStorage.setItem('break-time',id)
}
const getFromLocalStorage = () =>{
   const value = localStorage.getItem('break-time')
   return value;
}

export {setTheInnerText,setToLocalStorage,getFromLocalStorage}