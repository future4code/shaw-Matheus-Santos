import './App.css';
import Areadosite from './Component/Area-do-site';
import { render } from '@testing-library/react';
import React from 'react';
import styledComponents from 'styled-components';

const Main = styledComponents.div`
.root {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
}
`


class App extends React.Component {

    render(){
     
  return (
    
    <div className="root">
      <Areadosite/>
    </div>
  );
}
}

export default App;
