import test from 'ava';
import request from 'supertest';
import createServer from '../source/server';

const testStatus = (app, route, status) => {
	return new Promise((resolve, reject) => {
		request(app).get(route).expect(status).end(error => {
			if (error) { return reject(error); }
			resolve(true);
		});
	});
};

test('createServer is a factory function', t => {
	t.is(typeof createServer, 'function', 'it should export a function');
});

test('/health responds with status 200', async t => {
	const app = createServer();
	t.true(await testStatus(app, '/health', 200), 'it should respond healthy');
});

test('unknown routes return status 404', async t => {
	const app = createServer();
	t.true(await testStatus(app, '/blah', 404), 'it should respond with 404');
});
