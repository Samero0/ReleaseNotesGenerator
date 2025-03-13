import { styled } from 'styled-components'

interface ButtonProps{
    text : string;
    onClick : () => void;
}

const StyledButton = styled.button`
    padding: 10px 20px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
`;

const Button : React.FC<ButtonProps> = ({text, onClick}) => {
    return (
        <StyledButton onClick={onClick}>{text}</StyledButton>
    );
};

export default Button;