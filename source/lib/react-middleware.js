import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {match, RouterContext} from 'react-router';

export default (routes, template, props) => ({url:location}, response, next) => {
	const createElement = (C, p) => React.createElement(C, {...p, ...props});

	match({routes, location}, (error, location, renderProps) => {
		if (error) {
			return next(error);
		} else if (location) {
			return response.redirect(location.pathname);
		} else if (renderProps) {
			const body = renderToString((
				<RouterContext {...renderProps} createElement={createElement} />
			));
			response.status(200).send(template(body, props));
		} else {
			response.status(404).end('Not found');
		}
	});
};
