import React from 'react';
import './SearchBar.css';



class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            term: '',
            location: '',           //Estos valores son los que se utilizan para la API de yelp, lo valores por default son los mostrados.
            sortBy: 'best_match'
        };
        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        }
        this.handleSortByChange = this.handleSortByChange.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    getSortByClass(sortByOption){
        if(this.state.sortBy === sortByOption){
            return 'active';
        } else {
            return '';
        }
    }
    handleSortByChange(sortByOption){
        this.setState({sortBy: sortByOption});
    }
    handleTermChange(event){
        this.setState({term: event.target.value});
    }
    handleLocationChange(event){
        this.setState({location: event.target.value});
    }
    handleSearch(event) {
        this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy); //<-- Aqui enviamos el estado del modulo 
        event.preventDefault()                                                          //como parametros para la función que llama a yelp
    }
    renderSortByOptions(){
        return Object.keys(this.sortByOptions).map(sortByOptions => {
            let sortByOptionValue = this.sortByOptions[sortByOptions];                                  //          V  En este llamado se actualiza el valor del estado sortBy                  
            return <li key={sortByOptionValue} className={this.getSortByClass(sortByOptionValue)} onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOptions}</li>
        });
    }
    render() { 
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input onChange={this.handleTermChange} placeholder="Search Businesses" />
                    <input onChange={this.handleLocationChange} placeholder="Where?" />
                </div>
                <div className="SearchBar-submit" onClick={this.handleSearch}>
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}
 
export default SearchBar;
