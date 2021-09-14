import React, { useContext, useEffect } from 'react';
import FavoritesContext from '../../store/favourites-context';
import PersonItem from './personItem';

function Favourites() {
  const favoritesCtx = useContext(FavoritesContext);
  const favorites = favoritesCtx.favorites;
  const isLoading = favoritesCtx.isLoading;

  useEffect(() => {
    if(!isLoading) {
      fetchFavorites();
    }
    // eslint-disable-next-line
  }, []);

  function fetchFavorites() {
    favoritesCtx.fetchFavorites();
  }

  let content;

  if(favoritesCtx.totalFavorites === 0) {
    content = <p className="text-center">There is none :/</p>
  } else {
    content = (
      <React.Fragment>
        <h1>My Favorites</h1>
        {
          favorites.map((favorite) => {
            return (
              <PersonItem 
                key={favorite.id} 
                person={favorite} 
                fetch={fetchFavorites}
                inFavorites={true}
              />
            )
          })
        }
      </React.Fragment>
    )
  }

  return (content)
}

export default Favourites;