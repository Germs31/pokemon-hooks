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

  const encounterWildPokemon = () => {
    axios.get('https://pokeapi.co/api/v2/pokemon/151')
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
