import React from 'react';
import Video from '../../videos/video.mp4';
import { StartContainer, StartContent, StartBg, VideoBg, StartP, StartH1 } from './startSection'; 


const StartSection = () => {
   
    return(  
    <StartContainer id="about">
      <StartBg autoPlay loop muted defaultMuted playsinline >  
          <VideoBg autoPlay muted loop defaultMuted src={Video} type='video/mp4'/>
      </StartBg>
      <StartContent>
          <StartH1>Retirement Made Easy</StartH1>
          <StartP>Scroll Down To Learn More Info!</StartP>
      </StartContent>
    </StartContainer>
    )
}
export default StartSection;