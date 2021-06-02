import React from 'react'
import { FormContainer,FormItem,FormButton,InfoButton,Wrapper,DesktopImg,MobileImg,Form,Input,BoxImg,Title } from '../../styles/pages/calculate';
import Desktop from '../../assets/illustration-woman-online-desktop.svg';
import Mobile from '../../assets/illustration-woman-online-mobile.svg';
import Box from '../../assets/illustration-box-desktop.svg';
function Calculate() {
    return (
        <>
         <BoxImg src={Box} />
            <Wrapper>
                <DesktopImg src={Desktop}  alt="" />
                <MobileImg src={Mobile}  alt="" />
                <FormContainer>
                <Title>Calculator</Title>
                <Form>       
                     <FormItem>
                        <Input type="number" placeholder="Width" />
                        <Input type="number"  placeholder="Height" />
                    </FormItem>
                    <FormButton>Calculate</FormButton>
                    <InfoButton>Whats Bmi?</InfoButton>
                </Form>
                </FormContainer>
            </Wrapper>
        </>
    )
}

export default Calculate;
