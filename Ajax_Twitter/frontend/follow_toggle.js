function FollowToggle($el) {
    this.$userId = $el.attr('id');
    this.$followState = $el.attr('data-initial-follow-state');
    this.$el = $el;
    this.render();
}

FollowToggle.prototype.render = function () {
    if (this.$followState === "unfollowed") {
        this.$el.text("Follow!")
    } else {
        this.$el.text("Unfollow!")
    }
}

FollowToggle.prototype.handleClick = function () {
    this.$el.on("click", (e) => {
        e.preventDefault();

        if (this.$followState === "unfollowed") {
            $.ajax({
                method: 'POST',
                url: '/users/:user_id/follow',
                data: {
                    params: user_id
                },
                dataType: 'JSON'
            })
        } else {
            $.ajax({

            })
        }
        
    });
}

module.exports = FollowToggle