require 'tower'
require '../lib/tower_fields'

describe 'Tower.Model.Attributes', ->
  describe 'Class method fields macro extensions', ->
    test 'extra macros exist', ->
      assert Tower.Model.Attribute.fields
      assert Tower.Model.Attribute.booleans
      assert Tower.Model.Attribute.strings