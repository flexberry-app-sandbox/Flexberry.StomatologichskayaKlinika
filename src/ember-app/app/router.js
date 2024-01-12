import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-stomatologichskaya-klinika-должность-l');
  this.route('i-i-s-stomatologichskaya-klinika-должность-e',
  { path: 'i-i-s-stomatologichskaya-klinika-должность-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-должность-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-должность-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-запись-l');
  this.route('i-i-s-stomatologichskaya-klinika-запись-e',
  { path: 'i-i-s-stomatologichskaya-klinika-запись-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-запись-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-запись-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-кабинет-l');
  this.route('i-i-s-stomatologichskaya-klinika-кабинет-e',
  { path: 'i-i-s-stomatologichskaya-klinika-кабинет-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-кабинет-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-кабинет-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-клиент-l');
  this.route('i-i-s-stomatologichskaya-klinika-клиент-e',
  { path: 'i-i-s-stomatologichskaya-klinika-клиент-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-клиент-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-клиент-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-материал-l');
  this.route('i-i-s-stomatologichskaya-klinika-материал-e',
  { path: 'i-i-s-stomatologichskaya-klinika-материал-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-материал-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-материал-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-оплата-l');
  this.route('i-i-s-stomatologichskaya-klinika-оплата-e',
  { path: 'i-i-s-stomatologichskaya-klinika-оплата-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-оплата-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-оплата-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-производитель-l');
  this.route('i-i-s-stomatologichskaya-klinika-производитель-e',
  { path: 'i-i-s-stomatologichskaya-klinika-производитель-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-производитель-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-производитель-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-регистр-записи-l');
  this.route('i-i-s-stomatologichskaya-klinika-регистр-записи-e',
  { path: 'i-i-s-stomatologichskaya-klinika-регистр-записи-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-регистр-записи-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-регистр-записи-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-сотрудник-l');
  this.route('i-i-s-stomatologichskaya-klinika-сотрудник-e',
  { path: 'i-i-s-stomatologichskaya-klinika-сотрудник-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-сотрудник-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-сотрудник-e/new' });
  this.route('i-i-s-stomatologichskaya-klinika-услуга-l');
  this.route('i-i-s-stomatologichskaya-klinika-услуга-e',
  { path: 'i-i-s-stomatologichskaya-klinika-услуга-e/:id' });
  this.route('i-i-s-stomatologichskaya-klinika-услуга-e.new',
  { path: 'i-i-s-stomatologichskaya-klinika-услуга-e/new' });
});

export default Router;
