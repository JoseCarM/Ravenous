import apiKey from './apikey'



let yelp = {
    search(term, location, sortBy){     
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {      //^Se necesita añadir CORS anywhere para recibir el HEADER correcto
                Authorization: `Bearer ${apiKey}`       //este apartado es el requisito de Yelp
            }
        }).then(response => {
            return response.json()      
        }).then(jsonResponse => {
            if (jsonResponse.businesses){   //La respuesta contiene dos keys: numero de resultados y los negocios en una matriz
                return jsonResponse.businesses.map(business => (      
                    {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,            //El resultado de map es una traducción de los objetos
                        city: business.location.city,                   //recibidos por yelp a objetos con los keys que necesitamos
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
