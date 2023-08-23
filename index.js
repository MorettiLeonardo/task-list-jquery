$(document).ready(function() {
    
    $(document).on("click", ".task", function() {
        $(".task").css("text-decoration", "line-through");
    });

    $('form').on('submit', function(ev) {
        ev.preventDefault()

        const taskName = $('#input-task').val()
        const newTask = $(`<li><button class="task">${taskName}</button></li>`)

        $(newTask).appendTo('ul')
        $('#input-task').val(' ')
    })
    
})