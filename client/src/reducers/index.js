import { combineReducers } from 'redux';

// IMPORT YOUR REDUCERS LIKE SO ...
   import relatedItemsReducer from './relatedItemsReducer';
  // import productDetailsReducer from './productDetailsReducer'


export default combineReducers({
  relatedItems: relatedItemsReducer,
  // WRITE YOUR REDUCERS HERE
  // for example ...
    // relatedItems: relatedItemsReducer,
    // productDetails: productDetailsReducer
})