import React from 'react'

const NewsItem = ( { articles} ) => {
    const defaultImg = "https://www.colmenaseguros.com/imagenesColmenaARP/contenido/banner-noticias.jpg";
    
    return (
        <div>
            <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            { 
                articles.map(item => {
                    return (
                        <div className="col">
                            <div key={item} className="card shadow-sm">
                                <img className="bd-placeholder-img card-img-top" alt={item.title} src={item.urlToImage ?? defaultImg} width="100%" height="225"/>
                                <div className="card-body">
                                    <h3 className="card-title"><b>{item.title}</b></h3>
                                    <p className="card-text">Autor: {item.author === '' ? 'Anonymous' : item.author}</p>
                                    <p className="card-text">{item.description}</p>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <a className="btn btn-sm btn-outline-secondary stretched-link" target="_blank" href={item.url}>Leer mas</a>
                                        <small className="text-muted"><time>{item.publishedAt}</time></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )})}
            </div>
        </div>
        </div>
    )
}

export default NewsItem