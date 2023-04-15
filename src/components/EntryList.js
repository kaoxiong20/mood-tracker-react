import React from 'react';
import entries from './Entry-Data.js';
import EntryCard from './EntryCard.js';

function EntryList() {
  return (
    <>
      {entries.map(entries =>
        <EntryCard 
          {...entries}
          key={entries.id}
        />
      )}
    </>
  );
}

export default EntryList;