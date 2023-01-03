import styled from 'styled-components';

export const RothContent = styled.div`
overflow-wrap: anywhere;
z-index: 3;
max-width: 1200px;
margin: 0px 30px;
position: absolute;
display: flex;
flex-direction: column;
align-items: center;
`;

export const RothContainer = styled.div`
background: #000000;
display: flex;
justify-content: center;
align-items: center;
height: 800px;
position: relative;
z-index: 1;
overflow: hidden;
`;


export const RothH1 = styled.h1`
color: #fff;
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

export const RothP = styled.p`
margin: 0px 30px;
color: #fff;
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