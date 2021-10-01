import axios from "axios"


export const Data=()=>{
   

  const options = {
      method: 'GET',
      url: 'https://travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com/v1/airline-directions',
      params: {limit: '100'},
      headers: {
        'x-access-token': 'undefined',
        'x-rapidapi-host': 'travelpayouts-travelpayouts-flight-data-v1.p.rapidapi.com',
        'x-rapidapi-key': 'bf7a94a5eemsh38deb70defc4448p1230cbjsn70d9f182c2d1'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}