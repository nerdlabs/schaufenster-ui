import express from 'express';
import reactMiddleware from './lib/react-middleware';
import template from './template';
import routes from './routes';

export default function createServer() {
	const app = express();

	app.get('/health', (request, response) => response.status(200).end());

	app.use(reactMiddleware(routes, template));

	return app;
};
