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
  align-items: center;
  justify-content: center;
  justify-self: center;
  width: 100%;
  height: 100%;
  border: 1px solid red;
`;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Display>
      <Button onClick={() => console.log('hola')} text='hola'></Button>
      <Input id ='example_1' placeholder='Escribe aqui...'/>
      <Label id ='example_1' text='hola'></Label>
      <TextBox id='example_2' placeholder='Escribe aqui...' value='hola'/>
    </Display>
  </StrictMode>
)
