import React, { useContext, useState } from 'react';
import FavoritesContext from '../../store/favourites-context';
import QuestionYesNo from '../shared/questionYesNo';
import PeopleContext from '../../store/people-context';
import '../../style/person/person.css';

function PersonItem(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const modalTitle = 'Kişi Silme';
  const modalDesc = `${props.person.name.first} kişisini silmek istediğinize emin misiniz?`;

  const peopleCtx = useContext(PeopleContext);

  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.person.id);

  function toggleFavoriteHandler(person) {
    if(itemIsFavorite) {
      favoritesCtx.removeFavorite(person);
    } else {
      favoritesCtx.addFavorite(person);
    }
  }

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function deletePerson(person) {
    peopleCtx.removePerson(person);
  };

  function questionResult(result, person) {
    if (result !== '') {
      setModalIsOpen(false);

      if (result === 'yes') {
        deletePerson(person);
      }
    }
  }

  const inFavoritesContent = (
      <button
        className="btn btn-danger mb-2"
        onClick={() => deleteHandler(props.person)}
      >
        Sil
      </button>
    )

  return (
    <React.Fragment>
      {
        modalIsOpen && 
        <QuestionYesNo 
          person={props.person} 
          title={modalTitle} 
          desc={modalDesc} 
          result={questionResult} 
        />
      }
      <div className="person-wrapper" key={props.person.id}>
        <h2 className="person-firstname">{props.person.name.first}</h2>
        <h3 className="person-lastname">{props.person.name.last}</h3>
        {props.inFavorites ? '' : inFavoritesContent}
        <button
          className="btn btn-secondary"  
          onClick={() => toggleFavoriteHandler(props.person)}
        >
          { itemIsFavorite ? 'Favorilerden Çıkart' : 'Favorilere Ekle' }
        </button>
      </div>
    </React.Fragment>
  )
}

export default PersonItem;