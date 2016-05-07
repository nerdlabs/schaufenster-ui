import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';

export default (routes, template) => ({url:location}, response, next) => {
	match({routes, location}, (error, location, renderProps) => {
		if (error) {
			return next(error);
		} else if (location) {
			return response.redirect(location.pathname);
		} else if (renderProps) {
			const body = renderToString((
				<RouterContext {...renderProps} />
			));
			response.status(200).send(template.replace('@@@body@@@', body));
		} else {
			response.status(404).end('Not found');
		}
	});
};
