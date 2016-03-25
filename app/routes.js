import { Route, IndexRedirect } from 'react-router';
import App from 'fw';
import HomePage from 'home';
import HomeRoutes from 'home/routes';


export default (
  <Route path="/" component={App}>
    <IndexRedirect to="/home" />
    {HomeRoutes}
  </Route>
);
