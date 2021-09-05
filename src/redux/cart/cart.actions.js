import { CartTypes } from "./cart.types";
export const toggleFlag= () => ({
  type: CartTypes.TOGGLE_FLAG,
 
});

export const addItem= (item) => ({
  type: CartTypes.ADD_ITEM,
  payLoad:item
 
});

export const clearItem= (item) => ({
  type: CartTypes.CLEAR_ITEM,
  payLoad:item
 
});
export const removeItem= (item) => ({
  type: CartTypes.REMOVE_ITEM,
  payLoad:item
 
});