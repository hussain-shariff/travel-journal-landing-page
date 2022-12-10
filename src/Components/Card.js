
export default function Card(props){
  return (
    <div className="card-container">
        <div className="card-img">
            <img src={`./images/${props.item.img}`} alt="img" />
        </div>
        <div className="card-content">
            <i class="fa-solid fa-location-dot card-icon"></i>
            <span className="country">{props.item.country}</span>
            <span className="google-maps">View on Google Maps</span>
            <h1>{props.item.location}</h1>
            <p className="date">{props.item.date}</p>
            <p className="desc">{props.item.description}</p>
        </div>

    </div>
  )
}
