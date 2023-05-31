import React from 'react';
import { ShipBox } from './ShipBox';

// Devuele un barco con su nombre y su tamaño

export const getShip = (availableShips, shipName, selectShip) => {
  let ship = availableShips.find((ship) => ship.name === shipName);
  let shipLength = new Array(ship.length).fill('ship');

  let all = shipLength.map((index) => (
    <div className="small-square" key={index} />
  ));

  return (
    <ShipBox
      key={shipName}
      selectShip={selectShip}
      shipName={shipName}
      squares={all}
    />
  );
};