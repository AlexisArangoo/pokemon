import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import './styles/SelectType.css'

const SelectType = ({setSelectValue, setCardPerPage, setInputValue, inputSearch, setCurrentPage}) => {

    const url = 'https://pokeapi.co/api/v2/type'
    const [types, getAllTypes] = useFetch(url)

    useEffect(() => {
        getAllTypes()
    }, [])

    const handleChange = e =>{
        setSelectValue(e.target.value)
        setCurrentPage(1)
        setInputValue('')
        inputSearch.current.value = ''
    }

    const handleChangePage = e =>{
        setCardPerPage(e.target.value)
        setCurrentPage(1)
    }
   return (
    <div className="container-select">
        <select className="selecttype" onChange={handleChange}>
            <option value="allPokemons">All Pokemons</option>
            {
                types?.results.map(type => (
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
        </select>
        <div>
            <select className="selectpage" onChange={handleChangePage}>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="12">12</option>
                <option value="15">15</option>
            </select>
            <div>#Card</div>
        </div>
    </div>
  )
}

export default SelectType