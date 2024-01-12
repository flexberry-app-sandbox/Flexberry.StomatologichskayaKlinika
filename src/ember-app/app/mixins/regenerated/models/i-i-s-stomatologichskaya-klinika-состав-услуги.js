import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  единицы: DS.attr('i-i-s-stomatologichskaya-klinika-единицы'),
  количество: DS.attr('number'),
  материал: DS.belongsTo('i-i-s-stomatologichskaya-klinika-материал', { inverse: null, async: false }),
  услуга: DS.belongsTo('i-i-s-stomatologichskaya-klinika-услуга', { inverse: 'составУслуги', async: false })
});

export let ValidationRules = {
  единицы: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-состав-услуги.validations.единицы.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  количество: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-состав-услуги.validations.количество.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  материал: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-состав-услуги.validations.материал.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуга: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-состав-услуги.validations.услуга.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставУслугиE', 'i-i-s-stomatologichskaya-klinika-состав-услуги', {
    количество: attr('Количество', { index: 0 }),
    единицы: attr('Единицы', { index: 1 })
  });
};
