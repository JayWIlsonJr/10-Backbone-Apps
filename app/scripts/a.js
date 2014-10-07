(function() {
  'use strict'
/* ==========================================================================
   VIEWS:
   ========================================================================== */
   var FormView = Backbone.View.extend({
    className: 'form_container',

    initialize: function(opts) {
      var options = _.defaults({}, opts, {
        $container: $('body')
      });

      options.$container.append(this.el);

      this.render();
    }, 

    render: function() {
      this.renderChild();
    }, 

    renderChild: function() {
      var formElementsView = new FormElementsView({
        $container: this.$el,
        model: this.model
      });
    }
   });


   var FormElementsView = Backbone.View.extend({
    tagName: 'form',
    className: 'form',

    template: _.template($('#template_form_elements').text()),

    events: {
      'submit' : 'modelUpdate'
    },

    modelUpdate: function(e) {
      e.preventDefault();
      var data = this.$el.serializeObject();
      this.model.save(data);
      this.$('input, textarea').val("");
    },

    initialize: function(opts) {
      var options = _.defaults({}, opts, {
        $container: opts.$container
      });

      options.$container.append(this.el);

      this.render();
    }, 

    render: function() {
      this.$el.html(this.template())
    }
   }); 

/* ==========================================================================
   MODELS:
   ========================================================================== */
   var BlogPostModel = Backbone.Model.extend({
    idAttribute: '_id',

    urlRoot: 'http://tiny-pizza-server.herokuapp.com/collections/posts'
   });

/* ==========================================================================
   COLLECTIONS:
   ========================================================================== */


/* ==========================================================================
   ROUTERS:
   ========================================================================== */


/* ==========================================================================
   GLUE CODE:
   ========================================================================== */
    $.fn.serializeObject = function() {
      return this.serializeArray().reduce(function(acum, i) {
        acum[i.name] = i.value;
        return acum;
      }, {});
    };

  $(document).ready(function() {


    var blogPostModel = new BlogPostModel();
    var formView = new FormView({model: blogPostModel});
  });
})();