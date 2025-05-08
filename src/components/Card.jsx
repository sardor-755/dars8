import './card.css'

function Card(props) {

    
  return (
    <div className='card' style={{backgroundColor:props.bg}}>
     <img src="./rasm.png" alt="" />
     <h3> {props.ism}</h3>
     <p> {props.kasbi}</p>
     <p> {props.soha}</p>
    </div>
  )
}

export default Card
