import React from 'react';
import { Title, Description } from '../styledComponent/styles.styled';
import useInputField from './Hooks/useInputField';


const ContactData = ({ form, changeForm }) => {
  const { email, numberPhone } = form;

  return (
    <div className="chat-bot-container">
      <div className="chat-bot">
        <div className="chat-header">
          <Title>Datos de contacto</Title>
        </div>
        <div className="chat-messages">
          {useInputField('Correo electrónico', 'email', changeForm, email)}
          {useInputField('Teléfono celular', 'numberPhone', changeForm, numberPhone)}
        </div>
        {email !== '' && (
            <div className="contact-details">
            {email !== '' && (
              <Description>
                Correo electrónico: {email}
                <br />
                Teléfono: {numberPhone}
              </Description>
            )}
            </div>
        )}
        
        </div>
    </div>
  );
};

export default ContactData;
