import * as React from 'react';
import ComponentHeader from '../../molecules/component-header';
import ComponentBody from '../../molecules/component-body';

export default function Component({component}) {
	return (
		<div>
			<ComponentHeader component={component} />
			<ComponentBody component={component} />
		</div>
	);
}

Component.propTypes = {
	...ComponentHeader.propTypes
};

Component.defaultProps = {
	...ComponentHeader.defaultProps
};
