import { useContext} from 'react';
import FavoritesContext from '../../store/favourites-context';

function PersonItem(props) {
  const favoritesCtx = useContext(FavoritesContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.person.id);

  function toggleFavoriteHandler(person) {
    if(itemIsFavorite) {
      favoritesCtx.removeFavorite(person.id);
    } else {
      favoritesCtx.addFavorite(person);
    }
  }

  return (
    <div className="person-wrapper" key={props.person.id}>
      <h2 className="person-firstname">{props.person.name.first}</h2>
      <h3 className="person-lastname">{props.person.name.last}</h3>
      <button
        className="btn btn-danger mb-2"
        onClick={() => props.deleteHandler(props.person)}
      >
        Sil
      </button>
      <button
        className="btn btn-secondary"  
        onClick={() => toggleFavoriteHandler(props.person)}
      >
        { itemIsFavorite ? 'Favorilerden Çıkart' : 'Favorilere Ekle' }
      </button>
    </div>
  )
}

export default PersonItem;