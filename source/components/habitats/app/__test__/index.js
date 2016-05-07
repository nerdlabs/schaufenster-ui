import * as React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import App from '../';

test('<App /> renders <Navigation />', t => {
	const vdom = shallow(
		<App />
	);

	const it = `should render the Navigation molecule`;
	const actual = vdom.find('Navigation').length;
	const expected = 1;

	t.is(actual, expected, it);
});

test('<App /> renders children passed to it', t => {
	const vdom = shallow(
		<App><b>foo</b></App>
	);

	const it = `should render its children`;
	const actual = vdom.find('b').length;
	const expected = 1;

	t.is(actual, expected, it);
});

