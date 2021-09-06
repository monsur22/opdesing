import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './components/Home';
// import Header from './components/header/Header';
function App() {
  return (
    <Router>
      {/* <Header/> */}
    <Route path="/" component={Home} exact></Route>


    </Router>
  );
}

export default App;
