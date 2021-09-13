import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoritePerson) => {},
  removeFavorite: (personId) => {},
  itemIsFavorite: (personId) => {} 
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoritePerson) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favoritePerson);
    });
  }

  function removeFavoriteHandler(personId) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter(favorite => favorite.id !== personId);
    });
  }

  function itemIsFavoriteHandler(personId) {
    return userFavorites.some(person => person.id === personId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler
  };
  
  return <FavoritesContext.Provider value={context}>
    { props.children }
  </FavoritesContext.Provider>
}

export default FavoritesContext;