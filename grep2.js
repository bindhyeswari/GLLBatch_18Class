document.addEventListener('DOMContentLoaded', function (){

    var div_data = document.getElementById('data');
    var text = document.getElementById('data').innerHTML;

    document.getElementById('search').addEventListener('keydown', function (event){
        if ( event.keyCode === 13 ) {

            var expressions = event.target.value.match(/^grep\s(.+)/);
            if(expressions && expressions.length === 2) {
                var reg_str = expressions[1];
                var re = new RegExp(reg_str, 'g');
                div_data.innerHTML = text.replace(re, function(str_data){
                    return '<span class="highlight">' + str_data + '</span>';
                });
            }

        }
    });

});