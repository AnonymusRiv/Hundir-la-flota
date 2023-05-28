import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
  } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

function InfoGame () {
    return (
      <>
        <p className="player-tip">
          Deberás posicionar tus barcos 
          en unas coordenadas secretas que deberá adivinar tu oponente. El primero
          en hundir los barcos del contrincante, será el ganador.
        </p>
        <p className="player-tip">
          Cada día habrá un mapa de diferentes dimensiones (10x10 y 15x15) dependiendo de la dificultad.
          La forma de saber si una solución es mejor que otra, será por el número de clicks que se hagan en el mapa
          para lograr la victoria.
        </p>
      </>
    );
}

function InfoStats () {
    return (
        <>
        <p className="player-tip">
          Deberás posicionar tus barcos 
          en unas coordenadas secretas que deberá adivinar tu oponente. El primero
          en hundir los barcos del contrincante, será el ganador.
        </p>
      </>
    );
}


function Help() {
    return (
    <>
    <header>
      <h1>🚢 Hundir la Flota 🚢</h1>
      <p className="subtitle">El clásico juego de estrategia</p>
      <br></br>
      <br></br>
    </header>
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='center' textColor='black'>
                <h2 className="tip-box-title">⚓ Reglas ⚓</h2>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InfoGame />
        </AccordionPanel>
      </AccordionItem>
    
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='center' textColor='black'>
                <h2 className="tip-box-title">📈 Estadísticas 📈</h2>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <InfoStats />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </>
    );
}   

export default Help;