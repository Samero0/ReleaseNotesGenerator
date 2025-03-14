import 'bootstrap/dist/css/bootstrap.min.css'
import { styled } from 'styled-components'
import Button from "./components/Button.tsx"
import Input from "./components/Input.tsx"
import Label from "./components/Label.tsx"
import TextBox from "./components/Textbox.tsx"
import { useHandlerState } from "./hooks/codeGenerator.ts"

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: 2px solid grey;
  border-radius: 25px;
  box-shadow: lightgray 5px 5px;
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  gap: 1em;
  align-items: center;
`;

export const App = () => {

    const { value: inputDate, handleChange: handleChangeDate } = useHandlerState();
    const { value: inputVersion, handleChange: handleChangeVersion } = useHandlerState();
    const { value: inputContent, handleChange: handleChangeContent } = useHandlerState();

    return (
        <Display>
            <Element>
                <Input
                    id='input_date' placeholder='DD/MM/YYYY'
                    value={inputDate}
                    onChange={handleChangeDate}
                />
                <Label
                    id='label_date'
                    text='Date'
                />
            </Element>
            <Element>
                <Input id='input_version'
                    placeholder='0.0.0'
                    value={inputVersion}
                    onChange={handleChangeVersion}
                />
                <Label
                    id='label_version'
                    text='Version'
                />
            </Element>
            <Element>
                <Input id='input_content'
                    placeholder='<Html></Html>'
                    value={inputContent}
                    onChange={handleChangeContent}
                />
                <Label id='label_content'
                    text='Content'
                />
            </Element>
            <Element>
                <TextBox id='textBox_code'
                    placeholder='Code will generate here'
                />
                <Button
                    id='button_generate'
                    onClick={() => console.log('hola')}
                    text='Generate'
                />
            </Element>
        </Display>
    );
}