import React from 'react';

function ExportsResults () {
  
}

export const PlayerTips = ({
  hitsbyPlayer,
  hitsByComputer,
  startAgain,
  winner,
}) => {
  let numberOfHits = hitsbyPlayer.length;
  let numberOfSuccessfulHits = hitsbyPlayer.filter((hit) => hit.type === 'hit').length;
  let succesfulComputerHits = hitsByComputer.filter((hit) => hit.type === 'hit').length;

  let gameOverPanel = (
    <div>
      <div className="tip-box-title">Fin del juego!</div>
      <p className="player-tip">
        {winner === 'player' ? 'Has ganado! 🎉' : 'Has perdido 😭. Más suerte la próxima vez! '}
        
      </p>
      <p className="restart" onClick={startAgain}>
        Play again?
      </p>
    </div>
  );

  let tipsPanel = (
    <div>
      <div className="tip-box-title">📈 Estadísticas 📈</div>
      <div id="firing-info">
        <ul>
          <li>{numberOfSuccessfulHits} lanzamientos existosos</li>
          <li>{numberOfHits} lanzamientos</li>
        </ul>
        <p className="player-tip">El primero en hundir los 6 barcos del oponente ganará la partida</p>
        <p className="restart" onClick={startAgain}>
          Restart
        </p>
      </div>
    </div>
  );

  return (
    <div id="player-tips">
      {numberOfSuccessfulHits === 15 || succesfulComputerHits === 15
        ? gameOverPanel
        : tipsPanel}
    </div>
  );
};

export default PlayerTips;
