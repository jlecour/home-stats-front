import DS from "ember-data";

export default DS.Model.extend({
  datetime: DS.attr('date'),
  type:     DS.attr('string'),
  value:    DS.attr('number')
});