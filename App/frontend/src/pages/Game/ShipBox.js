import React from 'react';

export const ShipBox = ({
  shipName,
  selectShip,
  availableShips,
  isCurrentlyPlacing,
}) => {
  let ship = availableShips.find((ship) => ship.name === shipName);
  let shipLength = new Array(ship.length).fill('ship');
  let all = shipLength.map((index) => (
    <div className="small-square" key={index} />
  ));

  return (
    <div
      id={`${shipName}-replica`}
      onClick={() => selectShip(shipName)}
      key={`${shipName}`}
      className={isCurrentlyPlacing ? 'replica placing' : 'replica'}
    >
      <div className="replica-title">{shipName}</div>
      <div className="replica-squares">{all}</div>
    </div>
  );
};