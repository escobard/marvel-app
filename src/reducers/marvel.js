import { FETCH_COMICS } from "../actions/types";

export default function(state = {}, action) {
	let { type, payload } = action;
	switch (type) {
		case FETCH_COMICS:
			console.log(payload)
			return payload || false;
		default:
			return state;
	}
}
