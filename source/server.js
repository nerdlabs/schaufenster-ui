import {join} from 'path';
import express from 'express';
import reactMiddleware from './lib/react-middleware';
import template from './template';
import routes from './routes';

import findPatterns from '../../schaufenster/source/find-patterns';
import readPatterns from '../../schaufenster/source/read-patterns';

export default async function createServer() {
	const app = express();

	app.get('/health', (request, response) => response.status(200).end());

	app.use('/static', express.static('distribution'));

	const patterns = await readPatterns(
		await findPatterns(join(__dirname, 'components'))
	);

	app.use(reactMiddleware(routes, template, {patterns}));

	return app;
};
