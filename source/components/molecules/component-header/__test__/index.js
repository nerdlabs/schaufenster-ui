import * as React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import ComponentHeader from '../';

const component = {
	id: 'atoms/button',
	path: './components/atoms/button',
	entry: 'index.js'
};

test('<ComponentHeader /> renders name/id', t => {
	const vdom = shallow(<ComponentHeader component={component} />);

	const it = `should render the name/id as h1`;
	const actual = vdom.find('h1').text();
	const expected = 'atoms/button';

	t.is(actual, expected, it);
});

test('<ComponentHeader /> renders path and entry file', t => {
	const vdom = shallow(<ComponentHeader component={component} />);

	const it = `should render the path + entry file as h2`;
	const actual = vdom.find('h2').text();
	const expected = './components/atoms/button/index.js';

	t.is(actual, expected, it);
});

