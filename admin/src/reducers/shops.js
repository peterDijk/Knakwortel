import {
  SHOPS_FETCHED,
  NEW_SHOPS_FETCHED,
  SHOP_DELETED
} from '../actions/shops'

export default (state = null, action = {}) => {
  switch (action.type) {
    case SHOPS_FETCHED:
      return action.payload.shops
    case NEW_SHOPS_FETCHED:
      return [
        ...action.payload,
        ...state
      ]
    case SHOP_DELETED:
      return state.filter(shop => {
        return shop.id !== action.payload.id
      })
    default: 
      return state
  }
}