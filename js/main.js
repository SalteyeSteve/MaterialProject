$(document).ready(function () {

    // $('.carousel').carousel();
    $('.carousel').carousel({});
    // simple ajax get action
    $('.selector').click(function () {
        let id = $(this).data('id');

        $.ajax({
            method: "POST",
            url: 'ajax/genericAjaxHandler.php',
            data: {id: id, action: 'getData'},
            success: function (json) {
                console.log(json);
                let obj = JSON.parse(json);
                // window.location.reload(); for page refresh
                // let title = obj[0]['id'];

            }
        });
    });
});

