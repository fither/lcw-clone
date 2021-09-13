import { useContext } from 'react';
import FavoritesContext from '../../store/favourites-context';
import PersonItem from './personItem';

function Favourites() {
  const favoritesCtx = useContext(FavoritesContext);
  const favorites = favoritesCtx.favorites;

  let content;

  if(favoritesCtx.totalFavorites === 0) {
    content = <p className="text-center">There is none :/</p>
  } else {
    content = (
      <div>
        <h1>My Favorites</h1>
        {
          favorites.map((favorite) => {
            return <PersonItem key={favorite.id} person={favorite} />
          })
        }
      </div>
    )
  }

  return (content)
}

export default Favourites;