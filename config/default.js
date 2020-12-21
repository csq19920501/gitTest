'use strict';

module.exports = {
	port: parseInt(process.env.PORT, 10) || 8080,
	url: 'mongodb://localhost:27017/elm',  //mongodb://mongo:27017/notes   mongodb://localhost:27017/elm
	session: {
		name: 'SID',
		secret: 'SID',
		cookie: {
			httpOnly: true,
	    secure:   false,
	    maxAge:   365 * 24 * 60 * 60 * 1000,
		}
	}
}