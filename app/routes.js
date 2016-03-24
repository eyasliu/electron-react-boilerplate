import { Route, IndexRoute } from 'react-router';
import App from 'fw';
import HomePage from 'home';
import CounterPage from 'home/components/CounterPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/counter" component={CounterPage} />
  </Route>
);
