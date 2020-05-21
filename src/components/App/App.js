import React from 'react';
import BusinessList from '../BusinessList/BusinessList'
import SearchBar from '../SearchBar/SearchBar'
import './App.css';
import yelp from '../../util/Yelp'



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {businesses: []}
    this.searchYelp = this.searchYelp.bind(this);
  }
  searchYelp(term, location, sortBy){
    yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }
  render() { 
    return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={this.state.businesses}/>
    </div>
    );
  }
}
 
export default App;

/* Esta chingadera ya venia y no es un componente
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

