/* eslint-disable import/no-named-default */
import Carousel from 'react-grid-carousel'
import Box from 'components/Box'
import Typography from 'components/Typography'
import BoxCard from './components/BoxCard'
import { default as OnePassword } from './Icons/1Password.svg'
import { default as Keeper } from './Icons/keeper.svg'
import { default as NordPass } from './Icons/nordpass.svg'
import { default as RoboForm } from './Icons/roboform.svg'

const MockPasswords = [
  {
    title: 'Password Managers',
    cards: [
      {
        title: '1Password',
        description: 'Manage your passwords in a single place',
        icon: <img src={OnePassword} alt="OnePassword" />,
      },
      {
        title: 'NordPass',
        description: 'Manage your passwords in a single place',
        icon: <img src={NordPass} alt="NordPass" />,
      },
      {
        title: 'Keeper',
        description: 'Manage your passwords in a single place',
        icon: <img src={Keeper} alt="OnePasswKeeperord" />,
      },
      {
        title: 'RoboForm',
        description: 'Manage your passwords in a single place',
        icon: <img src={RoboForm} alt="RoboForm" />,
      },
      {
        title: 'NordPass',
        description: 'Manage your passwords in a single place',
        icon: <img src={NordPass} alt="NordPass" />,
      },
      {
        title: 'Keeper',
        description: 'Manage your passwords in a single place',
        icon: <img src={Keeper} alt="OnePasswKeeperord" />,
      },
    ],
  },
  {
    title: 'Virtual Private Network (VPN)',
    cards: [
      {
        title: 'Keeper',
        description: 'Manage your passwords in a single place',
        icon: <img src={Keeper} alt="OnePasswKeeperord" />,
      },
      {
        title: '1Password',
        description: 'Manage your passwords in a single place',
        icon: <img src={OnePassword} alt="OnePassword" />,
      },

      {
        title: 'RoboForm',
        description: 'Manage your passwords in a single place',
        icon: <img src={RoboForm} alt="RoboForm" />,
      },
      {
        title: 'NordPass',
        description: 'Manage your passwords in a single place',
        icon: <img src={NordPass} alt="NordPass" />,
      },
    ],
  },
  {
    title: 'Templates',
    cards: [
      {
        title: 'RoboForm',
        description: 'Manage your passwords in a single place',
        icon: <img src={RoboForm} alt="RoboForm" />,
      },
    ],
  },
]

const breakpoints = [
  {
    breakpoint: 600,
    cols: 1,
  },
  {
    breakpoint: 900,
    cols: 2,
  },
  {
    breakpoint: 1200,
    cols: 3,
  },
]

function Referrals() {
  return (
    <Box mt={1}>
      <Typography variant="h4">Referrals</Typography>
      {MockPasswords.map(({ cards, title }) => {
        return (
          <Box mt={4} mb={8} key={title}>
            <Typography mb={3} variant="h5" color="primary.dark">
              {title}
            </Typography>

            <Carousel scrollSnap={false} cols={4} rows={1} gap={16} responsiveLayout={breakpoints}>
              {cards.map(({ title: titleCard, description, icon }) => {
                return (
                  <Carousel.Item key={titleCard} styles={{ marginLeft: '10px' }}>
                    <BoxCard title={titleCard} description={description} icon={icon} />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Box>
        )
      })}
    </Box>
  )
}

export default Referrals
