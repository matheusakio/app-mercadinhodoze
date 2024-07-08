import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: ${props => props.theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.dark};
`;
export const TypeProduct = styled.Text`
  font-size: 12px;
  font-weight: bold;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.dark};
`;

export const ProductContainer = styled.View`
  justify-content: space-between;
  flex: 1;
  align-items: center;
  margin-top: 8px;
`;

export const ProductImage = styled.Image`
  width: 66px;
  height: 66px;
`;

export const ProductInfo = styled.View`
  width: 94px;
  flex: 1;
  margin-left: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 8px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.grayDark};
`;

export const ProductPrice = styled.Text`
  font-size: 10px;
  font-weight: bold;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.green};
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.white};
`;

export const FooterTotal = styled.View`
  justify-content: center;
`;

export const FooterTotalText = styled.Text`
  font-size: 10px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.grayDark};
`;
export const FooterTotalPriceText = styled.Text`
  font-size: 14px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.dark};
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
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  right: 30px;
  bottom: 35px;
  background-color: ${props => props.theme.colors.primary};
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

export const QuantityText = styled.Text`
  font-size: 10px;
  font-family: 'Nunito-Regular';
  color: ${props => props.theme.colors.white};
`;

export const SeparatorType = styled.View`
  padding: 8px 16px;
  margin-bottom: 16px;
  background-color: ${props => props.theme.colors.gray};
`;

export const SeparatorView = styled.View`
  border-width: 0.5px;
  opacity: 0.2;
  border-color: '#E5E5E5';
`;
