import axios from "axios";

import { FETCH_COMICS } from "./types";

export const fetchComics = () =>
	async dispatch => {
		const res = await axios.get("http://gateway.marvel.com/v1/public/comics?apikey=c88aa66a7664cb7a2d8ec8f416c3922e");
		dispatch({ type: FETCH_COMICS, payload: res.data });
	};
