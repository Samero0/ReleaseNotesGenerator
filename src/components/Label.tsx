import {styled} from 'styled-components';

interface LabelProps{
    id : string;
    text : string;
}

const StyledLabel = styled.label`
    color: black;
    font-weight: bold;
    font-family: 'Times New Roman', Times, serif;
`;

const Label : React.FC<LabelProps> = ({id, text}) => {
    return (
        <StyledLabel id={id}>{text}</StyledLabel>
    );
};

export default Label;