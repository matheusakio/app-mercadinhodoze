import React from 'react';
import {FlatList, Alert, Dimensions} from 'react-native';
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
  FooterTotal,
  FooterTotalText,
  QuantityContainer,
  QuantityText,
  SeparatorView,
  ButtonAddIten,
  ButtonText,
  TypeProduct,
  FooterTotalPriceText,
  SeparatorType,
} from './HomeScreen.styled';
import Button from '../../components/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {addItem, removeItem} from '../../redux/slice/cartSlice';
import {RootState} from '../../redux/store';
import {HomeScreenProps, Product} from './HomeScreen.types';

import NotificationIcon from '../../assets/icons/NotificationIcon';
import SearchIcon from '../../assets/icons/SearchIcon';

const products: Product[] = [
  {
    id: '1111',
    title: 'Vinho Brasileiro Parreiras do Sul Suave Tinto 1L',
    price: 'R$ 19,49',
    image: require('../../assets/images/vinho1.png'),
    availableQuantity: 10,
  },
  {
    id: '2222',
    title: 'Vinho Brasileiro Pergola Seco Tinto 1L',
    price: 'R$ 15,99',
    image: require('../../assets/images/vinho2.png'),
    availableQuantity: 5,
  },
  {
    id: '3333',
    title: 'Vinho Brasileiro Pergola Suave Tinto 1L',
    price: 'R$ 7,99',
    image: require('../../assets/images/vinho3.png'),
    availableQuantity: 8,
  },
  {
    id: '4444',
    title: 'Vinho Brasileiro Pergola Suave Tinto 1L',
    price: 'R$ 15,50',
    image: require('../../assets/images/vinho3.png'),
    availableQuantity: 8,
  },
  {
    id: '555',
    title: 'Vinho Brasileiro Pergola Suave Tinto 1L',
    price: 'R$ 10,99',
    image: require('../../assets/images/vinho3.png'),
    availableQuantity: 8,
  },
  {
    id: '666',
    title: 'Vinho Brasileiro Pergola Suave Tinto 1L',
    price: 'R$ 29,99',
    image: require('../../assets/images/vinho3.png'),
    availableQuantity: 8,
  },
];

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
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

  const removeFromCartHandler = (productId: string) => {
    dispatch(removeItem(productId)); // Dispara a ação de remover do carrinho
  };

  const getQuantity = (productId: string) => {
    const cartItem = cartItems.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  const {width} = Dimensions.get('window');
  const itemWidth = 94;
  const marginHorizontal = 10;
  const containerPadding = 16;
  const numColumns = Math.floor(
    (width - containerPadding * 2) / (itemWidth + marginHorizontal),
  );

  return (
    <Container>
      <Header>
        <NotificationIcon />
        <Title>Mercadinho do Zé</Title>
        <SearchIcon />
      </Header>
      <SeparatorType>
        <TypeProduct>Vinhos</TypeProduct>
      </SeparatorType>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        numColumns={numColumns}
        renderItem={({item}) => (
          <ProductContainer>
            <ProductImage source={item.image} />
            <ProductInfo>
              <ProductPrice>{item.price}</ProductPrice>
              <ProductTitle>{item.title}</ProductTitle>
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
        <FooterTotal>
          <FooterTotalText>Total</FooterTotalText>
          <FooterTotalPriceText>
            R$ {valorTotal?.toFixed(2)} / {totalItems} itens
          </FooterTotalPriceText>
        </FooterTotal>
        <Button
          title="Ver sacola"
          onPress={() => navigation.navigate('Cart')}
        />
      </Footer>
    </Container>
  );
};

export default HomeScreen;
