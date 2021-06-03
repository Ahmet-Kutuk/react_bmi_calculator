import React,{useContext} from 'react'
import { FormContainer,FormItem,FormButton,InfoButton,Wrapper,DesktopImg,MobileImg,Form,Input,BoxImg,Title } from '../../styles/pages/calculate';
import Desktop from '../../assets/illustration-woman-online-desktop.svg';
import Mobile from '../../assets/illustration-woman-online-mobile.svg';
import Box from '../../assets/illustration-box-desktop.svg';
import {Context} from '../../Context';
import {Link} from 'react-router-dom';
function Calculate() {
    const {onChangeHeight,onChangeWidth} = useContext(Context);
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
                        <Input type="number" onChange={onChangeWidth} placeholder="Width" />
                        <Input type="number" onChange={onChangeHeight}  placeholder="Height" />
                    </FormItem>
                    <Link to="/"><FormButton>Calculate</FormButton></Link>
                    <Link to="/info"><InfoButton >Whats Bmi?</InfoButton></Link>
                </Form>
                </FormContainer>
            </Wrapper>
        </>
    )
}

export default Calculate;
