'use strict';

module.exports = {
	port: 8083,
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