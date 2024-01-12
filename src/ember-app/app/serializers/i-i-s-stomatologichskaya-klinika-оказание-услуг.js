import { Serializer as ОказаниеУслугSerializer } from
  '../mixins/regenerated/serializers/i-i-s-stomatologichskaya-klinika-оказание-услуг';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОказаниеУслугSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
