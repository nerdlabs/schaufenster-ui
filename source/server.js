import express from 'express';

export default function createServer() {
	const app = express();

	app.get('/health', (request, response) => response.status(200).end());

	app.listen(3000, () => console.log('App listening on port 3000'));

	return app;
};
