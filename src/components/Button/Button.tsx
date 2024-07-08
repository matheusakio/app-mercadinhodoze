import React from 'react';
import {StyledButton, ButtonText} from './Button.styled';
import {ButtonProps} from './Button.types';

const Button: React.FC<ButtonProps> = ({title, onPress}) => (
  <StyledButton onPress={onPress}>
    <ButtonText>{title}</ButtonText>
  </StyledButton>
);

export default Button;
