import styled from 'styled-components';

export const StartContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
position: relative;
z-index: 1;
height: 90vh;
`;

export const StartBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
z-index: -1;
`;

export const VideoBg = styled.video`
width: 100%;
height: 100%;
-o-object-fit: cover;
object-fit: cover;
background: #232a34;
filter: brightness(0.86);
`;

export const StartContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8x 24px;
display: flex;
flex-direction: column;
align-items: center;
`;

export const StartH1 = styled.h1`
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

export const StartP = styled.p`
margin-top: 24px;
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