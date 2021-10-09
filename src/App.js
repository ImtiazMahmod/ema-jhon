import { createContext } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import OrderReview from './Component/OrderReview/OrderReview';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import Shop from './Component/Shop/Shop';
export const productContext = createContext('user')
const user = ' ring'
const king = 'khan'

function App() {
  return (
    <productContext.Provider value={[user, king]}>
      <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/review">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/place-order">
            <PlaceOrder></PlaceOrder>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

     </Router>
    </div>
    </productContext.Provider>
  );
}

export default App;
