import React from 'react';
import { AnnuityContent, AnnuityContainer,AnnuityH1, AnnuityP} from './annuity';

const Annuities = () => {
   
    return(  
        <AnnuityContainer>
            <AnnuityContent>
                <AnnuityH1>Annuities</AnnuityH1>
                <AnnuityP> Annuities are contractual payment(s) obligations between you and an insurance company for the purpose to save your money and incrementally withdraw it during retirement, effectively giving you a fixed income indefinitely. Payouts are then given by the insurance company monthly. 
Generally, more interest is gained the longer your contract is with the insurance company.
A benefit from annuity contracts is that there are no contribution limits unlike 401(k)s or IRAs where they have a limit to how much you can contribute.
(https://www.irs.gov/retirement-plans/annuities-a-brief-description) 
</AnnuityP>
            </AnnuityContent>
        </AnnuityContainer>
    )
}
export default Annuities;
