import * as React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import ComponentRenderer from '../';

const tree = new Map([
	['atoms', new Map([
		['button', {
			id: 'atoms/button',
			path: './components/atoms/button',
			entry: 'index.js'
		}],
		['image', {
			id: 'atoms/image',
			path: './components/atoms/image',
			entry: 'index.js'
		}]
	])]
]);

test('<ComponentRenderer /> renders nothing when no components are passed to it', t => {
	const vdom = shallow(
		<ComponentRenderer />
	);

	const it = `should render nothing`;
	const actual = vdom.children().length;
	const expected = 0;

	t.is(actual, expected, it);
});

test('<ComponentRenderer /> renders nothing when multiple components are passed to it', t => {
	const vdom = shallow(
		<ComponentRenderer tree={tree} />
	);

	const it = `should render nothing`;
	const actual = vdom.children().length;
	const expected = 0;

	t.is(actual, expected, it);
});

test('<ComponentRenderer /> renders a list of components', t => {
	const vdom = shallow(
		<ComponentRenderer tree={tree} id="atoms" />
	);

	const it = `should render button and image`;
	const actual = vdom.find('Component').length;
	const expected = 2;

	t.is(actual, expected, it);
});

test('<ComponentRenderer /> renders a single component', t => {
	const vdom = shallow(
		<ComponentRenderer tree={tree} id="atoms/button" />
	);

	const it = `should render button component`;
	const actual = vdom.find('Component').length;
	const expected = 1;

	t.is(actual, expected, it);
});

