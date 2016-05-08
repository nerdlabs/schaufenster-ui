import * as React from 'react';
import Component from '../../organisms/component';
import {createTree} from 'schaufenster';

export default function ComponentRenderer({patterns, params: {splat: id}}) {
	return (
		<div>
			{patterns
				.filter(pattern => pattern.id.startsWith(id))
				.map(pattern => {
					return (<Component key={pattern.id} component={pattern} />);
				})}
		</div>
	);
}

ComponentRenderer.propTypes = {
	params: React.PropTypes.shape({
		splat: React.PropTypes.string
	}),
	patterns: React.PropTypes.arrayOf(React.PropTypes.shape({
		id: React.PropTypes.string,
		path: React.PropTypes.string,
		entry: React.PropTypes.string
	}))
};

ComponentRenderer.defaultProps = {
	params: {splat: null},
	patterns: []
};
