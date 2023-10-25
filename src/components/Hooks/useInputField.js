import React from 'react';
import { InputTxt} from '../../styledComponent/styles.styled';


const useInputField = (placeholder, name, changeForm,initialValue = '') => {
  return (
    <InputTxt
      type="text"
      placeholder={placeholder}
      name={name}
      value={initialValue}
      onChange={changeForm}
    />
  );
};

export default useInputField;
