import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStyle'
import { Heading, Img, ImgWrapper, InfoColumn, InfoRow, InfoSec, SubTitle, TextWrapper, TopLine } from './InfoSection.elements'

const InfoSection = ({
    lightBg,
    imgStart,
    lightTopLine,
    topLine,
    headeLine,
    lightText,
    description,
    lightTextDesc,
    buttonLabel,
    primary,
    img,
    alt,
    start,
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headeLine}</Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>{description}</SubTitle>
                                <Link to="/sign-up">
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection
