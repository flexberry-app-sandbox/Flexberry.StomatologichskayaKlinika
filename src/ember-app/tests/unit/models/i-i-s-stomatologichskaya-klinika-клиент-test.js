import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomatologichskaya-klinika-клиент', 'Unit | Model | i-i-s-stomatologichskaya-klinika-клиент', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-stomatologichskaya-klinika-документы',
    'model:i-i-s-stomatologichskaya-klinika-должность',
    'model:i-i-s-stomatologichskaya-klinika-запись',
    'model:i-i-s-stomatologichskaya-klinika-кабинет',
    'model:i-i-s-stomatologichskaya-klinika-клиент',
    'model:i-i-s-stomatologichskaya-klinika-материал',
    'model:i-i-s-stomatologichskaya-klinika-оказание-услуг',
    'model:i-i-s-stomatologichskaya-klinika-оплата',
    'model:i-i-s-stomatologichskaya-klinika-производитель',
    'model:i-i-s-stomatologichskaya-klinika-регистр-записи',
    'model:i-i-s-stomatologichskaya-klinika-состав-услуги',
    'model:i-i-s-stomatologichskaya-klinika-сотрудник',
    'model:i-i-s-stomatologichskaya-klinika-услуга',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
