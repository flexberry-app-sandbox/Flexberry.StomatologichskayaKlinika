import { Serializer as РегистрЗаписиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-stomatologichskaya-klinika-регистр-записи';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РегистрЗаписиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
