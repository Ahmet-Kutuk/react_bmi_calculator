import React from 'react';
import {Link} from 'react-router-dom';
import {Wrapper,ResultContainer,Title,Info,ReCalculate,Diet,ResultImg} from '../../styles/pages/result';
import resultimg from '../../assets/undraw_result_5583.svg'
function Result() {
    let height = localStorage.getItem('height');
    height= height/100;
    const weight = localStorage.getItem('weight');


    const result = weight/Math.pow(height,2);
    return (
        <>
            <Wrapper>
                <ResultImg src={resultimg} alt=""></ResultImg>
                <ResultContainer>
                <span className="title">Your Bmi</span>    
                <Title result={result.toFixed(2)}>{result.toFixed(0)}</Title>
                <Info>Underweight: smaller than 18.5</Info>
                <Info>Normal Weight: 18.5 - 24.9</Info>
                <Info>Overweight: 25 - 29.9</Info>
                <Info>Obesity: 30 or greater</Info>
                <Link to="/"><ReCalculate>Re Calculate</ReCalculate></Link>
                <Link to="/diet"><Diet>Show me Diet List</Diet></Link>
                </ResultContainer>
            </Wrapper>
        </>
    )
}

export default Result;
