// this file would usually be within .gitignore to avoid API highjacking, but I will forego this security
// practice to allow easier testing of my project

const config = {
	marvelPublic: 'c88aa66a7664cb7a2d8ec8f416c3922e',
	marvelURL: 'http://gateway.marvel.com/v1/public/',
	marvelEndpoint: 'events/29/characters?limit=99&'
}

export const marvelURI = `${config.marvelURL}${config.marvelEndpoint}apikey=${config.marvelPublic}`