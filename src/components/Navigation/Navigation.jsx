import Home from "../screens/Home/Home";
import Orders from "../screens/Orders/Orders";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customers from "../screens/Customers/Customers";
import Products from "../screens/Products/Products";
import Reports from "../screens/Reports/Reports";
const Navigation = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/orders" component={Orders} />
            <Route path="/customers" component={Customers} />
            <Route path="/reports" component={Reports} />
            <Route path="/products" component={Products} />
        </Switch>
    )
}
export default Navigation;