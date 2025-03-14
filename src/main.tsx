import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { styled } from 'styled-components'
import Button from "./components/Button.tsx"
import Input from "./components/Input.tsx"
import Label from "./components/Label.tsx"
import TextBox from "./components/Textbox.tsx"

const Display = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: 1px solid grey;
  border-radius: 25px;
`;

const Element = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1em;
  gap: 1em;
  align-items: center;
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Display>
      <Element>
        <Input id ='input_date' placeholder='Escribe aqui...'/>        
        <Label id ='label_date' text='Date'></Label>
      </Element>
      <Element>
        <Input id ='input_version' placeholder='Escribe aqui...'/>        
        <Label id ='label_version' text='Version'></Label>
      </Element>
      <Element>
        <Input id ='input_content' placeholder='Escribe aqui...'/>        
        <Label id ='label_content' text='Content'></Label>
      </Element>
      <Element>
        <TextBox id='textBox_code' placeholder='Code will generate here'/>
        <Button id='button_generate' onClick={() => console.log('hola')} text='Generate'></Button>
      </Element>
    </Display>
  </StrictMode>
)
