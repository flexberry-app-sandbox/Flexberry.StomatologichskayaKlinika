import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISStomatologichskaya_klinikaДолжностьLForm from './forms/i-i-s-stomatologichskaya-klinika-должность-l';
import IISStomatologichskaya_klinikaЗаписьLForm from './forms/i-i-s-stomatologichskaya-klinika-запись-l';
import IISStomatologichskaya_klinikaКабинетLForm from './forms/i-i-s-stomatologichskaya-klinika-кабинет-l';
import IISStomatologichskaya_klinikaКлиентLForm from './forms/i-i-s-stomatologichskaya-klinika-клиент-l';
import IISStomatologichskaya_klinikaМатериалLForm from './forms/i-i-s-stomatologichskaya-klinika-материал-l';
import IISStomatologichskaya_klinikaОплатаLForm from './forms/i-i-s-stomatologichskaya-klinika-оплата-l';
import IISStomatologichskaya_klinikaПроизводительLForm from './forms/i-i-s-stomatologichskaya-klinika-производитель-l';
import IISStomatologichskaya_klinikaРегистрЗаписиLForm from './forms/i-i-s-stomatologichskaya-klinika-регистр-записи-l';
import IISStomatologichskaya_klinikaСотрудникLForm from './forms/i-i-s-stomatologichskaya-klinika-сотрудник-l';
import IISStomatologichskaya_klinikaУслугаLForm from './forms/i-i-s-stomatologichskaya-klinika-услуга-l';
import IISStomatologichskaya_klinikaДолжностьEForm from './forms/i-i-s-stomatologichskaya-klinika-должность-e';
import IISStomatologichskaya_klinikaЗаписьEForm from './forms/i-i-s-stomatologichskaya-klinika-запись-e';
import IISStomatologichskaya_klinikaКабинетEForm from './forms/i-i-s-stomatologichskaya-klinika-кабинет-e';
import IISStomatologichskaya_klinikaКлиентEForm from './forms/i-i-s-stomatologichskaya-klinika-клиент-e';
import IISStomatologichskaya_klinikaМатериалEForm from './forms/i-i-s-stomatologichskaya-klinika-материал-e';
import IISStomatologichskaya_klinikaОплатаEForm from './forms/i-i-s-stomatologichskaya-klinika-оплата-e';
import IISStomatologichskaya_klinikaПроизводительEForm from './forms/i-i-s-stomatologichskaya-klinika-производитель-e';
import IISStomatologichskaya_klinikaРегистрЗаписиEForm from './forms/i-i-s-stomatologichskaya-klinika-регистр-записи-e';
import IISStomatologichskaya_klinikaСотрудникEForm from './forms/i-i-s-stomatologichskaya-klinika-сотрудник-e';
import IISStomatologichskaya_klinikaУслугаEForm from './forms/i-i-s-stomatologichskaya-klinika-услуга-e';
import IISStomatologichskaya_klinikaДокументыModel from './models/i-i-s-stomatologichskaya-klinika-документы';
import IISStomatologichskaya_klinikaДолжностьModel from './models/i-i-s-stomatologichskaya-klinika-должность';
import IISStomatologichskaya_klinikaЗаписьModel from './models/i-i-s-stomatologichskaya-klinika-запись';
import IISStomatologichskaya_klinikaКабинетModel from './models/i-i-s-stomatologichskaya-klinika-кабинет';
import IISStomatologichskaya_klinikaКлиентModel from './models/i-i-s-stomatologichskaya-klinika-клиент';
import IISStomatologichskaya_klinikaМатериалModel from './models/i-i-s-stomatologichskaya-klinika-материал';
import IISStomatologichskaya_klinikaОказаниеУслугModel from './models/i-i-s-stomatologichskaya-klinika-оказание-услуг';
import IISStomatologichskaya_klinikaОплатаModel from './models/i-i-s-stomatologichskaya-klinika-оплата';
import IISStomatologichskaya_klinikaПроизводительModel from './models/i-i-s-stomatologichskaya-klinika-производитель';
import IISStomatologichskaya_klinikaРегистрЗаписиModel from './models/i-i-s-stomatologichskaya-klinika-регистр-записи';
import IISStomatologichskaya_klinikaСоставУслугиModel from './models/i-i-s-stomatologichskaya-klinika-состав-услуги';
import IISStomatologichskaya_klinikaСотрудникModel from './models/i-i-s-stomatologichskaya-klinika-сотрудник';
import IISStomatologichskaya_klinikaУслугаModel from './models/i-i-s-stomatologichskaya-klinika-услуга';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-stomatologichskaya-klinika-документы': IISStomatologichskaya_klinikaДокументыModel,
    'i-i-s-stomatologichskaya-klinika-должность': IISStomatologichskaya_klinikaДолжностьModel,
    'i-i-s-stomatologichskaya-klinika-запись': IISStomatologichskaya_klinikaЗаписьModel,
    'i-i-s-stomatologichskaya-klinika-кабинет': IISStomatologichskaya_klinikaКабинетModel,
    'i-i-s-stomatologichskaya-klinika-клиент': IISStomatologichskaya_klinikaКлиентModel,
    'i-i-s-stomatologichskaya-klinika-материал': IISStomatologichskaya_klinikaМатериалModel,
    'i-i-s-stomatologichskaya-klinika-оказание-услуг': IISStomatologichskaya_klinikaОказаниеУслугModel,
    'i-i-s-stomatologichskaya-klinika-оплата': IISStomatologichskaya_klinikaОплатаModel,
    'i-i-s-stomatologichskaya-klinika-производитель': IISStomatologichskaya_klinikaПроизводительModel,
    'i-i-s-stomatologichskaya-klinika-регистр-записи': IISStomatologichskaya_klinikaРегистрЗаписиModel,
    'i-i-s-stomatologichskaya-klinika-состав-услуги': IISStomatologichskaya_klinikaСоставУслугиModel,
    'i-i-s-stomatologichskaya-klinika-сотрудник': IISStomatologichskaya_klinikaСотрудникModel,
    'i-i-s-stomatologichskaya-klinika-услуга': IISStomatologichskaya_klinikaУслугаModel
  },

  'application-name': 'Stomatologichskaya_klinika',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Stomatologichskaya_klinika',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Stomatologichskaya_klinika',
          title: 'Stomatologichskaya_klinika'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'stomatologichskaya-klinika': {
          caption: 'Stomatologichskaya_klinika',
          title: 'Stomatologichskaya_klinika',
          'i-i-s-stomatologichskaya-klinika-запись-l': {
            caption: 'Запись',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-кабинет-l': {
            caption: 'Кабинет',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-услуга-l': {
            caption: 'Услуга',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-материал-l': {
            caption: 'Материал',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-производитель-l': {
            caption: 'Производитель',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-оплата-l': {
            caption: 'Оплата',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-stomatologichskaya-klinika-регистр-записи-l': {
            caption: 'Регистр записи',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-stomatologichskaya-klinika-должность-l': IISStomatologichskaya_klinikaДолжностьLForm,
    'i-i-s-stomatologichskaya-klinika-запись-l': IISStomatologichskaya_klinikaЗаписьLForm,
    'i-i-s-stomatologichskaya-klinika-кабинет-l': IISStomatologichskaya_klinikaКабинетLForm,
    'i-i-s-stomatologichskaya-klinika-клиент-l': IISStomatologichskaya_klinikaКлиентLForm,
    'i-i-s-stomatologichskaya-klinika-материал-l': IISStomatologichskaya_klinikaМатериалLForm,
    'i-i-s-stomatologichskaya-klinika-оплата-l': IISStomatologichskaya_klinikaОплатаLForm,
    'i-i-s-stomatologichskaya-klinika-производитель-l': IISStomatologichskaya_klinikaПроизводительLForm,
    'i-i-s-stomatologichskaya-klinika-регистр-записи-l': IISStomatologichskaya_klinikaРегистрЗаписиLForm,
    'i-i-s-stomatologichskaya-klinika-сотрудник-l': IISStomatologichskaya_klinikaСотрудникLForm,
    'i-i-s-stomatologichskaya-klinika-услуга-l': IISStomatologichskaya_klinikaУслугаLForm,
    'i-i-s-stomatologichskaya-klinika-должность-e': IISStomatologichskaya_klinikaДолжностьEForm,
    'i-i-s-stomatologichskaya-klinika-запись-e': IISStomatologichskaya_klinikaЗаписьEForm,
    'i-i-s-stomatologichskaya-klinika-кабинет-e': IISStomatologichskaya_klinikaКабинетEForm,
    'i-i-s-stomatologichskaya-klinika-клиент-e': IISStomatologichskaya_klinikaКлиентEForm,
    'i-i-s-stomatologichskaya-klinika-материал-e': IISStomatologichskaya_klinikaМатериалEForm,
    'i-i-s-stomatologichskaya-klinika-оплата-e': IISStomatologichskaya_klinikaОплатаEForm,
    'i-i-s-stomatologichskaya-klinika-производитель-e': IISStomatologichskaya_klinikaПроизводительEForm,
    'i-i-s-stomatologichskaya-klinika-регистр-записи-e': IISStomatologichskaya_klinikaРегистрЗаписиEForm,
    'i-i-s-stomatologichskaya-klinika-сотрудник-e': IISStomatologichskaya_klinikaСотрудникEForm,
    'i-i-s-stomatologichskaya-klinika-услуга-e': IISStomatologichskaya_klinikaУслугаEForm
  },

});

export default translations;
