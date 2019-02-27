import axios from "axios";

import file from "../../api_data/sampleData.json";
const url = `https://www.food2fork.com/api/search`;

export default class Search {
  constructor(query) {
    this.query = query;
  }
  async getAPIData() {
    try {
      //--------> option: 1 Enabling CORS
      //const response = await axios.get(`${url}?key=${API_Key}`, {
      //crossdomain: true
      //});
      const API_Key = "9693050aaf8f2ad050e8dfc904a50cc0";
      //--------> option: 2 Enabling CORS
      //use any one of the below proxy
      //const proxy = 'https://crossorigin.me/'
      const proxy = "https://cors-anywhere.herokuapp.com/";

      const response = await axios.get(
        `${proxy}${url}?key=${API_Key}&q=${this.query}`,
        {
          crossdomain: true
        }
      );
      //console.log(response);
      this.result = response.data.recipes;
      //console.log(this.result);
    } catch (error) {
      console.log(error);
    }
  }

  async getLocalDataAPI() {
    const response = file;
    const recipes = response.recipes;
    console.log(recipes);
  }
}
