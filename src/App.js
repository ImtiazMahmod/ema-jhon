import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Component/AuthProvider/AuthProvider';
import Header from './Component/Header/Header';
import Inventory from './Component/Inventory/Inventory';
import Login from './Component/Login/Login';
import NotFound from './Component/NotFound/NotFound';
import OrderReview from './Component/OrderReview/OrderReview';
import PlaceOrder from './Component/PlaceOrder/PlaceOrder';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Register from './Component/Register/Register';
import Shipping from './Component/Shipping/Shipping';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    
    <AuthProvider>
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
          <PrivateRoute path="/inventory">
            <Inventory></Inventory>
          </PrivateRoute>
          <PrivateRoute path="/shipping">
            <Shipping></Shipping>
          </PrivateRoute>

          <PrivateRoute path="/place-order">
            <PlaceOrder></PlaceOrder>
          </PrivateRoute>
          
            <Route path="/login" >
              <Login></Login>
            </Route>
            <Route path="/register" >
            <Register></Register>
            </Route>
          

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>

     </Router>
      </AuthProvider>
      
  );
}

export default App;
