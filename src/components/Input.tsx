import { styled } from 'styled-components'

interface InputProps{
    id : string
    value? : string
    placeholder? : string
    onChange? : (e : React.ChangeEvent<HTMLInputElement>) => void
}

const StyledInput = styled.input`
    padding: 10px 20px;
    background-color: #566573;
    color: white;
    border: none;

    &::placeholder{
        opacity:1;
        color: white;
    }
`;

const Input : React.FC<InputProps> = ({id, placeholder, value, onChange}) => {
    return (
        <StyledInput id={id} placeholder={placeholder} value={value} onChange={onChange}></StyledInput>
    );
};

export default Input;