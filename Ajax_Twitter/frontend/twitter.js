const FollowToggle = require ('./follow_toggle.js')

const setButtons = () => {

    $('button').each(function(el) {
        new FollowToggle(el);
    })


}