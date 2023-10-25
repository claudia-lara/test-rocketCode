import React from 'react';
import { Div, Description } from '../styledComponent/styles.styled';


const Button = ({ createSession }) => {
    return (
        <>
            <div className="contact-details" >
                <Description padding='10px'>Si los datos son correctos continuemos</Description>
            </div>
            <br />
            <Div bkground={' '} shadow=' '>
                <button class="custom-button" onClick={() => createSession()}>GUARDAR</button>
            </Div>
        </>
    )
}
export default Button;