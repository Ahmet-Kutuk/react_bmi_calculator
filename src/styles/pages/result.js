import styled from 'styled-components';

export const Wrapper = styled.div`
    width:30%;
    height:650px;
    background-color:white;
    position:absolute;
    left:200px;
    border-radius:25px;
    position:relative;
    display:flex;
    flex-direction:column;
    padding:50px 175px 50px 175px ;
    -webkit-box-shadow: 5px 5px 50px 5px #AF67E9; 
    box-shadow: 5px 5px 50px 5px #AF67E9;
    overflow:hidden;
   

    @media (min-width: 768px) {
      width:1030px;
      height:590px;
      padding:100px 0px 100px 0px;
      display:flex;
      flex-direction:row;
      position:relative;
      left:0;

    }
    
`;

export const ResultContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin-right:10px;
  padding-right:80px;
  
  @media (min-width: 768px) {
    display:flex;
    flex-direction:column;
    margin-left:50px;
    padding-right:100px;
    position:static;
  

    }
`;
export const ResultImg = styled.img`
display:none;
   @media (min-width: 768px) {
     display:block;
   }

`;
export const Title = styled.h1`
  color: ${({result}) =>result>30 ? 'red':null};
  color:${({result}) =>result>25 && result<30 ? 'orange':null};
  color:${({result}) =>result>=18.5 && result<25 ? 'blue':null};
  color:${({result}) =>result<18.5? 'gray':null};
  font-weight:700;
  position:relative;
  right:40px;
  

  @media (min-width: 768px) {
    font-size:48px;
    position:static;
  }
  
`;

export const Info = styled.p`
  color:#6565e7;
  margin-top:30px;
  position:relative;
  right:130px;
  width:300px;

  @media (min-width: 768px) {
    position:static;
  }

`;

export const ReCalculate = styled.button`
  
  background:#6565e7;
  width:300px;
  position:relative;
  right:150px;
  border-radius:0.5rem;
  color:white;
  font-weight:700;
  padding:1rem;
  margin-top:50px;

  &:hover{
        box-shadow:0px 5px 15px 0px #AF67E9;
    }

    @media (min-width: 768px) {
      width:100%;
      height:48px;
      position:static;
      margin-top:30px;
    }

`;


export const Diet =styled.button`
  width:300px;
  position:relative;
  right:150px;
  background:#AF67E9;
  height:48px;
  border-radius:0.5rem;
  color:white;
  font-weight:700;
  padding:1rem;
  margin-top:20px;

  @media (min-width: 768px) {
      width:100%;
      height:48px;
      position:static;
  }

  &:hover{
        box-shadow:0px 5px 15px 0px #6565e7;
    }


`;