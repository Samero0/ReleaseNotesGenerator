import { styled } from 'styled-components'

interface TextBoxProps{
    id: string;
    placeholder: string;
    value: string;
}

const StyledTextBox = styled.textarea`
    padding: 10px 20px;
    background-color: grey;
    color: black;
    width: 150px;
`;

const TextBox : React.FC<TextBoxProps> = ({id, placeholder, value}) => {
    return (
        <StyledTextBox id={id} placeholder={placeholder} value={value}/>
    );
}

export default TextBox;