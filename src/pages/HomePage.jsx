import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainerName.slice"
import { useNavigate } from "react-router-dom"
import './styles/HomePage.css'

const HomePage = () => {

    const inputTrainer = useRef()

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleSubmit = e => {
      e.preventDefault()
      // e.target.inputTrainer.value
      dispatch(setTrainerG(inputTrainer.current.value.trim()))
      navigate('/pokedex')
    }

  return (
    <div className="homepage">
        <img className="homepage-img" src="/images/logo-pokemon.png" alt="" />
        <h2 className="homepage-title">Hi trainer!</h2>
        <p className="homepage-par">to start with the app, give me your name traider 😁</p>
        <form className="homepage-form" onSubmit={handleSubmit}>
            <input className="homepage-form-input" id="inputTrainer" ref={inputTrainer} type="text" placeholder="Your name" />
            <button className="homepage-form-btn">Gotta catch'em all!</button>
        </form>

        <footer className="homepage-footer">
          <div className="footer-red"></div>
          <div className="footer-black">
            <img src="/images/group-pokemon.svg" alt="" />
          </div>
        </footer> 
    </div>
  )
}

export default HomePage