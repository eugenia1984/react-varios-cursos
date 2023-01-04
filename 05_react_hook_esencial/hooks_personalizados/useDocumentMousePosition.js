import { useState, useEffect } from "react";

const useDocumentMousePosition = () => {
  
  const [ isMouseOnRange, setIsMouseOnRange ] = useState(false);
  
  // se ejecuta en el momenot de inicializar el hook
  useEffect( () => {
    
  }, [])
  
  return isMouseOnRange;
}

export default useDocumentMousePosition;
