import { useState } from "react";
import { ChangeEvent } from "react";

export const useHandlerState = () =>{ 
    
    const [value, setInputValue] = useState<string>('')
    
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    };

    return {value, handleChange}
};

export const codeGenerator = (date: string, version: string, content: string) => {
    return () => {
        return `[{"version":"${version}","date":"${date}","content":"${content}"}]`;
    };
};