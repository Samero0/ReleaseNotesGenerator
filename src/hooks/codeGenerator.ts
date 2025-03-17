import { useState } from "react";
import { ChangeEvent } from "react";

export const useHandlerState = () =>{ 
    
    const [value, setInputValue] = useState<string>('')
    
    const handleChange = (e : ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(e.target.value)
    };

    const setValue = (newValue: string) => {
        setInputValue(newValue);
    };

    return {value, handleChange, setValue}
};

export const codeGenerator = (date: string, version: string, content: string) => {
    return () => {
        //delete the literals "\t,\s,\n" , "\t\t..." , " \t "
        const noLiterals = content.replace(/(\\[tsn]){2,}|\\[tsn](?=\S)|\\[tsn]|\\ /g, '');
        //delete unnecesary spaces, tabs and enters
        const noSpaces = noLiterals.replace(/\s{2,}|\\[tsn] /g, ' ')
        //delete unnecesary backslashes
        const clearContent = noSpaces.replace(/\\/g, '');

        return `[{"version":"${version}", "date":"${date}", "content":"${clearContent}"}]`;
    };
};