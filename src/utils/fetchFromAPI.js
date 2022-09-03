import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com' 

const options = {
    url: BASE_URL,
    params: {
      maxResults: '10'
    },
    headers: {
      'X-RapidAPI-Key': 'e91c9fcb1dmshab38d52978f2d2bp197e1bjsnba6ec0751407',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)
    
    return data;
}