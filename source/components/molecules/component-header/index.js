import * as React from 'react';

export default function ComponentHeader({component}) {
	return (
		<header>
			<h1>{component.id}</h1>
			<h2>{`${component.path}/${component.entry}`}</h2>
		</header>
	);
}

ComponentHeader.propTypes = {
	component: React.PropTypes.shape({
		id: React.PropTypes.string,
		path: React.PropTypes.string,
		entry: React.PropTypes.string
	})
};

ComponentHeader.defaultProps = {
	component: {
		id: '',
		path: '',
		entry: ''
	}
};
