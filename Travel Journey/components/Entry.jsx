export default function Entry(props){
    console.log(props)
    return(
        <article className="journel-entry">
            <div className="main-image-container">
                <img 
                    className="main-image" 
                    alt={props.img.alt}
                    src={props.img.src}
                />
            </div>
            <div className="info-container">
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>View on google maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip=dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}
    