import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const forkifyURL = 'https://forkify-api.herokuapp.com';
    try {
      const res = await axios.get(`${forkifyURL}/api/search?q=${this.query}`);
      this.result = res.data.recipes;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error.message);
    }
  }
}
