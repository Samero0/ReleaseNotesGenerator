import { styled } from 'styled-components';
import Button from './components/Button.tsx';
import Input from './components/Input.tsx';
import Label from './components/Label.tsx';
import TextBox from './components/Textbox.tsx';
import { useHandlerState } from './hooks/codeGenerator.ts';
import { codeGenerator } from './hooks/codeGenerator.ts';
import { useState } from 'react';

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: 2px solid grey;
  border-radius: 25px;
  box-shadow: lightgray 5px 5px;
  padding: 1em;
`;

const FormInputElement = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  gap: 1em;
  align-items: center;
`;

const FormDisplay = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 1em;
  justify-content: center;
  align-items: center;
`;

const FormResult = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
`;

const LargeTextArea = styled.textarea`
    width: 700px;
    height: 270px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 11px;
    border: 1px black solid;
    border-radius: 10px;
    box-shadow: 1px 1px;
    padding: 10px 20px;
    color: black;
    border: 1px darkslategray solid;
    border-radius: 10px;
    &::placeholder{
        opacity:1;
        color: grey;
    }
`;

export const App = () => {

    // handlers for the inputs
    const { value: inputDate, handleChange: handleChangeDate } = useHandlerState();
    const { value: inputVersion, handleChange: handleChangeVersion } = useHandlerState();
    const { value: inputContent, handleChange: handleChangeContent } = useHandlerState();

    // code generator function
    const generateCode = (inputDate: string, inputVersion: string, inputContent: string) => {
        const code = codeGenerator(inputDate, inputVersion, inputContent)();
        setCodeValue(code);
    };

    const [code, setCodeValue] = useState<string>('');

    return (
        <Display>
            <FormDisplay>

                <FormInputElement>
                    <Label id="label_date" text="Date:" />
                    <Input
                        id="input_date"
                        placeholder="DD/MM/YYYY"
                        value={inputDate}
                        onChange={handleChangeDate} 
                    />
                </FormInputElement>

                <FormInputElement>
                    <Label id="label_version" text="Version:" />
                    <Input
                        id="input_version"
                        placeholder="0.0.0"
                        value={inputVersion}
                        onChange={handleChangeVersion} 
                    />

                </FormInputElement>

                <Label id="label_content" text="Content:" />
                <LargeTextArea
                    id="input_content"
                    placeholder="<Html></Html>"
                    value={inputContent}
                    onChange={handleChangeContent} 
                />

            </FormDisplay>

            <FormResult>
                <Button
                    id="button_generate"
                    onClick={() => generateCode(inputDate, inputVersion, inputContent)}
                    text="Generate"
                />
                <TextBox id="textBox_code" placeholder="Code will generate here" value={code} />
            </FormResult>

        </Display>
    );
};
