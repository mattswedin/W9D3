const FollowToggle = require ('./follow_toggle.js')



    $( function () {
        $('button').each(function (el) {
            new FollowToggle(el);
        })
    }
    )


