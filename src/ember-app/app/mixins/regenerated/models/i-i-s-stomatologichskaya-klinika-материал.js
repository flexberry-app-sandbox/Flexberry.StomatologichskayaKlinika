import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  кодМатериала: DS.attr('number'),
  наименование: DS.attr('string'),
  производитель: DS.belongsTo('i-i-s-stomatologichskaya-klinika-производитель', { inverse: null, async: false })
});

export let ValidationRules = {
  кодМатериала: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-материал.validations.кодМатериала.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  наименование: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-материал.validations.наименование.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  производитель: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-материал.validations.производитель.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('МатериалE', 'i-i-s-stomatologichskaya-klinika-материал', {
    кодМатериала: attr('Код материала', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });

  modelClass.defineProjection('МатериалL', 'i-i-s-stomatologichskaya-klinika-материал', {
    кодМатериала: attr('Код материала', { index: 0 }),
    наименование: attr('Наименование', { index: 1 })
  });
};
