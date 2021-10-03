import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';
import NotFound from './Component/NotFound/NotFound';
import OrderReview from './Component/OrderReview/OrderReview';
import Shop from './Component/Shop/Shop';

function App() {
  return (
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

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

     </Router>
    </div>
  );
}

export default App;
