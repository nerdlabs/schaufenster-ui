import * as React from 'react';
import ComponentHeader from '../../molecules/component-header';

export default function Component({component}) {
	return (
		<div>
			<ComponentHeader component={component} />
		</div>
	);
}

Component.propTypes = {
	...ComponentHeader.propTypes
};

Component.defaultProps = {
	...ComponentHeader.defaultProps
};
