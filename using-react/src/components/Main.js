import React from 'react';
import charizard from '../images/charizard.png';
import flames from '../images/flames.png';

const Main = ({ndd, level, type, hability, height, weight}) => {
  return (
    <main className='main'>
        <div className='container'>
            <section className='pokemon-title'>
                <img src={flames} alt='flames'/>
                <h2>CHARIZARD</h2>
            </section>
            <section className='pokemon-image'>
                <img src={charizard} alt='charizard.png'/>
            </section>
        </div>
        <aside className='pokemon-info'>
            <section className='pokemon-data'>
                <h3>NDD</h3>
                <h4>{ndd}</h4>
            </section>
            <section className='pokemon-data'>
                <h3>LEVEL</h3>
                <h4>{level}</h4>
            </section>
            <section className='pokemon-data'>
                <h3>TYPE</h3>
                <h4>{type}</h4>
            </section>
            <section className='pokemon-data'>
                <h3>HABILITY</h3>
                <h4>{hability}</h4>
            </section>
            <section className='pokemon-data'>
                <h3>HEIGHT</h3>
                <h4>{height}</h4>
            </section>
            <section className='pokemon-data'>
                <h3>WEIGHT</h3>
                <h4>{weight}</h4>
            </section>
        </aside>
        
    </main>
  )
}

export default Main;
