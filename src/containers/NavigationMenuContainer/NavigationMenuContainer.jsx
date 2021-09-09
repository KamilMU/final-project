import React, { useState } from 'react'
import NavigationMenu from '../../components/NavigationMenu/NavigationMenu'

function NavigationMenuContainer() {
  const [links] = useState([
    { imgSrc: '/icons/house.png', innerText: 'Home', linkTo: '/' },
    { imgSrc: '/icons/pokeball.png', innerText: 'Caught pokemons', linkTo: '/catchedPokemons' },
  ])

  return <NavigationMenu links={links} />
}

export default NavigationMenuContainer
