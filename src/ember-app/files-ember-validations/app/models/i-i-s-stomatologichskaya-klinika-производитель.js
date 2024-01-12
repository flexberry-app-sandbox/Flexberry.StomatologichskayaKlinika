import {
  defineNamespace,
  defineProjections,
  Model as ПроизводительMixin
} from '../mixins/regenerated/models/i-i-s-stomatologichskaya-klinika-производитель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПроизводительMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
