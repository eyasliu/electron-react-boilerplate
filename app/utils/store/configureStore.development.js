import { createStore, applyMiddleware, compose } from 'redux';
import { persistState } from 'redux-devtools';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import devTools from 'remote-redux-devtools';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from 'fw/reducers';

const logger = createLogger({
  level: 'info',
  collapsed: true,
});

const router = routerMiddleware(hashHistory);

const enhancer = compose(
  applyMiddleware(thunk, router, logger),
  devTools(),
  persistState(
    window.location.href.match(
      /[?&]debug_session=([^&]+)\b/
    )
  )
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('fw/reducers', () =>
      store.replaceReducer(require('fw/reducers'))
    );
  }

  return store;
}
