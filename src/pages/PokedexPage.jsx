import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/PokedexPage/PokeCard"
import SelectType from "../components/PokedexPage/SelectType"
import './styles/PokedexPage.css'
import Pagination from "../components/PokedexPage/Pagination"
import Loading from "../components/PokedexPage/Loading"
import { Link } from "react-router-dom"

const PokedexPage = () => {

  const [inputValue, setInputValue] = useState('')
  const [selectValue, setSelectValue] = useState('allPokemons')

  const [cardPerPage, setCardPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(true)
  
  
  const trainer = useSelector(reducer => reducer.trainer)
  
  const cbFilter = poke => poke.name.includes(inputValue)
  
  const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=1281"'
  const [pokemons, getAllPokemons, getPokemonByType] = useFetch(url, setIsLoading)
  
  const totalCard = pokemons?.results.filter(cbFilter).length
  const lastIndex = currentPage * cardPerPage
  const firstIndex = lastIndex - cardPerPage

  useEffect(() => {
    if (selectValue === 'allPokemons') {
      getAllPokemons()
    }else{
      getPokemonByType(selectValue)
    } 
  }, [selectValue])

  
  const inputSearch = useRef()

  const handleSubmit = e =>{
    e.preventDefault()
    setInputValue(inputSearch.current.value.trim().toLowerCase())
    setCurrentPage(1)
    e.target.inputId.value = ''
  }

  return (
    <div className="pokedexpage">
      <header className="header">
          <div className="header-red">
          <Link to='/'>
              <img src="/images/logo-pokemon.png" alt="" />
          </Link>
          </div>
          <div className="header-black">
            <img src="/images/pokebola.png" alt="" />
          </div>
      </header> 
      <section className="pokedexpage-body">
          <p className="pokedexpage-welcome"><span>Welcome {trainer},</span> here you could find yout favorite pokemon</p>

          <div className="container-pokedexpage-form">
            <form className="pokedexpage-form" onSubmit={handleSubmit}>
              <input id="inputId" className="pokedexpage-form-input" ref={inputSearch} type="text" placeholder="Look for a pokemon"/>
              <button className="pokedexpage-form-btn">Search</button>
            </form>

            <SelectType 
            setSelectValue={setSelectValue}
            setCardPerPage={setCardPerPage}
            setInputValue={setInputValue}
            inputSearch={inputSearch}
            setCurrentPage={setCurrentPage}
            />
          </div>
          
          {

            totalCard > 0
            
            ?(
              <>
              <Pagination
          cardPerPage={cardPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCard={totalCard}
          />

          <div className="container-pokecard">

            {isLoading && <Loading />}
            
            {
              pokemons?.results.filter(cbFilter).map(poke => (
                <PokeCard 
                key={poke.url}
                url={poke.url} 
                />
              )).slice(firstIndex, totalCard <= cardPerPage ? totalCard : lastIndex)
            }
          </div>

          <Pagination
          cardPerPage={cardPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalCard={totalCard}
          />
              </>
              )
              
              :totalCard === 0 && inputValue.length > 0
              
              ?(<h2 className="mensaje-error">✖️ There are no pokemon containing {inputValue} <span>😔</span></h2>)
              
              :(
                <h2 className="mensaje-error">✖️ There are no pokemons in this type <span>😔</span></h2>
                
            )
          }

          
      </section>
    </div>
  )
}

export default PokedexPage