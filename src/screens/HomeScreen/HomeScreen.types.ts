import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<any>;
}

export interface Product {
  id: string;
  title: string;
  price: string;
  availableQuantity: number;
  image: any;
  quantity?: any;
}
