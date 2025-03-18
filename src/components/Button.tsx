import { styled } from 'styled-components'

interface ButtonProps{
    id : string;
    text : string;
    onClick : () => void;
}

const StyledButton = styled.button`
    width: 300px;
    padding: 10px 20px;
    background-color: #3D74B4;
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
    font-family: var(--font-product-font-family, "Noto Sans Display");
    &:hover{
        background-color: #336195;
        box-shadow: black 0 0 4px;
    }
`;


const Button : React.FC<ButtonProps> = ({id, text, onClick}) => {
    return (

        <StyledButton id={id} onClick={onClick}>{text}</StyledButton>

    );
};

export default Button;