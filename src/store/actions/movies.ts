import { createAsyncThunk } from "@reduxjs/toolkit";
import {getMovies} from "../../utils/API";

export const fetchMovies = createAsyncThunk('movie/fetchMovies', async () => {
      return await getMovies();
  }
)