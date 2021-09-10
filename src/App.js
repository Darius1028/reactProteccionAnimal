import Header from "./components/header";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import { Provider } from "react-redux";
import generateStore from "./redux/adoptionStore";
import Container from './components/container';
import AboutUs from './components/aboutUs';
import Contact from './components/contact';
import Form from './components/form';


import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {


  const store = generateStore();
  return (
    <div className="container">
      <Provider store={store}>
      <Router>
      <Header />
      <NavBar />
        <Container>
          <Switch>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
            <Route path="/">
              <Gallery />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </Router>
      </Provider>

    </div>
  );
}

export default App;
