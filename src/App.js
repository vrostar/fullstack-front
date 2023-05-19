import {useEffect, useState} from "react";
import {Film} from "./Film";
import {NewFilm} from "./NewFilm";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Layout} from "./Layout";
import {Error} from "./Error";
import {FilmDetail} from "./FilmDetail";
import {EditFilm} from "./EditFilm";

const URI_COLLECTION = "http://145.24.222.184:8000/films/"

export function App() {
    const [films, setFilms] = useState([])

const loadJson = () => {
        fetch(URI_COLLECTION, {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => setFilms(result.items))
            .catch((error) => console.log(error))
}

    const showFilms = films.map((value, key) =>
        <Film key={value.id} film={value} filmsRefreshHandler={loadJson}/>)

    useEffect(() => {
        loadJson()
    }, [])

    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={showFilms} />} />
                <Route path="create" element={<NewFilm filmsRefreshHandler={loadJson}/>} />
                <Route path="update/:id" element={<EditFilm filmsRefreshHandler={loadJson}/>} />
                <Route path="*" element={<Error />} />
                <Route path="films/:id" element={<FilmDetail />} />
            </Route>
        </Routes>
    </BrowserRouter>;
}