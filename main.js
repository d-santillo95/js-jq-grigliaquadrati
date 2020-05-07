$('.btn').click(function() {
    $('#griglia').html('');
    var nrs = [];
    while (nrs.length < 25) {
        var nr = Math.floor(Math.random() * 100);
        if (!nrs.includes(nr)) {
            nrs.push(nr);
        }
    }
    for (var i = 0; i < 25; i++) {
        $('#griglia').append('<div class="quadrato"></div>');
    }
    $('.quadrato').each(function(i) {
        if (nrs[i] == 0) {
            $(this).append('<p>' + nrs[i] + '</p>');
            $(this).addClass('color-grenn');
        } else if (nrs[i] % 2 == 0) {
            $(this).append('<p>' + nrs[i] + '</p>');
            $(this).addClass('color-red')
        } else {
            $(this).append('<p>' + nrs[i] + '</p>');
        }
    })
})
