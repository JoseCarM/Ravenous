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
      this.setState({businesses: businesses});    // <-- Aqui inyectamos por primera vez el resultado de yelp
    });                                           //actualizando el estado a un arreglo de objetos respecto
  }                                               //a la busqueda actual.
  render() { 
    return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar searchYelp={this.searchYelp}/>   {/*Esta propiedad extrae info de SearchBar.js para colocarlo en el query a yelp*/}
      <BusinessList businesses={this.state.businesses}/> {/*Recibe el orden de las respuesta de Yelp segun SearchBar*/}
    </div>
    );
  }
}
 
export default App;


