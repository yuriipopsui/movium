export const searchTermSelector = (state) => {
  // console.log(state.search.searchTerm);
  return state?.search?.searchTerm;
};

export const searchResultSelector = (state) => {
  // console.log(state?.search?.items);
  return state?.search?.items;
}