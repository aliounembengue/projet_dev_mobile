
$(document).ready(function() {
    $('#todoForm').submit(function(event) {
        event.preventDefault();
        
        var taskText = $('#taskInput').val();
        if (taskText.trim() !== '') {
            var listItem = $('<li class="todo-item"></li>');
            listItem.append('<span>' + taskText + '</span>');
            listItem.append('<button class="remove-task-btn">Remove</button>');
            $('#todoList').append(listItem);
            
            $('#taskInput').val('');
        }
    });

    $(document).on('click', '.remove-task-btn', function() {
        $(this).closest('li').remove();
    });
});
