import {useState} from "react";
import {Link} from "react-router-dom";

export function Film(props) {
    console.log(props);

    const deleteFilm = () => {
        fetch(props.film._links.self.href, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => props.filmsRefreshHandler())
    }



    return <section>
        <div>
        <h2>{props.film.director}</h2>
        <Link className="MoreLink" to={"films/" + props.film.id}>More</Link>
        <Link className="EditLink" to={"update/" + props.film.id}>Edit</Link>
        <br/>
        <button onClick={deleteFilm}>DELETE</button>
        <br/>
        </div>
    </section>
}