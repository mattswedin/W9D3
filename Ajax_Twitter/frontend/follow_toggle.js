// function FollowToggle($el) {
//     this.$userId = $el.data('id');
//     this.$followState = $el.data('data-initial-follow-state');
//     this.$el = $el;
//     this.render();
// }

// FollowToggle.prototype.render = function () {
//     if (this.$followState === "unfollowed") {
//         this.$el.text("Follow!")
//     } else {
//         this.$el.text("Unfollow!")
//     }
// }

// FollowToggle.prototype.handleClick = function () {
//     this.$el.on("click", (e) => {
//         e.preventDefault();

//         if (this.$followState === "unfollowed") {
//             $.ajax({
//                 method: 'POST',
//                 url: '/users/:user_id/follow',
//                 data: {
//                     params: user_id
//                 },
//                 dataType: 'JSON'
//             })
//         } else {
//             $.ajax({

//             })
//         }
        
//     });
// }

class FollowToggle {
    constructor($el) {
        this.$userId = $el.data('id');
        this.$followState = $el.data('data-initial-follow-state');
        this.$el = $el;
        this.render();
    }

    handleClick() {
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

    render() {
        if (this.$followState === "unfollowed") {
            this.$el.text("Follow!")
        } else {
            this.$el.text("Unfollow!")
        }
    }
}

module.exports = FollowToggle