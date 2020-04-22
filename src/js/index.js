import Search from './models/Search';
import * as searchView from './views/searchView';
import { elements, renderLoader, clearLoader } from './views/base';

/* Global State of the app
 * - Search Object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

const controlSearch = async () => {
  const query = searchView.getInput();
  console.log(query);

  if (query) {
    state.search = new Search(query);

    searchView.clearInput();
    searchView.clearResult();
    renderLoader(elements.searchRes);

    await state.search.getResults();

    clearLoader();
    searchView.renderResults(state.search.result);
  }
};

elements.searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  controlSearch();
});

// https://forkify-api.herokuapp.com/
