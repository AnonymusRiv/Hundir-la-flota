import React, {useEffect} from 'react';

export const EasyPlayerTips = ({
  hitsbyPlayer,
  hitsByComputer,
  startAgain,
  winner,
}) => {
  let numberOfHits = hitsbyPlayer.length;
  let numberOfSuccessfulHits = hitsbyPlayer.filter((hit) => hit.type === 'hit').length;
  let succesfulComputerHits = hitsByComputer.filter((hit) => hit.type === 'hit').length;

  const stadistics = async () => {
    try {
      const response = await fetch("/stadistics/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({winner, numberOfHits, numberOfSuccessfulHits}),
      });
      if (response.ok) {
        console.log('Estadísticas pasadas correctamente');
        window.location.href = '/Game/Profile';
      } else {
        console.log('Error al pasar las estadísticas');
      }
    } catch (error) {
      console.log('Error de red', error);
    }
  }

  const newGame = async () => {
    try {
      const response = await fetch("/newGame/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      if (response.ok) {
        console.log('Estadísticas pasadas correctamente');
        window.location.href = '/Game/GameSelect';
      } else {
        console.log('Error al pasar las estadísticas');
      }
    } catch (error) {
      console.log('Error de red', error);
    }
  }

  const [isLogged, setIsLogged] = React.useState(true);

  const checkLogin = async () => {
    try {
      const response = await fetch("/Game/Easy/EasyGame/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      if (response.ok) {
        const data = await response.json();
        setIsLogged(data.valido);
      } else {
        console.log('Error al verificar el inicio de sesión');
      }
    } catch (error) {
      console.log('Error de red', error);
    }
  };

  React.useEffect(() => {
    checkLogin();
  }, []);


  let gameOverPanel = (
    <div>
      <div className="tip-box-title">Fin del juego!</div>
      <p className="player-tip" font-size={'20px'}>
        {winner === 'player' ? 'Has ganado! 🎉' : 'Has perdido 😭 ¡Más suerte la próxima vez! '}
      </p>
      {isLogged ? (<button className='Dificil' onClick={stadistics}>Estadísticas</button>) :
      null }
    </div>
  );

  let tipsPanel = (
    <div>
      <div className="tip-box-title">Estadísticas</div>
      <div id="firing-info">
        <ul>
          <li>{numberOfSuccessfulHits} lanzamientos existosos</li>
          <li>{numberOfHits} lanzamientos</li>
        </ul>
        <p className="restart" onClick={startAgain}>
          Volver a jugar
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

export default EasyPlayerTips;
