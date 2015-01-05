function TodoCtrl($scope, $http) {
    $scope.todos = [];
    $http.get('/todo').success(function(data, status, headers, config) {
        $scope.todos = data;
        if (data == "") {
            $scope.todos = [];
        }
    }).error(function(data, status, headers, config) {
        console.log("Ops: could not get any data");
    });

    $scope.addTodo = function() {
        $http.post('/todo', {
            text : $scope.todoText,
            done : false,
        }).success(function(data, status, headers, config) {
            $scope.todos.push({
                text : $scope.todoText,
                done : false
            });
            $scope.todoText = '';
        }).error(function(data, status, headers, config) {
            console.log("Ops: " + data);
        });
    };

    $scope.remaining = function() {
        var count = 0;
        angular.forEach($scope.todos, function(todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function() {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function(todo) {
            if (!todo.done)
                $scope.todos.push(todo);
        });
    };
}