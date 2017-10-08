import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore, autoRehydrate} from 'redux-persist';
import {asyncLocalStorage} from 'redux-persist/storages';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(
    reducers, 
    {}, 
    compose(
      applyMiddleware(ReduxThunk),
      autoRehydrate()
    )
  );

  persistStore(store, {storage: asyncLocalStorage}, () => {
      console.log('rehydration complete');
  });

  export default store;