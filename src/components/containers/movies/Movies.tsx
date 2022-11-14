import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/index';
import {
    setCategories,
    selectMovies,
    selectMovieFilter
} from '../../../store/reducer/moviesSlice'
import {fetchMovies} from '../../../store/actions/movies'

import { Grid, SelectChangeEvent } from "@mui/material"
import MovieCard from '../moviecard/MovieCard';
import { useAppSelector } from '../../../store/hooks';
import Pagination from '../../footer/pagination/Pagination';
import Loader from '../../Loader/Loader';
import MultiSelect from '../multiselect/Multiselect';

const Movies = () => {
    const dispatch = useDispatch();
    const { 
        fetchMoviesLoader,
        pagination,
    } = useSelector((state: RootState) => state.movies);

    const movies = useAppSelector(selectMovies);
    const filter = useAppSelector(selectMovieFilter);

    useEffect(() => {
        dispatch(fetchMovies())
    }, [dispatch])

    const handleChangeFilterCategories = (event: SelectChangeEvent<typeof filter.categories>) => {
        const { target: { value }} = event;
        dispatch(setCategories(typeof value === 'string' ? value.split(',') : value))
    }

    const filteredMovies = useMemo(() => {
        return movies.filter((movie) => !filter.categories.length || filter.categories.includes(movie.category))
    }, [movies, filter])

    const paginateMovies = pagination.rowsPerPage === -1 ? filteredMovies : filteredMovies.slice(pagination.currentPage * pagination.rowsPerPage, (pagination.currentPage + 1) * pagination.rowsPerPage)

    // Groups list of categories 
    const categories = movies.map((movie) => movie.category).filter((elem, index, self) => index === self.indexOf(elem));

    return(
        fetchMoviesLoader ? <div className="pos-center"><Loader /></div> :
            <Grid container>
                <Grid>
                    <MultiSelect 
                        value={filter.categories}
                        options={categories}
                        onSelect={handleChangeFilterCategories}
                    />
                </Grid>
                
                <Grid container spacing={{ xs: 2 }} columns={{ xs: 6, sm: 6, md: 12 }}>
                    { paginateMovies.map((movie, index) => (
                        <Grid key={index} item xs={12} sm={3} md={4}>
                            <MovieCard info={ movie } />
                        </Grid>
                    )) }
                </Grid>

                <Grid item xs={12}>
                    <Pagination 
                        pagination={pagination}
                        nbItems={filteredMovies.length}
                    />
                </Grid>
            </Grid>
    )
}

export default Movies;