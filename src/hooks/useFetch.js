import axios from "axios"
import { useState } from "react"

const useFetch = (url, callback) => {
  const [infoApi, setInfoApi] = useState()
  
  const getApi = () =>{

    axios.get(url)
        .then(resp => {
          setInfoApi(resp.data)
          callback(false)
        })
        .catch(err => console.log(err))
  }

  const getTypeApi = (urlType) => {
    axios.get(urlType)
      .then(resp => {
        const obj = {
          results: resp.data.pokemon.map(e => e.pokemon)
        }
        setInfoApi(obj)
        callback(false) 
      })
      .catch(err => console.log(err))
  }

  return [infoApi, getApi, getTypeApi]
}

export default useFetch