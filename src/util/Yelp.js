

const apiKey = 'DqxRUdcMfTkFi1LGt75AvyCK3S9zXLhmQeHVTxLHYv2fl6hf2s1QtdyCo5dQJ1uFeUkf991-YJn03RpOc1bHuf7nwP6Xw7la03Qm_OTvt3veBbkLVyiGWip2vb_FXnYx';

let yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business => (
                    {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zipCode,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                ));
            }

        });
    }
};
export default yelp;
