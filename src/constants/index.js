import dashboard from '../assets/dashboard'
import CreateCampaign from '../assets/CreateCampaign'
import Payment from '../assets/Payment'
import Withdraw from '../assets/Withdraw'
import Profile from '../assets/Profile'
import Logout from '../assets/Logout'


export const navlinks = [
  
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: CreateCampaign,
    link: '/create-campaign',
  },
  {
    name: 'payment',
    imgUrl: Payment,
    link: '/',
    disabled: true,
  },
  {
    name: 'withdraw',
    imgUrl: Withdraw,
    link: '/',
    disabled: true,
  },
  {
    name: 'profile',
    imgUrl: Profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: Logout,
    link: '/',
    disabled: true,
  },
];
