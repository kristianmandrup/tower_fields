# Tower fields

This plugin attempts to extend the `Tower.Model.Attributes` object with some Class methods.
These extra field macros should allow more concise/DRY definition of multiple Model fields in one go, especially when the fields share the same type.

Tower fields is the result of a discussion at: [Tower issue 68](https://github.com/viatropos/tower/issues/68#issuecomment-4992706)

* id
* arrays
* bigDecimals
* booleans
* dates
* dateTimes
* floats
* hashes
* integers
* strings
* times

The following code example illustrates the use of these type specific macros.

``` coffeescript
class App.User extends Tower.Model
  @id 'id'
  @integers 'likeCount'
  @strings 'firstName', 'middleName', 'lastName', 'email'
  @booleans 'active', 'admin', default: false
  @dates 'activatedAt', 'createdAt', 'startDate', 'endDate'
 ```

The fields method now supports passing a hash (Object) that define all the fields to be defined.

``` coffeescript
 # Define as hash
class App.User extends Tower.Model
  @fields firstName: 'String'
    middleName:       'String'
    lastName:         'String'
    email:            'String'
    likeCount:        'Integer'
    activatedAt:      'Date'
    active:           type: 'Boolean', default: false
    admin:            type: 'Boolean', default: false
```

You can also pass a list of strings that are the field names, where the options hash is then shared by all those fields. If no options hash is given, the fields default to the default type of Tower fields (same as using the `field` macro without a type: option).

``` coffeescript
# Define multiple at a time
class App.User extends Tower.Model
  @fields 'firstName', 'middleName', 'lastName', 'email'
  @fields 'likeCount',        type: 'Integer'
  @fields 'activatedAt',      type: 'Date'
  @fields 'active', 'admin',  type: 'Boolean', default: false 
``` 

You should avoid to mix too many variants of field definitions in your model as it will reduce code readability. As always, use great power with care!