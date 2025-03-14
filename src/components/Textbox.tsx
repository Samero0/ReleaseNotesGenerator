import { styled } from 'styled-components'

interface TextBoxProps{
    id: string;
    placeholder: string;
    value?: string;
}

const StyledTextBox = styled.textarea`
    padding: 10px 20px;
    background-color: #566573;
    color: black;
    width: 700px;
    height: 250px;

    &::placeholder{
        color: white;
    }
`;

const TextBox : React.FC<TextBoxProps> = ({id, placeholder, value}) => {
    return (
        <StyledTextBox id={id} placeholder={placeholder} value={value}/>
    );
}

export default TextBox;