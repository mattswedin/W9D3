/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__ (/*! ./follow_toggle.js */ "./frontend/follow_toggle.js")

    console.log("I'm here in twitter.js! :)")

    $( function setButton() {
        debugger
        // $('button.follow-toggle')[0](function (el) {
        //     debugger
            new FollowToggle($('button.follow-toggle')[0]);
        // })
    }
    )



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map