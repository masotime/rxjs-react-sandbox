(function init(Rx, React, Paragraph) {
	'use strict';
	// some dom elements
	var DOM = {
		input: {
			field: document.getElementById('field')
		},
		label: {
			label: document.getElementById('label'),
			directLabel: document.getElementById('direct-label')
		},
		paragraph: {
			react: document.getElementById('react')
		}
	};

	// we create subjects that are both observables and observers (?)
	var fieldSubject = new Rx.BehaviorSubject('');
	var formFieldObservable = Rx.Observable.fromEvent(DOM.input.field, 'keyup');

	// the span will listen to the fieldSubject
	fieldSubject.subscribe(function (field) { // observable methods of Subject
		DOM.label.label.innerText = field;
	});

	// the subject will update itself based on keypress events on the text input (another observer)
	formFieldObservable.subscribe(function (e) {
		fieldSubject.onNext(e.target.value); // observer methods of Subject
	});

	// directly upate #direct-label from the formFieldObservable
	formFieldObservable.subscribe(function (e) {
		DOM.label.directLabel.innerText = e.target.value;

		// also use React to update the paragraph component
		React.render(<Paragraph value={e.target.value} />, DOM.paragraph.react);
	});
})(Rx, React, Paragraph);