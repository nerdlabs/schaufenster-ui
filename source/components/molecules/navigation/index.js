import * as React from 'react';
import {Link} from 'react-router';

const addCategories = patterns => {
	return patterns.reduce((ids, {id}) => {
		const parts = id.split('/').slice(0, -1);

		const categories = parts.reduce((categories, part, i) => {
			const category = parts.slice(0, i + 1).join('/');
			const result = ids.includes(category) ? [] : [category];

			return [...categories, ...result];
		}, []);

		return [...ids, ...categories, id];
	}, []);
};

export default function Navigation({patterns, path}) {
	return (
		<ul>
			{addCategories(patterns).map(id => {
				return (
					<li key={id}>
						<Link to={`/show/${id}`}>{id}</Link>
					</li>
				);
			})}
		</ul>
	);
}

Navigation.propTypes = {
	patterns: React.PropTypes.arrayOf(React.PropTypes.any)
};

Navigation.defaultProps = {
	patterns: []
};
