import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import './index.css';

function App () {
  const [pokedex, setPokedex] = useState([])
  const [wildPokemon, setWildPokemon] = useState({});

  useEffect(() => {
    encounterWildPokemon()
  }, [])

  const pokeId = () => {
    const min = Math.ceil(1)
    const max = Math.floor(151)
    return Math.floor(Math.random() * (max-min+1)) + min
  }

  const encounterWildPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/' + pokeId())
      .then(res => {
        console.log(res.data)
        setWildPokemon(res.data)
      })
  }

  return(
    <div className="app-wrapper">
      hello, world
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
