import escaladeExt from '../Fleet/Cadillac Escalade/escalade.webp'
import escaladeInt from '../Fleet/Cadillac Escalade/escalade-int.webp'
import xt6Ext from '../Fleet/Cadillac XT6/xt6.webp'
import xt6Int from '../Fleet/Cadillac XT6/xt6-int.webp'
import xtsExt from '../Fleet/Cadillac XTS/xts.webp'
import xtsInt from '../Fleet/Cadillac XTS/xts-int.webp'
import teslaSExt from '../Fleet/Tesla Model S/tesla-s.webp'
import teslaSInt from '../Fleet/Tesla Model S/tesla-s-int.webp'
import sprinterExt from '../Fleet/Mercedes Sprinter/sprinter-van.webp'
import sprinterInt from '../Fleet/Mercedes Sprinter/sprinter-van-int.webp'

export const vehicles = [
  {
    class: 'Cadillac Escalade',
    usage: 'Executive Travel',
    label: 'Most Popular',
    models: 'Full-size luxury SUV, or similar',
    images: [escaladeExt, escaladeInt],
    features: [
      'Fits up to 6 passengers',
      'Generous luggage capacity for every trip',
      'Available 24/7 throughout Southern California',
    ],
  },
  {
    class: 'Cadillac XT6',
    usage: 'Airport & Business Transfers',
    label: null,
    models: 'Mid-size luxury SUV, or similar',
    images: [xt6Ext, xt6Int],
    features: [
      'Fits up to 6 passengers',
      'Ideal for business and airport transfers',
      'Available 24/7 throughout Southern California',
    ],
  },
  {
    class: 'Cadillac XTS',
    usage: 'Executive Sedan',
    label: null,
    models: 'Executive sedan, or similar',
    images: [xtsExt, xtsInt],
    features: [
      'Fits up to 3 passengers',
      'Sleek professional executive arrival',
      'Available 24/7 throughout Southern California',
    ],
  },
  {
    class: 'Tesla Model S',
    usage: 'Electric Executive Travel',
    label: 'Electric',
    models: 'Electric executive sedan, or similar',
    images: [teslaSExt, teslaSInt],
    features: [
      'Fits up to 3 passengers',
      'Zero emissions, whisper-quiet cabin',
      'Cutting-edge technology throughout',
    ],
  },
  {
    class: 'Mercedes Sprinter',
    usage: 'Executive Teams & Group Transportation',
    label: null,
    models: 'Executive van, or similar',
    images: [sprinterExt, sprinterInt],
    features: [
      'Fits up to 12 passengers',
      'Perfect for group and corporate transfers',
      'Available for events throughout LA',
    ],
  },
]
