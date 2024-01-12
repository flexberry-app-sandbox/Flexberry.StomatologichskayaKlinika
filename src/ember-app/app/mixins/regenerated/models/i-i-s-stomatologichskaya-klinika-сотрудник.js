import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  датаРождения: DS.attr('date'),
  имя: DS.attr('string'),
  кодСотрудника: DS.attr('number'),
  номерТелефона: DS.attr('number'),
  отчество: DS.attr('string'),
  фамилия: DS.attr('string'),
  должность: DS.belongsTo('i-i-s-stomatologichskaya-klinika-должность', { inverse: null, async: false })
});

export let ValidationRules = {
  датаРождения: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-сотрудник.validations.датаРождения.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  имя: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-сотрудник.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  кодСотрудника: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-сотрудник.validations.кодСотрудника.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-сотрудник.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отчество: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-сотрудник.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  фамилия: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-сотрудник.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должность: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-сотрудник.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СотрудникE', 'i-i-s-stomatologichskaya-klinika-сотрудник', {
    кодСотрудника: attr('Код сотрудника', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    датаРождения: attr('Дата рождения', { index: 5 })
  });

  modelClass.defineProjection('СотрудникL', 'i-i-s-stomatologichskaya-klinika-сотрудник', {
    кодСотрудника: attr('Код сотрудника', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    датаРождения: attr('Дата рождения', { index: 5 })
  });
};
