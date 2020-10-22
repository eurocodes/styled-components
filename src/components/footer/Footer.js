import React from 'react'
import { Button } from '../../globalStyle'
import { FooterContainer, FooterSubHeading, FooterSubscription, FooterSubText, Form, FormInput } from './Footer.elements'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recieve the latest news and trends
                </FooterSubHeading>
                <FooterSubText>You can unsubscribe at any time</FooterSubText>
                <Form>
                    <FormInput name="email" placeholder="Your Email" />
                    <Button fontBig>Suscribe</Button>
                </Form>
            </FooterSubscription>
        </FooterContainer>
    )
}

export default Footer
