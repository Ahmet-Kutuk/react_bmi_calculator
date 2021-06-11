import React from "react";
import { Wrapper, DıetImg, DıetContainer, Info, ReCalculate } from "../../styles/pages/Diet";
import DietPıc from "../../assets/undraw_diet_ghvw.svg";
import {Link} from 'react-router-dom';
function Diet() {
  return (
    <>
      <Wrapper>
        <DıetImg alt="" src={DietPıc} />
        <DıetContainer>
          <span className="title">Your Dıet</span>
          <Info>
            <span>Morning:</span>1 slice of wholemeal bread, 1 feta cheese,
            plenty of tomato, cucumber 1 piece of fruit.
          </Info>
          <Info>
            <span>Lunch:</span>100gr lean meat salad, 1 bowl of light yogurt, 1
            bowl of soup.
          </Info>
          <Info>
            <span>Evening:</span>meatless dinner, 1 whole wheat bread salad, 1
            bowl of light yogurt Break 1 hit fruit
          </Info>
          <Link to="/"><ReCalculate>Re Calculate</ReCalculate></Link>
        </DıetContainer>
      </Wrapper>
    </>
  );
}

export default Diet;
