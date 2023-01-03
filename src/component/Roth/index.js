import React from 'react';
import { RothContent, RothContainer,RothH1, RothP} from './roth';

const roth = () => {
   
    return(  
        <RothContainer id="roth">
            <RothContent>
                <RothH1>Roth</RothH1>
                <RothP>A Roth IRA is an individual retirement account (IRA) where you contribute your money into an account and, similarly to an annuity, this money is meant for retirement. Once you take your money out it is tax free.
(https://www.investopedia.com/terms/r/rothira.asp) </RothP>
            </RothContent>
        </RothContainer>
    )
}
export default roth;