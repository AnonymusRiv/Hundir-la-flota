import React, {useState, useEffect} from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, SimpleGrid, Button} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { UnorderedList, ListItem } from "@chakra-ui/react";



const handleData = async () => {
  window.location.href = '/ModifyUser';
};


const handleDelete = async (event) => {
  event.preventDefault();

    try {
      const response = await fetch('/delete/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      if (response.ok) {
        const data = await response.json();
        if (data.valido) {
          console.log("Usuario eliminado");
          window.location.href = '/';
        } else {
          console.log("Usuario no eliminado");}
      } else {
        // La solicitud falló
        // Aquí puedes manejar el error de alguna manera
        console.log('Error al registrar');
      }

    } catch (error) {
      // Hubo un error de red u otro error relacionado con la solicitud
      console.log('Error de red', error);
    }
  };

function Profile() {
  const [email, setemail] = React.useState(null);
  const [name, setname] = React.useState(null);
  const [surname, setsurname] = React.useState(null);
  const [wins, setwins] = React.useState(null);
  const [defeats, setdefeats] = React.useState(null);
  const [numberOfHits, setnumberOfHits] = React.useState(null);
  const [numberOfSuccessfulHits, setnumberOfSuccessfulHits] = React.useState(null);

  const showProfile = async () => {
    try {
      const response = await fetch("/Game/Profile/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      if (response.ok) {
        const data = await response.json();
        setemail(data.email)
        setname(data.name)
        setsurname(data.surname)
      } else {
        console.log('Error al recibir las estadísticas');
      }
    } catch (error) {
      console.log('Error de red', error);
    }
  };
  const showStadistics = async () => {
    try {
      const response = await fetch("/Game/ShowStadistics/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(),
      });
      if (response.ok) {
        const data = await response.json();
        setwins(data.winner)
        setdefeats(data.defeats)
        setnumberOfHits(data.numberOfHits)
        setnumberOfSuccessfulHits(data.numberOfSuccessfulHits)
      } else {
        console.log('Error al verificar el inicio de sesión');
      }
    } catch (error) {
      console.log('Error de red', error);
    }
  };
  React.useEffect(() => {
    showProfile();
    showStadistics();
  }, []);

  return (
      <>
      <br />
      <br />
      <br />
      <header>
          <h1>🚢 Hundir la Flota 🚢</h1>
          <p className="subtitle">El clásico juego de estrategia</p>
          <br></br>
      </header>
      <SimpleGrid columns={1} className="bar">
        <h1 className="edit"> PERFIL DE USUARIO 🤙 </h1>
      </SimpleGrid>
      <br></br>
      <SimpleGrid spacing={10} columns={2}>
          <Card align='center' size='md'>
            <CardBody>
              <Image width={200}
                src='https://cdn.pixabay.com/photo/2017/11/10/05/48/user-2935527_640.png'
                borderRadius='md'/>
              <br></br>
              <br></br>
              <h3>Nombre: {name}</h3>
              <h3>Apellido: {surname}</h3>
              <h3>Correo electrónico: {email}</h3>
            </CardBody>
            <CardFooter>
              <NavLink to="/ModifyUser"><button className='Modificar'>Modificar perfil</button></NavLink>
              <button className='Dificil' onClick={handleDelete}>Eliminar perfil</button>
            </CardFooter>
          </Card>
          <Card align='center' size={"lg"}>
          <CardBody>
            <CardHeader>
              <h3 align='center' className="statistic"> 📈 Estadísticas 📈</h3>
            </CardHeader>
              <h3>A continuación, se muestran las estadísticas de juego:</h3>
              <UnorderedList>
                <ListItem className="statistics">Victorias: {wins}</ListItem>
                <ListItem className="statistics">Derrotas derrotas: {defeats}</ListItem>
                <ListItem className="statistics">Número de aciertos: {numberOfSuccessfulHits}</ListItem>
                <ListItem className="statistics">Número de click totales: {numberOfHits}</ListItem>
              </UnorderedList>
            </CardBody>
            <CardFooter>
              <NavLink to= "/Game/GameSelect"> <button className="Jugar">Jugar</button> </NavLink>
            </CardFooter>
          </Card>
      </SimpleGrid>
      </>
  );
};

  export default Profile;