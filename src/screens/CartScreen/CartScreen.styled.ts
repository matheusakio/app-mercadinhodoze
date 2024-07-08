import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
`;

export const TitleContainer = styled.View`
  flex: 1; /* Ocupa todo o espaço disponível */
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.dark};
`;

export const TitleValueItens = styled.Text`
  font-size: 14px;
  padding: 16px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.dark};
`;

export const ButtonClear = styled.TouchableOpacity``;

export const ButtonClearText = styled.Text`
  font-size: 16px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.red};
`;

export const ProductContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const ProductImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export const ProductInfo = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 11px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.dark};
`;

export const ProductPrice = styled.Text`
  font-size: 12px;
  font-weight: bold;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.dark};
`;

export const Footer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.white};
`;

export const FooterButton = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 5px;
`;

export const FooterButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.primary};
`;

export const FooterTotal = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const FooterTotalText = styled.Text`
  font-size: 16px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.white};
`;

export const NavBar = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 0;
`;

export const NavBarButton = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const NavBarButtonText = styled.Text`
  font-size: 12px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.white};
`;

export const QuantityContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.primary};
  border-radius: 16px;
`;

export const QuantityText = styled.Text`
  font-size: 10px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.white};
`;

export const ButtonAddIten = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  width: 26px;
  height: 26px;
  color: ${props => props.theme.colors.white};
`;
export const ButtonText = styled.Text`
  font-size: 14px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.white};
`;

export const SeparatorView = styled.View`
  border-width: 0.5px;
  opacity: 0.2;
  border-color: '#E5E5E5';
`;
