import {useState} from "react";

const URI_COLLECTION = "http://145.24.222.184:8000/films/"

export function NewFilm(props) {
    console.log(props);

    const [film, setFilm] = useState({
        director: "",
        music: "",
        starring: ""
    })

    const saveFilm = (event) => {
        event.preventDefault()

        fetch(URI_COLLECTION, {
            method: 'POST',
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
        <h2>New Film</h2>
        <form>
            <label>Name:</label>
            <input type="text" value={film.director} name="director" onChange={onChangeHandler}/>
            <br/>
            <label>Made by:</label>
            <input type="text" value={film.music} name="music" onChange={onChangeHandler}/>
            <br/>
            <label>Description:</label>
            <input type="text" value={film.starring} name="starring" onChange={onChangeHandler}/>
            <br/>
        <button onClick={saveFilm}>SAVE</button>
        </form>
    </section>
}