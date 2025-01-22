

function Card({title, image, description}){
    return(
        <>
        <article >
            <div className="card">
                <div className="card-infor">
                    <h2>{title}</h2>
                    <img src={image} alt={description} />
                </div>

                <div className="card-btn">
                    <p>{description}</p>
                    <button>Read More</button>
                </div>
            </div>
        </article>
        </>
    )
}

export default Card