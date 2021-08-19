import TopnSideBar from "./components/Dashboard/TopnSideBar";
import Navigation from "./components/Navigation/Navigation"
// import Footer from "./components/Footer/Footer"
import { dashboardStyles } from './components/Dashboard/dashboardStyles';
import { BrowserRouter as Router } from "react-router-dom";
const App =()=>{
  const classes = dashboardStyles();
  return (
    <Router>
      <div className={classes.root}>
        <TopnSideBar />
        <Navigation/>
      </div>
    </Router>

  );
}

export default App;
