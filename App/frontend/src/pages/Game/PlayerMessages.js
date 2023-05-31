import React from 'react';

//Mensajes que se mostrarán en pantalla durante el juego
export const PlayerMessages = ({
  hitsByPlayer,
  hitsByComputer,
  startAgain,
  winner,
}) => {
  let hits = hitsByPlayer.length;
  let successfulHits = hitsByPlayer.filter((hit) => hit.type === 'hit').length;
  let score = Math.round(100 * (successfulHits / hits));
  let succesfulComputerHits = hitsByComputer.filter((hit) => hit.type === 'hit').length;

  let gameOver = (
    <div>
      <div className="tip-box-title">Game Over </div>
      <p className="player-tip">
        {winner === 'player' ? 'You win! 🎉' : 'You lose 😭. Better luck next time! '}
      </p>
      <p className="restart" onClick={startAgain}>
        Play again?
      </p>
    </div>
  );

  let tips = (
    <div>
      <div className="tip-box-title">📈 Estadísticas 📈</div>
      <div id="firing-info">
        <ul>
          <li>{successfulHits} successful hits</li>
          <li>{score > 0 ? `${score}%` : `0%`} accuracy </li>
        </ul>
        <p className="player-tip">The first to sink all 5 opponent ships wins.</p>
        <p className="restart" onClick={startAgain}>
          Restart
        </p>
      </div>
    </div>
  );

  return (
    <div id="player-tips">
      {successfulHits === 17 || succesfulComputerHits === 17
        ? gameOver
        : tips}
    </div>
  );
};
