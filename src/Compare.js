import React from 'react';
import './Compare.css';

export default function Compare({ toCompare , repo , handleCompareClick }) {
  let cards;
  if ( toCompare.length === 1 ) {
    const data = repo.findByName(toCompare[0]);
    cards = (<Card data={data} />);
  } else if ( toCompare.length === 2 ) {
    const data1 = repo.findByName(toCompare[0]);
    const data2 = repo.compareDistrictAverages(toCompare[0],toCompare[1]);
    const data3 = repo.findByName(toCompare[1]);

    cards = (
      <div>
        <Card data={data1} />
        <Card data={data2} />
        <Card data={data3} />
      </div>
    )
  }

  return (
    <aside>
      {
        cards
      }
    </aside>
  )
}