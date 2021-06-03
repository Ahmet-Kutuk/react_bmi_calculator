import styled from 'styled-components';

export const Wrapper = styled.div`
    width:30%;
    height:70%px;
    background-color:white;
    position:absolute;
    left:270px;
    border-radius:25px;
    position:relative;
    display:flex;
    flex-direction:column;
    padding:150px 175px 150px 175px ;
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

export const InfoContainer = styled.div`
  display:flex;
  flex-direction:column;
  margin-right:10px;
  
  @media (min-width: 768px) {
    display:flex;
  flex-direction:column;
  margin-left:20px;
  padding-right:30px;
  margin-top:30px;

    }
`;

export const Title = styled.h1`
   position: absolute;
   top:75px;
   right:60px;

   @media (min-width: 768px) {
     position:static;
   }


`;
