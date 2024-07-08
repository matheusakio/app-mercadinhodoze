import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 20px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.colors.white};
  font-size: 16px;
  font-weight: bold;
  font-family: 'Nunito-Regular';
`;
