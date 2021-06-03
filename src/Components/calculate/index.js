import React,{useState,useEffect} from 'react'
import { FormContainer,FormItem,FormButton,InfoButton,Wrapper,DesktopImg,MobileImg,Form,Input,BoxImg,Title } from '../../styles/pages/calculate';
import Desktop from '../../assets/illustration-woman-online-desktop.svg';
import Mobile from '../../assets/illustration-woman-online-mobile.svg';
import Box from '../../assets/illustration-box-desktop.svg';
import {Link} from 'react-router-dom';
function Calculate() {
    localStorage.setItem('weight',0);
    localStorage.setItem('height',0);

    const [weight,setWeight] = useState(0);
    const [height,setHeight] = useState(0);

    useEffect(() => {
        localStorage.setItem('weight',weight);
        localStorage.setItem('height',height);
    },[weight,height]);

   
    
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
                        <Input type="number" onChange={(e) => setHeight(e.target.value)}  placeholder="Height" />
                        <Input type="number" onChange={(e) => setWeight(e.target.value)}  placeholder="Weight" />
                    </FormItem>
                    <Link to="/result"><FormButton>Calculate</FormButton></Link>
                    <Link to="/info"><InfoButton >Whats Bmi?</InfoButton></Link>
                </Form>
                </FormContainer>
            </Wrapper>
        </>
    )
}

export default Calculate;
