import * as React from 'react';
import {Link} from 'react-router';

const isMap = x => x && x.constructor && x.constructor.name === 'Map';

export default function Navigation({tree, path}) {
	return (
		<ul>
			{[...tree.entries()].map(([name, value]) => (
				<li key={name}>
					<Link to={`/show${[path, name].join('/')}`}>{name}</Link>
					{isMap(value) ? (
						<Navigation
							tree={value}
							path={[path, name].join('/')}
							/>
					) : null}
				</li>
			))}
		</ul>
	);
}

Navigation.propTypes = {
	tree: React.PropTypes.instanceOf(Map),
	path: React.PropTypes.string
};

Navigation.defaultProps = {
	tree: new Map(),
	path: ''
};
