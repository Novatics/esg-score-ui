/* eslint-disable quotes */
/* eslint-disable max-lines */
import { ReactComponent as TwoFaSVG } from 'assets/Icons/Threats/2FA.svg'
import { ReactComponent as AddressSVG } from 'assets/Icons/Threats/address.svg'
import { ReactComponent as ResponsePlanSVG } from 'assets/Icons/Threats/cyberSecurityResponsePlan.svg'
import { ReactComponent as PasswordSVG } from 'assets/Icons/Threats/password.svg'
import { ReactComponent as PasswordManagerSVG } from 'assets/Icons/Threats/passwordManager.svg'
import { ReactComponent as PersonalImgSVG } from 'assets/Icons/Threats/personalImg.svg'
import { ReactComponent as PhoneNumberSVG } from 'assets/Icons/Threats/phoneNumber.svg'
import { ReactComponent as privateSocialMediaSVG } from 'assets/Icons/Threats/privateSocialMedia.svg'
import { ReactComponent as InvasiveAppsSVG } from 'assets/Icons/Threats/top10Apps.svg'
import { ReactComponent as usernameSVG } from 'assets/Icons/Threats/username.svg'
import { ReactComponent as WebDomainsSVG } from 'assets/Icons/Threats/webDomains.svg'


export const userThreats = {
  fullname: {
    description: 'company users have their name leaked',
    recommendedAction:
      'Verify if your name is online without your consent. You may need some takedown or removal services.',
    strengthTitle: 'Name',
    strengthAreaText: "Your name wasn't leaked in any sites.",
    reasonToBeImportant:
      'Criminals can use your personal information to open bank accounts, credit cards, benefits, and official documents in your name. They may do this to buy things in your name and charge them to your bank account.',
    title: 'Name leaked',
    icon: usernameSVG,
  },
  address: {
    description: 'company users have their address leaked',
    recommendedAction:
      'Verify if your address is online without your consent. You may need some takedown or removal services.',
    strengthTitle: 'Address',
    strengthAreaText: 'Your address wasn’t leaked in any sites.',
    reasonToBeImportant:
      'The fear may no longer be of being robbed at home. Online identity thieves may decide to enter your name and address into a publicly searchable database to see what other information they can find about your financial life.',
    title: 'Address Leaked',
    icon: AddressSVG,
  },
  phoneNumber: {
    description: 'company users have their phone number leaked',
    recommendedAction:
      'Verify if your phone number is online without your consent. You may need some takedown or removal services.',
    strengthTitle: 'Phone Number',
    strengthAreaText: 'Your phone number wasn’t leaked in any site.',
    reasonToBeImportant:
      'Once someone obtains your phone number, they could use social engineering or other techniques to find out more personal information about you.',
    title: 'Phone Number Leaked',
    icon: PhoneNumberSVG,
  },
  email: {
    description: 'company users have a password leaked',
    recommendedAction: 'Log into your accounts at risk and change your password immediately.',
    strengthTitle: 'Password',
    strengthAreaText: 'None of your confirmed email accounts have been compromised.',
    reasonToBeImportant:
      'Passwords are your first line of defense against unauthorized access to your computer and personal information. The stronger your password, the better protected your computer will be from hackers and malicious software.',
    title: 'Password Leaked',
    icon: PasswordSVG,
  },
  webDomains: {
    description: 'company users have a web domain leaked',
    recommendedAction:
      'Verify if your web domains were compromised. You may need to contact your provider to recover it.',
    strengthTitle: 'Web Domains',
    strengthAreaText: 'None of your web domains have been compromised.',
    reasonToBeImportant:
      'If your web domains are compromised, you may face pharming attacks, also known as domain hijacking, in which your website traffic is redirected elsewhere in order to steal your sensitive data.',
    title: 'Web Domains Compromised',
    icon: WebDomainsSVG,
  },
  image: {
    description: 'company users have their image being used online',
    recommendedAction:
      'Verify if your photo is online without your consent. You may need some takedown or removal services.',
    strengthTitle: 'Personal Image',
    strengthAreaText: 'Your personal image wasn’t found in any sites without your consent.',
    reasonToBeImportant:
      'In addition to being stolen and used by strangers, many images, particularly those taken with smartphones, have location markers that allow viewers to determine the exact area where they were taken.',
    title: 'Personal Image in Use',
    icon: PersonalImgSVG,
  },
  useMFA: {
    description: 'You do not use Two Factor Authentication!',
    recommendedAction: 'Log into your personal accounts and get that extra layer of protection.',
    strengthTitle: 'Two Factor Authentication',
    strengthAreaText: 'You already use Two Factor Authentication. Good job!',
    reasonToBeImportant:
      '2FA reduces the risks associated with compromised passwords immediately. If a password is hacked, guessed, or phished, it is no longer sufficient to grant access: without second factor approval, a password is useless.',
    title: 'Two Factor Authentication',
    icon: TwoFaSVG,
  },
  haveResponsePlan: {
    description: 'You don’t have a Cybersecurity Response Plan!',
    recommendedAction:
      'Alert these users to check their personal report,  download our template and create their Response Plan as soon as possible.',
    strengthTitle: 'Cybersecurity Response Plan',
    strengthAreaText: 'You already have a Cybersecurity Response Plan! Good job!',
    reasonToBeImportant:
      'Being prepared for an attack is essential for quickly identifying and responding to one. A well-structured base from which to launch the response plan ensures minimal damage to the attacked entity.',
    title: 'Cybersecurity Response Plan',
    icon: ResponsePlanSVG,
  },
  top10Apps: {
    description: 'Your are using the most invasive apps.',
    recommendedAction: 'Remove apps that you don’t use often and review permissions on other apps.',
    strengthTitle: 'Invasive Apps',
    strengthAreaText: "You're not using any of the 10 most invasive apps.",
    reasonToBeImportant:
      'There is no way to avoid dangerous apps completely, but you should be cautious of those that feature a lot of ads and require invasive permissions. Always read the permissions and privacy policies before using any apps.',
    title: 'Invasive Apps',
    icon: InvasiveAppsSVG,
  },
  allSocialMediasInPrivate: {
    description: "You don't have all your social accounts set to private.",
    recommendedAction:
      'Open your social media accounts, go to settings and set them to private immediately.',
    strengthTitle: 'Private Social Media',
    strengthAreaText: 'You have all your social accounts set to private.',
    reasonToBeImportant:
      'Excessive information sharing on social media can lead to cyberstalking, live location disclosure, social profiling, phishing, identity theft, blackmail, and the disclosure of third-party personal information.',
    title: 'Private Social Media',
    icon: privateSocialMediaSVG,
  },
  havePasswordManager: {
    description: 'You are not using a Passoword Manager to protect your accounts.',
    recommendedAction: 'Download our template and create your Response Plan as soon as possible.',
    strengthTitle: 'Password Manager',
    strengthAreaText: 'You are using a Passoword Manager to protect your accounts.',
    reasonToBeImportant:
      'By encrypting your logins so that they can only be accessible when you enter your master password, password managers keep your data secure.',
    title: 'Password Manager',
    importantText: '',
    icon: PasswordManagerSVG,
  },
}
