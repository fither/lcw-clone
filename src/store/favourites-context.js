import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  isLoading: false,
  fetchFavorites: () => {},
  addFavorite: (favoritePerson) => {},
  removeFavorite: (personId) => {},
  itemIsFavorite: (personId) => {} 
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiURL = 'https://react-learning-304fa-default-rtdb.firebaseio.com/favorites.json';

  function fetchfavoritesHandler() {
    setIsLoading(true);

    fetch(apiURL)
    .then((result) => { return result.json() })
    .then((data) => {
      let favorites = [];
      for(const key in data) {
        const favorite = {
          id: key,
          name: data[key].name
        }

        favorites.push(favorite);
      }

      setIsLoading(false);
      setUserFavorites(favorites);
    })
  }

  function addFavoriteHandler(favoritePerson) {
    fetch(
      apiURL,
      {
        method: 'POST',
        body: JSON.stringify(favoritePerson),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      fetchfavoritesHandler();
    });
  }

  function removeFavoriteHandler(favoritePerson) {
    fetch(
      apiURL.split('.json')[0] + '/' + favoritePerson.id + '.json',
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      fetchfavoritesHandler();
    });
  }

  function itemIsFavoriteHandler(personId) {
    return userFavorites.some(person => person.id === personId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    isLoading: isLoading,
    fetchFavorites: fetchfavoritesHandler,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  
  return <FavoritesContext.Provider value={context}>
    { props.children }
  </FavoritesContext.Provider>
}

export default FavoritesContext;