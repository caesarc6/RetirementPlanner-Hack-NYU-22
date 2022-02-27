import React from 'react';
import { ContactContent, ContactContainer,ContactH1, ContactP} from './contact';

const Contact = () => {
   
    return(  
        <ContactContainer>
            <ContactContent>
                <ContactH1>Contact</ContactH1>
                <ContactP>Jack Lau, Helen Lau, Caesar Cuzco, Kang In Park</ContactP>
            </ContactContent>
        </ContactContainer>
    )
}
export default Contact;
