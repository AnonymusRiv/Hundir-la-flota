import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, SimpleGrid, Button} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';
import { UnorderedList, ListItem } from "@chakra-ui/react";

const handleData = () => {
}

const handleDelete = () => {
}

function Profile() {
    return (
        <>
        <header>
            <h1>🚢 Hundir la Flota 🚢</h1>
            <p className="subtitle">El clásico juego de estrategia</p>
            <br></br>
        </header>
        <h1 className="edit"> PERFIL DE USUARIO 🤙 </h1>
        <br></br>
        <SimpleGrid spacing={0} columns={2}>
            <Card align='center' size='md'>
              <CardBody>
                <Image width={200}
                  src='https://i.pinimg.com/originals/0a/6a/0a/0a6a0a4b5b0b0b0b0b0b0b0b0b0b0b0b.jpg'
                  borderRadius='md'/>
                <br></br>
                <br></br>
                <h3>Nombre: </h3>
                <h3>Correo electrónico: </h3>
              </CardBody>
              <CardFooter>
                <button className='modificar' onClick={handleData}>Modificar perfil</button>
                <button className='borrar' onClick={handleDelete}>Eliminar perfil</button>
              </CardFooter>
            </Card>
            <Card align='center' size={"lg"}>
            <CardBody>
              <CardHeader>
                <h3 align='center' className="statistic"> 📈 Estadísticas 📈</h3>
              </CardHeader>
                <h3>A continuación, se muestran las estadísticas de juego:</h3>
                <UnorderedList>
                  <ListItem className="statistics">Has acertado X veces en Y intentos.</ListItem>
                  <ListItem className="statistics">Has acertado Z veces en K intentos.</ListItem>
                </UnorderedList>
              </CardBody>
              <CardFooter>
                <NavLink to= "/Game/GameSelect"> <button className="backToGame">Jugar</button> </NavLink>
              </CardFooter>
            </Card> 
        </SimpleGrid>
        </>
    );
}

export default Profile;