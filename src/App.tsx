import React from 'react';
import './App.css';
import ConfirmationModal from './components/ConfirmationModal';

function App() {
  return (
    <div className="AppContainer">
      <form className="note-form">
        <input placeholder="Title" required />
        <textarea placeholder="Content" rows={10}/>

        <button type="submit">Add note</button>

      </form>

      <div className="notes-grid">
        <div className="note-item">
          <div className="notes-header">
            <button>X</button>
          </div>

          <h2>Note Title</h2>
          <p>Note Content</p>
        </div>
        <ConfirmationModal title="title"></ConfirmationModal>
      </div>
    </div>
  );
}

export default App;
