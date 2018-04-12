import React from "react";

export const stat = stat => {
	if (stat.available) {
		return stat.available;
	}
	return <p>N / A</p>;
};