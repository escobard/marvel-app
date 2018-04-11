import { FETCH_COMICS } from "../actions/types";

export default function(state = {}, action) {
	let { type, payload } = action;
	switch (type) {
		case FETCH_COMICS:
			return payload;
		default:
			return state;
	}
}
