import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business'

class BusinessList extends React.Component {
    render() { 
        return (
            <div className="BusinessList">
                {
                this.props.businesses.map((business) => {       //Este comando hace el render de cada resultado arrojado por Yelp
                    return <Business business={business} key={business.id}/>
                })
                }
            </div>
        );
    }
}
 
export default BusinessList;
