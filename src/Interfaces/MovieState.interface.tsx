import {  EntityState, } from '@reduxjs/toolkit'
import { Movie } from './';

export interface MovieState {
    fetchMoviesLoader: boolean,
    movies: any,
    filter: {
        categories: Array<string>
    },
    pagination: {
        currentPage: number,
        rowsPerPage: number,
    },
    likedMovies: Array<string>,
    dislikedMovies: Array<string>,
}