import unindent from 'unindent';

export default (body, props) => unindent(`
	<!DOCTYPE html>
	<html lang="en">
	<head>
		<meta charset="utf-8">
		<title>Schaufenster</title>
	</head>
	<body>
		<div id="app">${body}</div>
		<script id="initial-props" type="application/json">${JSON.stringify(props)}</script>
		<script src="/static/client.js"></script>
	</body>
	</html>
`);
