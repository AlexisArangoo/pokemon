import { Link, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import CardInfo from "../components/PokedexIdPage/cardInfo"
import './styles/PokeIdPage.css'
import MovementsCard from "../components/PokedexIdPage/MovementsCard"

const PokeIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`
  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [id])



  return (
    <div className="pokeidpage">

      <header className="header">
          <div className="header-red">
            <Link to='/pokedex'>
              <img src="/images/logo-pokemon.png" alt="" />
            </Link>
          </div>
          <div className="header-black">
            <img src="/images/pokebola.png" alt="" />
          </div>
      </header> 
      <div className="pokeid-body">
        <CardInfo 
        pokemon={pokemon}
        id={id}
        />

        <MovementsCard 
        pokemon={pokemon}
        />
      </div>
    </div>
  )
}

export default PokeIdPage