import * as React from 'react';
import Navigation from '../../molecules/navigation';

export default function App({components, children}) {
	return (
		<div>
			<Navigation tree={components} />
			{children}
		</div>
	);
}

App.propTypes = {
	components: Navigation.propTypes.tree,
	children: React.PropTypes.oneOfType([
		React.PropTypes.element,
		React.PropTypes.string
	])
};

App.defaultProps = {
	components: Navigation.defaultProps.tree
};
