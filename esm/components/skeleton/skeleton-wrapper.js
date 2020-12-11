import Vue, { mergeData } from '../../vue';
import { NAME_SKELETON_WRAPPER } from '../../constants/components';
import { SLOT_NAME_DEFAULT } from '../../constants/slot-names';
import { makePropsConfigurable } from '../../utils/config';
import { normalizeSlot } from '../../utils/normalize-slot'; // @vue/component

export var BSkeletonWrapper = /*#__PURE__*/Vue.extend({
  name: NAME_SKELETON_WRAPPER,
  functional: true,
  props: makePropsConfigurable({
    loading: {
      type: Boolean,
      default: false
    }
  }, NAME_SKELETON_WRAPPER),
  render: function render(h, _ref) {
    var data = _ref.data,
        props = _ref.props,
        slots = _ref.slots,
        scopedSlots = _ref.scopedSlots;
    var $slots = slots();
    var $scopedSlots = scopedSlots || {};
    var slotScope = {};

    if (props.loading) {
      return h('div', mergeData(data, {
        attrs: {
          role: 'alert',
          'aria-live': 'polite',
          'aria-busy': true
        },
        staticClass: 'b-skeleton-wrapper',
        key: 'loading'
      }), [normalizeSlot('loading', slotScope, $scopedSlots, $slots) || h()]);
    }

    return normalizeSlot(SLOT_NAME_DEFAULT, slotScope, $scopedSlots, $slots) || h();
  }
});