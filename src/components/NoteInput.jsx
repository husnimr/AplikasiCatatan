import React from 'react';
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

function NoteInput({ state, onTitleChange, onBodyInput, initialBodyEdit }) {
  return (
    <div className='add-new-page__input'>
      <input
        className='add-new-page__input__title'
        placeholder='Judul Catatan'
        value={state.title}
        onChange={onTitleChange}
        spellCheck='false'
      />
      <div
        className='add-new-page__input__body'
        contentEditable='true'
        data-placeholder='Isi Catatan...'
        onInput={onBodyInput}
        spellCheck='false'
        suppressContentEditableWarning={true}
      >
        {initialBodyEdit !== undefined ? parser(initialBodyEdit) : ''}
      </div>
    </div>
  );
}

NoteInput.propTypes = {
  state: PropTypes.object.isRequired,
  onTitleChange: PropTypes.func.isRequired,
  onBodyInput: PropTypes.func.isRequired,
  initialBodyEdit: PropTypes.string
};

export default NoteInput;
