import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Navigation from '../src/components/Navigation/Navigation'
import Footer from './components/Footer/Footer';
import CourseDetail from './components/CourseDetail/CourseDetail';
import EnrollForm from './components/EnrollForm/EnrollForm';
import NotFound from './NotFound/NotFound';
import AboutUs from './components/AboutUs/AboutUs';
import Contact from './components/Contact/Contact';
import AllCourses from './components/AllCourses/AllCourses';

//App routes the whole website. The routes are set up in the navigation;

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/courses'>
            <AllCourses></AllCourses>
          </Route>
          <Route path='/course/:id'>
            <CourseDetail></CourseDetail>
          </Route>
          <Route path='/enroll'>
            <EnrollForm></EnrollForm>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
