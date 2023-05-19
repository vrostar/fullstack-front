import {Link, Outlet, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const URI_COLLECTION = "http://145.24.222.184:8000/films/"

export function FilmDetail() {
    const params = useParams()

    const  [film, setFilm] = useState(null)

    const loadJson = () => {
        fetch(URI_COLLECTION + "/" + params.id, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setFilm(result))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        loadJson()
    }, [])

    return <section>
        <h1>{film && film.director}</h1>
        <h2>{film && film.music}</h2>
        <p>{film && film.starring}</p>
    </section>
}