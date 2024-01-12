import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-stomatologichskaya-klinika-услуга', 'Unit | Serializer | i-i-s-stomatologichskaya-klinika-услуга', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-stomatologichskaya-klinika-услуга',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-stomatologichskaya-klinika-единицы',
    'transform:i-i-s-stomatologichskaya-klinika-тип-оплаты',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
