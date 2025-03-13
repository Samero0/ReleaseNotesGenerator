import { styled } from 'styled-components'

interface InputProps{
    id : string
    placeholder? : string
}

const StyledInput = styled.input`
    padding: 10px 20px;
    background-color: grey;
    color: black;
    border: none;

    &::placeholder{
        opacity:1;
        color: black;
    }
`;

const Input : React.FC<InputProps> = ({id, placeholder}) => {
    return (
        <StyledInput id={id} placeholder={placeholder}></StyledInput>
    );
};

export default Input;