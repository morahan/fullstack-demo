import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'None',
      bugs: exampleData,
      current: []
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  filterHandler(filter) {
    this.setState({ filter });
  }
  // console.log(exampleData);

  priority(level) {
    // console.log(this.bugs.body);
    // return exampleData.filter(i => i.threatLevel === level);
    // return exampleData.filter(i => i.threatLevel === this.state.filter);
  }

  render() {
    return (
      <table>
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.bugs.map((bug) => (
          <BugTile
            bugName={bug.bugName}
            bugDescription={bug.bugDescription}
            reportedBy={bug.reportedBy}
            createdDate={bug.createdDate}
            assignedTo={bug.assignedTo}
            threatLevel={bug.threatLevel}
            key={bug.bugName}
          />
        ))}
      </table>
    );
  }
}

export default App;
