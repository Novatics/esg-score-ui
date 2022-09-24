import { ReactComponent as FacebookIcon } from 'assets/appIcons/facebook.svg'
import { ReactComponent as FitnessIcon } from 'assets/appIcons/fitness.svg'
import { ReactComponent as GrindrIcon } from 'assets/appIcons/grindr.svg'
import { ReactComponent as InstagramIcon } from 'assets/appIcons/instagram.svg'
import { ReactComponent as NegativeFacebookIcon } from 'assets/appIcons/NegativeFacebook.svg'
import { ReactComponent as NegativeGrindrIcon } from 'assets/appIcons/NegativeGrindr.svg'
import { ReactComponent as NegativeInstagramIcon } from 'assets/appIcons/NegativeInstagram.svg'
import { ReactComponent as NegativeFitnessIcon } from 'assets/appIcons/NegativeMyFitnessPal.svg'
import { ReactComponent as NegativeSpotifyIcon } from 'assets/appIcons/NegativeSpotify.svg'
import { ReactComponent as NegativeStravaIcon } from 'assets/appIcons/NegativeStrava.svg'
import { ReactComponent as NegativeTescoIcon } from 'assets/appIcons/NegativeTesco.svg'
import { ReactComponent as NegativeTiktokIcon } from 'assets/appIcons/NegativeTikTok.svg'
import { ReactComponent as NegativeTinderIcon } from 'assets/appIcons/NegativeTinder.svg'
import { ReactComponent as NegativeUberIcon } from 'assets/appIcons/NegativeUber.svg'
import { ReactComponent as SpotifyIcon } from 'assets/appIcons/spotify.svg'
import { ReactComponent as StravaIcon } from 'assets/appIcons/strava.svg'
import { ReactComponent as TescoIcon } from 'assets/appIcons/tesco.svg'
import { ReactComponent as TiktokIcon } from 'assets/appIcons/tiktok.svg'
import { ReactComponent as TinderIcon } from 'assets/appIcons/tinder.svg'
import { ReactComponent as UberIcon } from 'assets/appIcons/uber.svg'

const top10apps = [
  {
    checked: false,
    value: 'facebook',
    label: 'Facebook',
    icon: <FacebookIcon />,
    negativeIcon: <NegativeFacebookIcon />,
  },
  {
    checked: false,
    value: 'tinder',
    label: 'Tinder',
    icon: <TinderIcon />,
    negativeIcon: <NegativeTinderIcon />,
  },
  {
    checked: false,
    value: 'instagram',
    label: 'Instagram',
    icon: <InstagramIcon />,
    negativeIcon: <NegativeInstagramIcon />,
  },
  {
    checked: false,
    value: 'tik tok',
    label: 'Tik Tok',
    icon: <TiktokIcon />,
    negativeIcon: <NegativeTiktokIcon />,
  },
  {
    checked: false,
    value: 'grindr',
    label: 'Grindr',
    icon: <GrindrIcon />,
    negativeIcon: <NegativeGrindrIcon />,
  },
  {
    checked: false,
    value: 'tesco',
    label: 'Tesco',
    icon: <TescoIcon />,
    negativeIcon: <NegativeTescoIcon />,
  },
  {
    checked: false,
    value: 'my fitness pal',
    label: 'My Fitness Pal',
    icon: <FitnessIcon />,
    negativeIcon: <NegativeFitnessIcon />,
  },
  {
    checked: false,
    value: 'uber',
    label: 'Uber',
    icon: <UberIcon />,
    negativeIcon: <NegativeUberIcon />,
  },
  {
    checked: false,
    value: 'strava',
    label: 'Strava',
    icon: <StravaIcon />,
    negativeIcon: <NegativeStravaIcon />,
  },
  {
    checked: false,
    value: 'spotify',
    label: 'Spotify',
    icon: <SpotifyIcon />,
    negativeIcon: <NegativeSpotifyIcon />,
  },
]

export default top10apps
