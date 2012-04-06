var __indexOf = Array.prototype.indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };
var __slice = Array.prototype.slice;

Tower.Model.Attributes.extend({
  ClassMethods: {
    id: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (name.length > 1)
        throw new Error("You can only define a single field for the Id type");
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'Array'});
      this.field(name, options)
    },    
    arrays: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'Array'});
      this.fields(names, options)
    },
    bigDecimals: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'BigDecimal'});
      this.fields(names, options)
    },    
    booleans: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'Boolean'});
      this.fields(names, options)
    },
    dates: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'Date'});
      this.fields(names, options)
    },
    dateTimes: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'DateTime'});
      this.fields(names, options)
    },
    floats: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'Float'});
      this.fields(names, options)
    },
    hashes: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
       this.extend(options, {type: 'Hash'});
      this.fields(names, options)
    },
    integers: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'Integer'});
      this.fields(names, options)
    },
    strings: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
      this.extend(options, {type: 'String'});
      this.fields(names, options)
    },
    times: function(args) {
      var names, options, _i;
      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      if (!options || _.isString(options))
        options = {} 
       this.extend(options, {type: 'Time'});
      this.fields(names, options)
    },
    fields: function() {
      var name, names, options, _i, attributes, first_arg;

      names = 2 <= arguments.length ? __slice.call(arguments, 0, _i = arguments.length - 1) : (_i = 0, []), options = arguments[_i++];
      first_arg = _.first(names) || names;

      if (_.isEmpty(first_arg) || _.isString(first_arg)) {
        // handle as array of strings        
        for (name in names) {
          this.field(name, options);
        }
      } else {
        attributes = arguments;
        // handle as hash of field_key, type
        for (name in attributes) {
          this.field(name, attributes[name]);
        }                
      }
      return this._fields || (this._fields = {});
    }
  }
});