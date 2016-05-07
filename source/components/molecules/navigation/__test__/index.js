import * as React from 'react';
import test from 'ava';
import {shallow} from 'enzyme';
import Navigation from '../';

const onelevel = new Map([
	['atoms', {}],
	['molecules', {}]
]);

const twolevels = new Map([
	['atoms', new Map([
		['button', {}],
		['input', {}]
	])]
]);

test('<Navigation /> renders Link elements for navigation', t => {
	const vdom = shallow(<Navigation tree={onelevel} />);

	{
		const it = `should render two Links`;
		const actual = vdom.find('Link').length;
		const expected = 2;

		t.is(actual, expected, it);
	}
	{
		const it = `should set the correct link target`;
		const actual = vdom.find('Link').first().prop('to');
		const expected = '/show/atoms';

		t.is(actual, expected, it);
	}
});

test('<Navigation /> renders nested navigation', t => {
	const vdom = shallow(<Navigation tree={twolevels} />);

	const it = `should render another navigation inside`;
	const actual = vdom.find('Navigation').get(0);
	const expected = (<Navigation tree={twolevels.get('atoms')} path="/atoms" />);

	t.deepEqual(actual, expected, it);
});

test('<Navigation /> prepends nested links with `path` prop', t => {
	const vdom = shallow(<Navigation tree={twolevels.get('atoms')} path="/atoms" />);

	const it = `should set the correct link target`;
	const actual = vdom.find('Link').first().prop('to');
	const expected = '/show/atoms/button';

	t.is(actual, expected, it);
});
