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
        debugger
        this.userId = $el.dataset.id
        debugger
        this.followState = $el.dataset.initialFollowState
        debugger
        this.el = $el;
        debugger
        this.render();
    }

    handleClick() {
        this.$el.on("click", (e) => {
            e.preventDefault();

            if (this.followState === false) {
                debugger
                return $.ajax({ 
            
                    method: 'POST',
                    url: '/users/:user_id/follow',
                    data: {
                        params: user_id
                    },
                    dataType: 'JSON',
                    success: function () {
                        this.followState = true
                        this.render()
                    }
                })
            } else {
                debugger
                return $.ajax({
                    method: 'DELETE',
                    url: '/users/:user_id/follow',
                    data: {
                        params: user_id
                    },
                    dataType: 'JSON',
                    success: function(){
                        this.followState = false
                        this.render()
                    } 
                })
            }
        
        });
        
    }

    render() {
        debugger
        if (this.followState === false) {
            this.el.innerText = "Follow!"
        } else {
            this.el.innerText = "Unfollow!"
        }
    }
}

module.exports = FollowToggle;