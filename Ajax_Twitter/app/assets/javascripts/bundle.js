/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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

const setButtons = () => {

    $('button').each(function(el) {
        new FollowToggle(el);
    })


}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map