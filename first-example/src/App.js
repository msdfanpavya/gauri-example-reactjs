import React from 'react';
// import logo from './logo.svg';
import { Provider } from 'react-redux';
import './App.css';
// import Table from './components/Table';
import { store } from './store/index';
// import Row from './components/Row';
import { Route, BrowserRouter, Router } from 'react-router-dom';
import Routes from './Routes';
import  history  from './service/History'

// function App() {
//   return (
    // <Provider store = {store}>
//       <BrowserRouter>
//         <div className="App">
//           <Table></Table>
//           <Route path = '/row' exact component = { Row } />
//         </div>
//       </BrowserRouter>
    // </Provider>
//   );
// }


function App() {
  return (
    <Provider store = {store}>
        <Router history = {history}>
            <Routes></Routes>
        </Router>
    </Provider>

  );
}


export default App;
