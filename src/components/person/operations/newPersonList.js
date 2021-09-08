import { useState } from 'react';
import QuestionYesNo from '../../shared/questionYesNo';

function NewPersonList(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDesc, setModalDesc] = useState('');

  function deleteHander() {
    setModalTitle('Kişi Silme');
    setModalDesc(`${props.person.name.first} kişisini silmek istediğinize emin misiniz?`);
    setModalIsOpen(true);
  }

  function questionResult(result) {
    if (result !== '') {
      setModalIsOpen(false);

      if (result === 'yes') {
        props.deleteHandler();
      }
    }
    console.log(result);
  }

  return (
    <div>
      {modalIsOpen && <QuestionYesNo title={modalTitle} desc={modalDesc} result={questionResult} />}
      <div className="person-wrapper">
        <img className="person-image" src={props.person.picture.medium} alt="Profile Pic" />
        <h2 className="person-name">{props.person.name.first}</h2>
        <h3 className="person-gender">{props.person.gender}</h3>
        <button
          className="btn btn-danger"
          onClick={deleteHander}
        >
          Sil
        </button>
      </div>
    </div>
  )
}

export default NewPersonList;