import React, {Component, useState, useEffect} from 'react';
import { Card, CardHeader, CardBody, CardFooter, Heading, Image, Stack, SimpleGrid, Button} from '@chakra-ui/react'
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom';


class Navbar extends Component {
  render() {
    const handleLogout = async () => {
      try {
        const response = await fetch("/SignOut/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(),
        });
        if (response.ok) {
          const data = await response.json();
          window.location.href = "/";
        } else {

        }
      } catch (error) {
        console.log('Error de red', error);
      }
    };
    return (
      <Box className='boxMenu'>
        <Menu>
          {({ isOpen }) => (
            <>
            <Avatar className='avatar' size='sm' src='https://bit.ly/broken-link' />
              <MenuButton as={Button} size='sm' colorScheme='gray' textColor='black' width='auto' isActive={isOpen} >
                {isOpen ? 'Cerrar' : 'Perfil'}
              </MenuButton>
              <MenuList>
                <NavLink to="/Game/Profile"><MenuItem width='85%'>Mi perfil</MenuItem></NavLink>
                <MenuItem width='85%'onClick={handleLogout}>Cerrar sesión</MenuItem>
                <MenuDivider />
                <NavLink to="/Game/Help"><MenuItem width='85%'>Ayuda</MenuItem></NavLink>
                <NavLink to="/Game/Support"><MenuItem width='85%'>Soporte</MenuItem></NavLink>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    );
  }
}

class NavbarDefault extends Component {
  render() {
    return (
      <Box className='boxMenu'>
        <Menu>
          {({ isOpen }) => (
            <>
            <Avatar className='avatar' size='sm' src='https://bit.ly/broken-link' />
              <MenuButton as={Button} size='sm' colorScheme='gray' textColor='black' width='auto' isActive={isOpen} >
                {isOpen ? 'Cerrar' : 'Usuario Invitado'}
              </MenuButton>
              <MenuList>
                <NavLink to="/"><MenuItem width='85%'>Menú principal</MenuItem></NavLink>
                <NavLink to="/Game/Help"><MenuItem width='85%'>Ayuda</MenuItem></NavLink>
                <NavLink to="/Game/Support"><MenuItem width='85%'>Soporte</MenuItem></NavLink>
              </MenuList>
            </>
          )}
        </Menu>
      </Box>
    );
  }
}

export const GameSelect = () => {
  const [isLogged, setIsLogged] = React.useState(true);

  const checkLogin = async () => {
    try {
      const response = await fetch("", {
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
  return (
    <>
    {isLogged ? <Navbar /> : <NavbarDefault />}
    <SimpleGrid spacing={20} columns={2}>
    <Card align='center' maxW='lg'>
      <CardBody>
        <Image 
          src='https://i.ytimg.com/vi/cpefXJXrH3s/maxresdefault.jpg'
          borderRadius='md'/>
        <Stack>
      <CardHeader>
        <Heading size='lg' align='center' style={{marginTop: '2rem'}}> Modo fácil 🌻</Heading>
      </CardHeader>
        <h3 className='election'>Tablero de 10x10 en el que tendrás que adivinar la posición de los 6 barcos del oponente.</h3>
        </Stack>
      </CardBody>
      <CardFooter>
        <NavLink to="/Game/Easy/EasyGame"><button className='Facil'>Comenzar</button></NavLink>
      </CardFooter>
    </Card>
    <Card align='center' maxW='lg'>
    <CardBody>
        <Image
          src='https://galaxiamilitar.es/wp-content/uploads/2022/11/maskarov-buena-dibujo.jpg'
          className='img'
          borderRadius='md'/>
        <Stack>
      <CardHeader>
        <Heading size='lg' align='center' style={{marginTop: '2rem'}}> Modo Difícil 💀</Heading>
      </CardHeader>
        <h3 className='election'>Tablero de 15x15 en que tendrás que adivinar la posición de los 6 barcos del oponente (ahora de menor tamaño).</h3>
        </Stack>
      </CardBody>
      <CardFooter>
        <NavLink to="/Game/Difficult/DifficultGame"><button className='Dificil'>Comenzar</button></NavLink>
      </CardFooter>
    </Card> 
  </SimpleGrid>
</>
  );
};

export default GameSelect;
