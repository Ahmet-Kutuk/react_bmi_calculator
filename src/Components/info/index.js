import React from 'react'
import { Wrapper,InfoContainer,Title } from '../../styles/pages/info';
import resim from '../../assets/undraw_social_bio_8pql.svg'
import arrow from '../../assets/icon-arrow-down.svg';
import {Link} from 'react-router-dom';


function Info() {
	
    return (
        <>
            <Wrapper>
                <img src={resim} style={{position:"relative",bottom:"120px"}} alt="" />
                <InfoContainer>
                    <Title>Whats Bmi ?</Title>
                    <form action="">
	<div className="accordion">
		<div className="item">
			<input type="checkbox" name="test" />
			<div className="title">
			<img src={arrow} alt="" />
				Whats Bmi?
			</div>
			<div className="content">
			It is a kind of parameter that shows whether a person's weight is normal for their height.
			</div>

		</div>
		<div className="item">
			<input type="checkbox" name="test" />
			<div className="title">
				<img src={arrow} alt="" />
				How is it calculated?
			</div>
			<div className="content">
			It can be calculated by dividing the body mass in kilograms by the square of the body length in meters. It is a widely used method for calculating ideal weight.
			</div>
		</div>
	</div>

</form>
	<Link to="/"><button className="formButton"> Calculate</button></Link>
                </InfoContainer>
            </Wrapper>
        </>
    )
}

export default Info;
