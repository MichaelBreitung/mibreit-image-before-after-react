import React from 'react';
import styles from './App.module.css';
import ImageBeforeAfter from './components/ImageBeforeAfter';

function App() {
  return (
    <div className={styles.App}>
      <ImageBeforeAfter
        beforeImage="https://www.mibreit-photo.com/tutorials/images/Photo-Editing-Cityscape-Before.jpg"
        afterImage="https://www.mibreit-photo.com/tutorials/images/Editing-Architecture-Photos.jpg"
      />
    </div>
  );
}

export default App;
