$(document).ready(function(){

    // creating a request
    $('.btn').click(function(){
        $.ajax({
            // for home route
            url: '',
            //request type get
            type: 'get',
            //content of request an application json
            contentType: 'application/json',
            //the data you are requesting
            data: {
                button_text: $(this).text()
            },
            //on success i.e status 200
            success: function(response){
                // $('.btn').text(response.seconds)
                $('.left-list').append('<li>'+ response.seconds + '</li>')
            }
        })
    })

    $('.left-list').on('click','li',function(){
        $.ajax({
        url: '',
        type: 'post',
        contentType: 'application/json',
        data: JSON.stringify({
            text: $(this).text()
        }),
        success: function(response){
            $('.right-list').append(`<li>${response.data}</li>`)
        }
        })
    })

})
// console.log("hello")