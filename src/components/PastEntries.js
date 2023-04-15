import React from 'react';
import EntryCard from './EntryCard';

const PastEntries = () => (
  <div className="main-content">
    <h2>Past Mood Entries</h2>
    <p>This shows your past entries.</p>

    <EntryCard />
  </div>
);

export default PastEntries;