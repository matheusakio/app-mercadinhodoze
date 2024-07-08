import React from 'react';
import {Alert, FlatList} from 'react-native';
import {
  Container,
  Header,
  Title,
  ProductContainer,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductPrice,
  Footer,
  FooterButton,
  FooterButtonText,
  ButtonClear,
  ButtonClearText,
  TitleContainer,
  QuantityContainer,
  QuantityText,
  ButtonAddIten,
  ButtonText,
  SeparatorView,
  TitleValueItens,
} from './CartScreen.styled';

import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../redux/store'; // Importe o RootState do seu store
import {removeItem, clearCart, addItem} from '../../redux/slice/cartSlice'; // Importe as ações do slice de carrinho
import {Product} from '../HomeScreen/HomeScreen.types';
import {CartScreenProps} from './CartScreen.types';

const CartScreen: React.FC<CartScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items); // Obtém os itens do carrinho do estado Redux
  const valorTotal = useSelector((state: RootState) => state.cart.valorTotal);
  const totalItems = useSelector((state: RootState) => state.cart.totalItems);
  const addToCartHandler = (product: Product) => {
    const existingCartItem = cartItems.find(item => item.id === product.id);
    if (
      existingCartItem &&
      existingCartItem.quantity < product.availableQuantity
    ) {
      dispatch(addItem(product));
    } else if (!existingCartItem) {
      dispatch(addItem(product));
    } else {
      Alert.alert(
        'Erro',
        'Você atingiu o limite máximo de unidades para este produto.',
      );
    }
  };

  // Função para remover um item do carrinho
  const removeFromCartHandler = (productId: string) => {
    dispatch(removeItem(productId)); // Dispara a ação de remover do carrinho
  };

  // Função para limpar a sacola
  const clearCartHandler = () => {
    dispatch(clearCart()); // Dispara a ação para limpar a sacola
  };

  // Função para obter a quantidade de um produto no carrinho
  const getQuantity = (productId: string) => {
    const cartItem = cartItems.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <Container>
      <Header>
        <TitleContainer>
          <Title>Sacola</Title>
        </TitleContainer>
        <ButtonClear onPress={clearCartHandler}>
          <ButtonClearText>Limpar Sacola</ButtonClearText>
        </ButtonClear>
      </Header>
      <TitleValueItens>
        Valor total: R$ {valorTotal?.toFixed(2)} / {totalItems} itens
      </TitleValueItens>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductContainer>
            <ProductImage source={item.image} />
            <ProductInfo>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
            </ProductInfo>
            <QuantityContainer>
              {getQuantity(item.id) > 0 && (
                <>
                  <ButtonAddIten onPress={() => removeFromCartHandler(item.id)}>
                    <ButtonText>-</ButtonText>
                  </ButtonAddIten>
                  <QuantityText>{getQuantity(item.id)} UN</QuantityText>
                </>
              )}
              <ButtonAddIten onPress={() => addToCartHandler(item)}>
                <ButtonText>+</ButtonText>
              </ButtonAddIten>
            </QuantityContainer>
          </ProductContainer>
        )}
      />

      <SeparatorView />
      <Footer>
        <FooterButton onPress={() => navigation.navigate('Home')}>
          <FooterButtonText>Adicionar mais itens</FooterButtonText>
        </FooterButton>
      </Footer>
    </Container>
  );
};

export default CartScreen;
