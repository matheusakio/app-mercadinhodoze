import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Product} from '../../screens/HomeScreen/HomeScreen.types';

interface CartState {
  items: Product[];
  valorTotal: number;
  totalItems: number;
}

const initialState: CartState = {
  items: [],
  valorTotal: 0,
  totalItems: 0,
};

const calculateTotal = (items: Product[]) => {
  let valorTotal = 0;
  let totalItems = 0;

  items.forEach(item => {
    valorTotal +=
      parseFloat(item.price.replace('R$', '').replace(',', '.')) *
      item.quantity;
    totalItems += item.quantity;
  });

  return {valorTotal, totalItems};
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingItem = state.items.find(
        item => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({...action.payload, quantity: 1});
      }

      // Atualizar total e totalItems após adicionar um item
      const {valorTotal, totalItems} = calculateTotal(state.items);
      state.valorTotal = valorTotal;
      state.totalItems = totalItems;
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        const currentItem = state.items[index];
        if (currentItem.quantity > 1) {
          currentItem.quantity--;
        } else {
          state.items.splice(index, 1);
        }

        // Atualizar total e totalItems após remover um item
        const {valorTotal, totalItems} = calculateTotal(state.items);
        state.valorTotal = valorTotal;
        state.totalItems = totalItems;
      }
    },
    clearCart: state => {
      state.items = [];
      state.valorTotal = 0;
      state.totalItems = 0;
    },
  },
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;
