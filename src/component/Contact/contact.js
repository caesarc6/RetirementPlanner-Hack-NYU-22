import styled from 'styled-components';

export const ContactContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const ContactContainer = styled.div`
background: #fff;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 30px;
height: 800px;
position: relative;
z-index: 1;
overflow: hidden;
`;


export const ContactH1 = styled.h1`
color: #000000;
font-size: 48px;
text-align: center;
z-index: 3;

@media screen and (max-width: 768px)
{
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 18px
}
`;

export const ContactP = styled.p`
margin-top: 24px;
color: #000000;
font-size: 24px;
text-align: center;
max-width: 600px;
z-index: 3;

@media screen and (max-width: 768px) {
    font-size: 24px
}

@media screen and (max-width: 480px) {
    font-size: 18px
}
`;