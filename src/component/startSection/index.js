import React from 'react';
import Video from '../../videos/video.mp4';
import { StartContainer, StartBg, VideoBg, StartP, StartH1 } from './startSection'; 


const StartSection = () => {
   
    return(  
    <StartContainer>
      <StartBg> 
          <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
      </StartBg>
      <startContent>
          <StartH1>Retirement Made Easy</StartH1>
          <StartP>Scroll Down To Learn More Info!</StartP>
      </startContent>
    </StartContainer>
    )
}
export default StartSection;