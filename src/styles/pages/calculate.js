import styled from 'styled-components';

export const Wrapper = styled.div`
    width:70%;
    height:70%px;
    background-color:white;
    border-radius:25px;
    position:relative;
    display:flex;
    flex-direction:column;
    padding:250px 150px 250px 150px;
    -webkit-box-shadow: 5px 5px 50px 5px #AF67E9; 
    box-shadow: 5px 5px 50px 5px #AF67E9;
   

    @media (min-width: 768px) {
      width:1030px;
      height:590px;
      padding:100px 0px 100px 0px;
      display:flex;
      flex-direction:row;

    }
    
    
   
`;
export const BoxImg = styled.img`
    display:none;

    @media (min-width: 992px) {
      display:block;
      position:absolute;
      top:400px;
      left:0px;
      z-index:5;
      animation:animatebox 4s linear infinite;

    }

    @media (min-width: 1200px) {
      display:block;
      position:absolute;
      top:400px;
      left:375px;
      z-index:5;
      animation:animatebox 4s linear infinite;

    }

    @keyframes animatebox {
        0% {
    animation-timing-function: ease-in;
    opacity: 1;
    transform: translateY(-45px);
  }

  24% {
    opacity: 1;
  }

  40% {
    animation-timing-function: ease-in;
    transform: translateY(-24px);
  }

  65% {
    animation-timing-function: ease-in;
    transform: translateY(-12px);
  }

  82% {
    animation-timing-function: ease-in;
    transform: translateY(-6px);
  }

  93% {
    animation-timing-function: ease-in;
    transform: translateY(-4px);
  }

  25%,
  55%,
  75%,
  87% {
    animation-timing-function: ease-out;
    transform: translateY(0px);
  }

  100% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateY(0px);
  }


    
       
    }
`;

export const Title = styled.h1`
    color:#1d1e35;
    font-size:18px;
    position:absolute;
    font-weight:bold;
    bottom:150px;
    right:20px;

    @media (min-width: 768px) {
      position:relative;
      bottom:0;
      right:0;
      font-size:24px;
    }
    

`;

export const FormContainer =styled.div`
    position: relative;
    left:80px;
    top:0px;

    @media (min-width: 768px) {}


`;

export const FormItem = styled.div`
    position:absolute;
    height:48px;
    bottom:60px;
    
    @media (min-width: 768px) {
      position:relative;
      bottom:0; 
    }

    

`;

export const Form = styled.form`
   margin-top:30px;

   @media (min-width: 768px) {}


`;


export const Input = styled.input`    
    
    width:250px;
    border:1px solid;
    border-radius:0.5rem;
    outline:none;
    padding:1rem;
    background:none;
    position:absolute;
    right:-45px;
    z-index:1;


    &::placeholder {
        color:#6565e7;
        font-weight:bold;
        }

    &+&{
        margin-top:70px;
    }
    @media (min-width: 768px) {

      width:60%;
      height:100%;
      position:relative;
      right:0;

      &+&{
        margin-top:30px;
      }
    }


`;

export const FormButton =styled.button`
    width:250px;
    border-radius:0.5rem;
    padding:1rem;
    position:absolute;
    top:70px;
    left:-203px;
    background:#6565e7;
    color:white;
    font-weight:700;
    cursor:pointer;

    &:hover{
        box-shadow:0px 5px 15px 0px #AF67E9;
    }
    @media (min-width: 768px) {
      width:60%;
      bottom:90px;
      height:48px;
      top:220px;
      left:0;
    }

`;

export const InfoButton =styled.button`
    position:absolute;
    width:250px;
    border-radius:0.5rem;
    padding:1.5rem;
    top:140px;
    left:-203px;
    background:#AF67E9;
    color:white;
    font-weight:700;
    cursor:pointer;
    bottom:20px;
    text-align:center;
    &:hover{
        box-shadow:0px 5px 15px 0px #6565e7;
    }
    @media (min-width: 768px) {
      width:60%;
      padding:1rem;
      height:48px;
      left:0;
      top:290px;
    }

`;

export const DesktopImg = styled.img`
    display:none;

    @media (min-width: 768px) {
      display:block;
    }

`;

export const MobileImg = styled.img`
    display:block;
    position:absolute;
    bottom:450px;
    left:0;
    

    @media (min-width: 768px) {
      display:none;
    }

`;