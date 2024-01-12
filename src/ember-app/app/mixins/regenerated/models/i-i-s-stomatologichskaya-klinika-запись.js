import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  время: DS.attr('string'),
  дата: DS.attr('date'),
  кодЗаписи: DS.attr('number'),
  комментарий: DS.attr('string'),
  сумма: DS.attr('decimal'),
  кабинет: DS.belongsTo('i-i-s-stomatologichskaya-klinika-кабинет', { inverse: null, async: false }),
  клиент: DS.belongsTo('i-i-s-stomatologichskaya-klinika-клиент', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-stomatologichskaya-klinika-сотрудник', { inverse: null, async: false }),
  оказаниеУслуг: DS.hasMany('i-i-s-stomatologichskaya-klinika-оказание-услуг', { inverse: 'запись', async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.время.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  кодЗаписи: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.кодЗаписи.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комментарий: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.комментарий.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сумма: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.сумма.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  кабинет: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.кабинет.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  клиент: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.клиент.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  оказаниеУслуг: {
    descriptionKey: 'models.i-i-s-stomatologichskaya-klinika-запись.validations.оказаниеУслуг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗаписьE', 'i-i-s-stomatologichskaya-klinika-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 }),
    оказаниеУслуг: hasMany('i-i-s-stomatologichskaya-klinika-оказание-услуг', 'Оказание услуг', {
      
    })
  });

  modelClass.defineProjection('ЗаписьL', 'i-i-s-stomatologichskaya-klinika-запись', {
    кодЗаписи: attr('Код записи', { index: 0 }),
    время: attr('Время', { index: 1 }),
    дата: attr('Дата', { index: 2 }),
    сумма: attr('Сумма', { index: 3 }),
    комментарий: attr('Комментарий', { index: 4 })
  });
};
