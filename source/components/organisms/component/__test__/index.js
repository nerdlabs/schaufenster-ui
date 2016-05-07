import * as React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import Component from '../';

test('<Component /> renders <ComponentHeader />', t => {
	const vdom = shallow(
		<Component />
	);

	const it = `should render the ComponentHeader molecule`;
	const actual = vdom.find('ComponentHeader').length;
	const expected = 1;

	t.is(actual, expected, it);
});

