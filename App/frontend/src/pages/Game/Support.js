import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function Question1 () {
    return (
      <>
        <p className="player-tip">
          Para colocar los barcos en el tablero, debes seleccionar el barco que desees colocar y posteriormente arrastraslo hasta la posición deseada. 
          Además, es posible cambiar la orientación del barco (horizontal o vertical) haciendo click en el botón del ratón.
        </p>
      </>
    );
}

function Question2 () {
    return (
        <>
        <p className="player-tip">
          No, no es posible colocar barcos en posiciones superpuestas. Si intentas colocar un barco en una posición que ya está ocupada, 
          el barco no se colocará y se mostrará un mensaje de error.
        </p>
      </>
    );
}

function Question3 () {
    return (
        <>
        <p className="player-tip">
          Aunque es una funcionalidad que será añadida en el futuro, actualmente no es posible jugar contra otros jugadores, solo contra el propio ordenador.
        </p>
      </>
    );
}

function Question4 () {
    return (
        <>
        <p className="player-tip">
          No, no existe un límite de tiempo para colocar los barcos en el tablero. Puedes tomarte todo el tiempo que necesites para colocar los barcos.
        </p>
      </>
    );
}

function Question5 () {
    return (
        <>
        <p className="player-tip">
          Si encuentra algún error o tiene alguna sugerencia, puede contactar con nosotros a través de la siguiente dirección de correo electrónico: 
          support-HundirLaFlota@gmail,com
        </p>
      </>
    );
}


function Support() {
    return (
    <>
    <header>
      <h1>🚢 Hundir la Flota 🚢</h1>
      <p className="subtitle">El clásico juego de estrategia</p>
      <br></br>
    </header>
    <h1 className="edit"> PREGUNTAS FRECUENTES❓ </h1>
    <br></br>
    <Accordion allowToggle>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='center' textColor='black'>
                <h2 className="tip-box-title">¿Cómo coloco mis barcos en el tablero?</h2>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Question1 />
        </AccordionPanel>
      </AccordionItem>
    
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='center' textColor='black'>
                <h2 className="tip-box-title">¿Puedo colocar barcos en posiciones superpuestas?</h2>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Question2 />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='center' textColor='black'>
                <h2 className="tip-box-title">¿Puedo jugar contra el ordenador y contra otros jugadores?</h2>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Question3 />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='center' textColor='black'>
                <h2 className="tip-box-title">¿Hay algún límite de tiempo por turno?</h2>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Question4 />
        </AccordionPanel>
      </AccordionItem>

      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='center' textColor='black'>
                <h2 className="tip-box-title">¿Qué debo hacer si encuentro algún error o problema técnico en el juego?</h2>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Question5 />
        </AccordionPanel>
      </AccordionItem>

    </Accordion>
    </>
    );
}   

export default Support;