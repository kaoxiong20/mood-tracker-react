import React from 'react';
// import styled from 'styled-components';
import albums from '../Entry-data.js';

//import components
import EntryCard from './EntryCard.js';

function EntryList() {
  return (
    <>
      {albums.map(album =>
        <EntryCard 
          {...album}
          key={album.id}
        />
      )}
    </>
  );
}

export default EntryList;