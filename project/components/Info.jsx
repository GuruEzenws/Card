import headshot from '../src/assets/headsot.jpg'

export default function Info(){
    return( 
             <div className='info'>
            <img src={headshot}></img>
            <h4 className='info-item'>Ezenwa Jesse</h4>
            <p className='info-item'>front end developer</p>
            <small className='info-item'>business card</small>
            <button>enter</button>
        </div>
    )
}