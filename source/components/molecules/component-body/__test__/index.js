import * as React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import ComponentBody from '../';

const component = {
	id: 'atoms/button',
	path: './components/atoms/button',
	entry: 'index.js'
};

test('<ComponentBody /> renders name/id', t => {
	const vdom = shallow(<ComponentBody component={component} />);

	const it = `should render the name/id as h1`;
	const actual = vdom.find('h1').text();
	const expected = 'atoms/button';

	t.is(actual, expected, it);
});
