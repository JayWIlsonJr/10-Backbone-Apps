(function() {
  'use strict'
/* ==========================================================================
   VIEWS:
   ========================================================================== */
   var FormView = Backbone.View.extend({
    className: 'form_container',

    initialize: function(opts) {
      var options = _.defaults({}, opts, {
        $container: $('.container')
      });

      options.$container.append(this.el);

      this.render();
    }
   });


   var InputView = Backbone.View.extend({
    tagName: 'input',
    className: 'form_input',

    initialize: function(opts) {
      var options = _.defaults({}, opts, {
        $container: $('.form_container')
      });
      console.log(this.el)
      options.$container.append('<form><label>Title:' + this.el + '</label></form>');

      this.render();
    }
   }); 

/* ==========================================================================
   MODELS:
   ========================================================================== */


/* ==========================================================================
   COLLECTIONS:
   ========================================================================== */


/* ==========================================================================
   ROUTERS:
   ========================================================================== */


/* ==========================================================================
   GLUE CODE:
   ========================================================================== */


  $(document).ready(function() {
   var formView = new FormView();
   var inputView = new InputView();

    console.log('it works!');
  });
})();