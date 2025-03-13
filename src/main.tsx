import 'bootstrap/dist/css/bootstrap.min.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { styled } from 'styled-components'
import Button from "./components/Button.tsx"

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
      <div>hola mundo</div>
      <Button onClick={() => console.log('hola')} text='hola'></Button>
    </Display>
  </StrictMode>
)
