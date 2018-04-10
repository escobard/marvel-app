import axios from "axios";

import { marvelURI } from "../constants/config"

import { FETCH_COMICS } from "./types";

export const fetchComics = () =>
	async dispatch => {
		const res = await axios.get(marvelURI);
		dispatch({ type: FETCH_COMICS, payload: res.data.data.results });
	};
