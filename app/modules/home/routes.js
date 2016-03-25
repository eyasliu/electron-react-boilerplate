import { Route, IndexRedirect } from 'react-router';
import Home from './components/Home/Home';
import App from './';

export default (
  <Route path="/home" component={App}>
    <IndexRedirect to="index" />
    <Route path="index" component={Home} />
  </Route>
);