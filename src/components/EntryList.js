import React from 'react';
import styled from 'styled-components';
import entries from './Entry-data.js';
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