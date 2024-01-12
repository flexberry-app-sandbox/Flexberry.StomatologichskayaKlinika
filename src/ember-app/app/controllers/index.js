import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.caption'),
          title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.title'),
          children: [{
            link: 'i-i-s-stomatologichskaya-klinika-запись-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-запись-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-запись-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-клиент-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-клиент-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-должность-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-должность-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-кабинет-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-кабинет-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-кабинет-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-услуга-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-услуга-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-услуга-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-материал-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-материал-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-материал-l.title'),
            icon: 'phone',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-производитель-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-производитель-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-производитель-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-оплата-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-оплата-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-оплата-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-сотрудник-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-stomatologichskaya-klinika-регистр-записи-l',
            caption: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-регистр-записи-l.caption'),
            title: i18n.t('forms.application.sitemap.stomatologichskaya-klinika.i-i-s-stomatologichskaya-klinika-регистр-записи-l.title'),
            icon: 'file',
            children: null
          }]
        }
      ]
    };
  }),
})