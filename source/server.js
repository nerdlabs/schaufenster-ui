import {writeFile} from 'fs';
import {join} from 'path';
import express from 'express';
import reactMiddleware from './lib/react-middleware';
import template from './template';
import routes from './routes';

import findPatterns from '../../schaufenster/source/find-patterns';
import readPatterns from '../../schaufenster/source/read-patterns';
import createEntryfile from '../../schaufenster/source/create-entryfile';

export default async function createServer() {
	const app = express();

	app.get('/health', (request, response) => response.status(200).end());

	app.use('/static', express.static('distribution'));

	const patterns = await readPatterns(
		await findPatterns(join(__dirname, 'components'))
	);

	writeFile(join(__dirname, 'entry.js'), createEntryfile(patterns));

	app.use(reactMiddleware(routes, template, {patterns}));

	return app;
};
