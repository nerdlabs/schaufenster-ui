import * as React from 'react';
import Navigation from '../../molecules/navigation';
import {createTree} from 'schaufenster';

export default function App({patterns, children}) {
	const tree = createTree(patterns);
	return (
		<div>
			<Navigation tree={tree} />
			{children}
		</div>
	);
}

App.propTypes = {
	patterns: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string,
		path: React.PropTypes.string,
		entry: React.PropTypes.string
	})),
	children: React.PropTypes.oneOfType([
		React.PropTypes.element,
		React.PropTypes.node
	])
};

App.defaultProps = {
	patterns: []
};
