import * as React from 'react';
import * as ReactDOM from 'react-dom';

export default class ComponentBody extends React.Component {
	componentDidMount() {
		const {id} = this.props.component;
		const Component = window.__schaufenster__[id].default;

		ReactDOM.render(<Component />, document.getElementById('component'));
	}

	render() {
		return (<div id="component" />);
	}
}
