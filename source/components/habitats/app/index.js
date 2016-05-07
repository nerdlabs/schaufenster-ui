import * as React from 'react';
import Navigation from '../../molecules/navigation';

export default function App({tree, children}) {
	return (
		<div>
			<Navigation tree={tree} />
			{children}
		</div>
	);
}

App.propTypes = {
	tree: Navigation.propTypes.tree,
	children: React.PropTypes.oneOfType([
		React.PropTypes.element,
		React.PropTypes.node
	])
};

App.defaultProps = {
	tree: Navigation.defaultProps.tree
};
