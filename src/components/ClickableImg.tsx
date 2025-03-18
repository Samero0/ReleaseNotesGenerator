import React from "react";
import { styled } from 'styled-components'

interface ClickableImgProps{
    imageSrc: string;
    alt: string;
    onClick? : () => void;
}

const StyledImg = styled.img`
    width: 15px;
    height: 20px;
    cursor: pointer;
`;

const Clickableimg : React.FC<ClickableImgProps> = ({imageSrc, alt, onClick}) =>{
    return(
        <StyledImg src={imageSrc} alt={alt} onClick={onClick}></StyledImg>
    )
}

export default Clickableimg;