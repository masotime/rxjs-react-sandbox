/* global React */
'use strict';

var Paragraph = (function (React) {
	return React.createClass({
		getDefaultProps: function () {
			return {
				value: ''
			};
		},
		render: function() {
			var props = this.props;

			return <p>This is a React component, and the label [{props.value}] is set via props</p>;
		}
	});
}(React));