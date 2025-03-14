import { styled } from 'styled-components'

interface ButtonProps{
    id : string;
    text : string;
    onClick : () => void;
}

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: #aeb6bf;
    color: black;
    font-weight:bold;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
`;

const Button : React.FC<ButtonProps> = ({id, text, onClick}) => {
    return (
        <StyledButton id={id} onClick={onClick}>{text}</StyledButton>
    );
};

export default Button;