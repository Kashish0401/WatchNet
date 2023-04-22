import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../utils/firebase-config';
import '../Styles/List.css';
import Card from '../components/Card';

const List = () => {

    const [movies, setMovies] = useState([]);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                onAuthStateChanged(firebaseAuth, async (currentUser) => {
                    if (currentUser) {
                        //console.log(currentUser.email);
                        const movie = await axios.get(`http://localhost:5000/database/user/liked/${currentUser.email}`);
                        setMovies(movie.data.movies);
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovies();
    }, []);

    console.log(movies);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <>
            <Header isScrolled={isScrolled} />
            <div className='listContent'>
                <h1>My List</h1>
                <div className='listMovies'>
                    {movies.map((movie, index) => {
                        return <Card movieData={movie} index={index} key={movie.id} isLiked={true} />
                    })}
                </div>
            </div>
        </>
    )
}

export default List
