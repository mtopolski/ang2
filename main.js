function AppComponent() {
	this.todos = [];
	this.addTodo = function(todo) {
		this.todos.push(todo);
	};
	this.doneTyping = function($event) {
		if($event.which === 13) {
			this.addTodo($event.target.value);
			$event.target.value = null;
		}
	}
}

AppComponent.annotations = [
  new angular.ComponentAnnotation({
    selector: 'my-app'
  }),
  new angular.ViewAnnotation({
  	template:
  	'<h1>' +
  	'Todo:' +
  	'</h1>' +
  	'<p *ng-if="todos.length > 5">GET TO WORRRK</p>' +
  	'<ul>' +
  	'<li class="todos" *ng-for="#todo of todos">' +
  	'{{todo}}' +
  	'</li>' +
  	'</ul>' +
  	'<input #textbox (keyup)="doneTyping($event)">' +
  	'<button (click)="addTodo(textbox.value)">Add todo</button>',
  	directives: [angular.NgFor, angular.NgIf]
  })
];

document.addEventListener('DOMContentLoaded', function() {
	angular.bootstrap(AppComponent);
});