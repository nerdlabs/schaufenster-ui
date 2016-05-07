import * as React from 'react';
import Component from '../../organisms/component';

const isMap = x => x && x.constructor && x.constructor.name === 'Map';
const isComponent = x => x && (x.id && x.path && x.entry);

const getNested = (tree, path) => {
	const parts = path.split('/');
	let temp = tree;
	while (isMap(temp)) {
		if (temp.has(parts[0])) {
			temp = temp.get(parts.shift());
		} else {
			break;
		}
	}
	return temp;
};

export default function ComponentRenderer({tree, params: {splat: id}}) {
	const components = getNested(tree, id);

	return (
		<div>
			{isComponent(components) ?
				(<Component component={components} />) :
				[...components.values()].map((component, index) => {
					return isComponent(component) ?
						(<Component key={index} component={component} />) :
						null
				})
			}
		</div>
	);
}

ComponentRenderer.propTypes = {
	tree: React.PropTypes.instanceOf(Map),
	params: React.PropTypes.shape({
		splat: React.PropTypes.string
	})
};

ComponentRenderer.defaultProps = {
	tree: new Map(),
	params: {splat: ''}
};
