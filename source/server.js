import express from 'express';

export default function createServer() {
	const app = express();

	app.get('/health', (request, response) => response.status(200).end());

	return app;
};
