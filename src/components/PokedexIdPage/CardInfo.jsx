import'./styles/CardInfo.css'

const CardInfo = ({ pokemon, id }) => {
    
    const firstType = pokemon?.types[0].type.name

  return (
    <article className='cardinfo'>
      <header className={`cardinfo-header ${firstType}-gradient`}>
        <img className='cardinfo-header-img'
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt=""
        />
      </header>
      <section className='cardinfo-body'>
        <div className={`cardinfo-body-id ${firstType}-gradient`}>#{id}</div>
        <div className='container-name'>
         <hr className='hr' />
            <h2 className={`cardinfo-body-name ${firstType}-color`}>{pokemon?.name}</h2>
         <hr className='hr'/>
        </div>

        <ul className='cardinfo-body-sizes'>
          <li className='body-size'>
            <h4 className='body-size-h4'>Weight</h4>
            <span className='body-size-span'>{pokemon?.weight}</span>
          </li>
          <li className='body-size'>
            <h4 className='body-size-h4'>Height</h4>
            <span className='body-size-span'>{pokemon?.height}</span>
          </li>
        </ul>

        <ul className='cardinfo-body-types'>
          <li className='body-type'>
            <div className='body-type-title'>Type</div>
            <div className='body-type-container-item item1'>
                {pokemon?.types.map((type) => (
                  <span className={`body-type-span ${type.type.name}-gradient`} key={type.type.url}>{type.type.name}</span>
                ))}
            </div>
          </li>
          <li className='body-type'>
            <div className='body-type-title'>Abilities</div>
            <div className='body-type-container-item'>
                {pokemon?.abilities.map((ability) => (
                  <span className='body-type-span' key={ability.ability.url}>{ability.ability.name}</span>
                ))}
            </div>
          </li>
        </ul>
        <div className="container-name label">
            <label className='cardinfo-body-label'>Stats</label><hr className='hr'/>
            <img src="/images/pokebola-trans.svg" alt="" />
        </div>

        <ul className='cardinfo-body-stats'>
          <li className='body-stat'>
            <span className='body-stat-name'>HP</span>
            <span>
              <span className='body-stat-value'>{pokemon?.stats[0].base_stat}</span>
              <span className='body-stat-maxvalue'>150</span>
            </span>
          </li>
          <div className='progressbar'>
            <div className='progress' style={{width:`${100/(150/pokemon?.stats[0].base_stat)}%`}}>           
            </div>
          </div>

          <li className='body-stat'>
            <span className='body-stat-name'>Attack</span>
            <span>
              <span className='body-stat-value'>{pokemon?.stats[1].base_stat}</span>
              <span className='body-stat-maxvalue'>150</span>
            </span>
          </li>
          <div className='progressbar'>
            <div className='progress' style={{width:`${100/(150/pokemon?.stats[1].base_stat)}%`}}>           
            </div>
          </div>

          <li className='body-stat'>
            <span className='body-stat-name'>Defense</span>
            <span>
              <span className='body-stat-value'>{pokemon?.stats[2].base_stat}</span>
              <span className='body-stat-maxvalue'>150</span>
            </span>
          </li>
          <div className='progressbar'>
            <div className='progress' style={{width:`${100/(150/pokemon?.stats[2].base_stat)}%`}}>           
            </div>
          </div>

          <li className='body-stat'>
            <span className='body-stat-name'>Speed</span>
            <span>
              <span className='body-stat-value'>{pokemon?.stats[5].base_stat}</span>
              <span className='body-stat-maxvalue'>150</span>
            </span>
          </li>
          <div className='progressbar'>
            <div className='progress' style={{width:`${100/(150/pokemon?.stats[5].base_stat)}%`}}>           
            </div>
          </div>
        </ul>
      </section>
    </article>
  );
};

export default CardInfo;
