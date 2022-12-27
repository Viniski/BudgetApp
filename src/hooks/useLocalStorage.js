import { useState } from "react";

function useLocalStorage(key, defaultValue) {

    const [state, setState] = useState(() => {
        const storageValue = window.localStorage.getItem(key);
        return storageValue ? JSON.parse(storageValue) : defaultValue;
      }
    )
      
    // if (typeof defaultValue === "function") {
    //     return defaultValue()
    //   } else {
    //     return defaultValue
    //   }
    
    const setValue = val => {
        setState(val);
        window.localStorage.setItem(key, JSON.stringify(val))
    }

    return [state, setValue];
}

export default useLocalStorage;
