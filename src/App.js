import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/components/Home/Home';
import Navigation from '../src/components/Navigation/Navigation'
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';
import CourseDetail from './components/CourseDetail/CourseDetail';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation></Navigation>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/course/:id'>
            <CourseDetail></CourseDetail>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
