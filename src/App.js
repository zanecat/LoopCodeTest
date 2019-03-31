import React, { Component } from 'react';
import ManageNode from './containers/ManageNode';
import ShowNodes from './containers/ShowNodes';
import ManageMember from './containers/ManageMember';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div id="main" className="container">
          <ManageNode />
          <ManageMember />
          <div className="section">
          Membership Graph
            <ShowNodes />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
