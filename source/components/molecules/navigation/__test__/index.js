import * as React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import Navigation from '../';

const onelevel = [{
	id: 'atoms'
}, {
	id: 'molecules'
}];

const twolevels = [{
	id: 'atoms/button'
}, {
	id: 'atoms/input'
}, {
	id: 'atoms/image'
}];

test('<Navigation /> renders Link elements for navigation', t => {
	const vdom = shallow(<Navigation patterns={onelevel} />);

	{
		const it = `should render two Links`;
		const actual = vdom.find('Link').length;
		const expected = 2;

		t.is(actual, expected, it);
	}
	{
		const it = `should set the correct link target`;
		const actual = vdom.find('Link[to="/show/atoms"]').length;
		const expected = 1;

		t.is(actual, expected, it);
	}
});

test('<Navigation /> renders Link elements for navigation', t => {
	const vdom = shallow(<Navigation patterns={twolevels} />);

	{
		const it = `should set the correct link target for category`;
		const actual = vdom.find('Link[to="/show/atoms"]').length;
		const expected = 1;

		t.is(actual, expected, it);
	}
	{
		const it = `should set correct link targets`;
		const actual = vdom
			.find('Link')
			.map(link => link.prop('to'))
			.filter(id => id !== '/show/atoms');

		const expected = twolevels.map(pattern => `/show/${pattern.id}`);

		t.deepEqual(actual, expected, it);
	}
});
