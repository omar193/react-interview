import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../store/index';
import { Movie } from '../../../Interfaces';

import { Button, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import ThumbUpIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIconActive from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDownOffAlt';
import ThumbDownIconActive from '@mui/icons-material/ThumbDown';
import DeleteIcon from '@mui/icons-material/Delete';
import {
    removeMovie,
    likeMovie,
    unlikeMovie,
    dislikeMovie,
    undislikeMovie,
} from '../../../store/reducer/moviesSlice';

const MovieCard = (props: { info: Movie }) => {
    const dispatch = useDispatch();

    const {
        id,
        title,
        dislikes,
        likes,
        category,
        image
    } = props.info;

    const {
        likedMovies,
        dislikedMovies,
    } = useSelector((state: RootState) => state.movies);

    const isLiked = likedMovies.includes(id)
    const isDisliked = dislikedMovies.includes(id)

    return (
        <Card sx={{ backgroundColor: 'rgb(45,45,45)', color: '#fff' }}>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography component="div" variant="h5">
                    {title}
                </Typography>
                <Typography variant="subtitle1" display="block" gutterBottom>
                    {category}
                </Typography>
                <Grid container xs={12}>
                    <Grid item xs={3} md={5}>
                        <Button
                            startIcon={isLiked ? <ThumbUpIconActive fontSize="inherit" /> : <ThumbUpIcon fontSize="inherit" />}
                            color="secondary"
                            size="small"
                            onClick={() => isLiked ?
                                dispatch(unlikeMovie({
                                    id,
                                    changes: { likes: likes - 1 }
                                })) :
                                dispatch(likeMovie({
                                    id,
                                    changes: { likes: likes + 1 }
                                }))
                            }
                        >
                            {likes}
                        </Button>
                        <Button
                            startIcon={isDisliked ? <ThumbDownIconActive fontSize="inherit" /> : <ThumbDownIcon fontSize="inherit" />}
                            color="secondary"
                            size="small"
                            onClick={() => isDisliked ?
                                dispatch(undislikeMovie({
                                    id,
                                    changes: { dislikes: dislikes - 1 }
                                })) :
                                dispatch(dislikeMovie({
                                    id,
                                    changes: { dislikes: dislikes + 1 }
                                }))
                            }
                        >
                            {dislikes}
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
            <CardActions disableSpacing>
                <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => dispatch(removeMovie(id))}
                    startIcon={<DeleteIcon />}
                    style={{ cursor: 'pointer',
                             margin: '1rem auto 0',
                             padding: '5px',
                             color: 'white',
                             fontWeight: 'bold',
                             backgroundColor: 'red' }}
                >Supprimer
                </Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard;