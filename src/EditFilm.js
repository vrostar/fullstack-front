import {useState} from "react";
import {useParams} from "react-router-dom";

const URI_COLLECTION = "http://145.24.222.184:8000/films/"

export function EditFilm(props) {
    const params = useParams()

    const [film, setFilm] = useState({
        director: "",
        music: "",
        starring: ""
    })

    const saveFilm = (event) => {
        event.preventDefault()

        fetch(URI_COLLECTION + "/" + params.id,{
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(film)
        })
            .then((response) => props.filmsRefreshHandler())
    }

    const onChangeHandler = (event) => {

        setFilm({
            ...film,
            [event.target.name]: event.target.value
        })
    }

    return <section>
        <h2>Edit Film</h2>
        <form>
            <input type="text" value={film.director} name="director" onChange={onChangeHandler}/>
            <br/>
            <input type="text" value={film.music} name="music" onChange={onChangeHandler}/>
            <br/>
            <input type="text" value={film.starring} name="starring" onChange={onChangeHandler}/>
            <br/>
            <button onClick={saveFilm}>SAVE</button>
        </form>
    </section>
}