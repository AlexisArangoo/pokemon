import './styles/MovementsCard.css'

const MovementsCard = ({pokemon}) => {
  return (
    <article className="movements">

        <div className="container-name">
            <h2 className="movements-name">Movements</h2>
            <hr className='hr'/>
            <img src="/images/pokebola-trans.svg" alt="" />
        </div>

        <section className="movements-items">
            {
                pokemon?.moves.map(m => (
                    <span className="movements-items-value" key={m.move.url}>{m.move.name}</span>
                ))
            }
        </section>
    </article>
  )
}

export default MovementsCard