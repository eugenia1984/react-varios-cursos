import { useState, useEffect } from "react";

const useDocumentMousePosition = () => {
  
  const [ isMouseOnRange, setIsMouseOnRange ] = useState(false);
  
  const checkMousePosition = (event) => {
    setIsMouseOnRange(event?.pageY < 150);
  }
  
  // se ejecuta en el momenot de inicializar el hook
  useEffect( () => {
    document.addEventListener("mouseover", checkMousePosition);
    
    return () =>  document.removeEventListener("mouseover", checkMousePosition);
  }, [])
  
  return isMouseOnRange;
}

export default useDocumentMousePosition;
