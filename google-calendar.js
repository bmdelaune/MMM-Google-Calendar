/* global Module */

/* Magic Mirror
 * Module: Google Calendar
 *
 * By Bradley Delaune
 * MIT Licensed.
 */

Module.register("google-calendar", {
  defaults: {
    text: "Hello World!"
  },
  getDom: function() {
    var wrapper = document.createElement("div");
    wrapper.innerHTML = this.config.text;
    return wrapper;
  }
});
