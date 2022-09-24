interface IWebDomainBreach {
  breach: string
  value: any
}
export interface IWebDomainsLeak {
  webDomain: string
  webDomainBreaches: Array<IWebDomainBreach>
}
interface IEmailLeaks {
  name: string
  domain: string | null
  description: string
  date: Date | string | null
  logoPath: string | null
}

export interface IEmailBreaches {
  email: string
  emailBreaches: Array<IEmailLeaks>
}
export interface IFixList {
  critical: {
    address?: {
      message: string
      breaches: Array<string>
    }
    email?: {
      message: string
      breaches: Array<IEmailBreaches>
    }
    useMFA?: string
    webDomains?: {
      message: string
      breaches: Array<IWebDomainsLeak>
    }
  }
  important: {
    fullname?: {
      message: string
      breaches: Array<string>
    }
    phoneNumber?: {
      message: string
      breaches: Array<string>
    }
    image?: {
      message: string
      breaches: Array<string>
    }
    haveResponsePlan?: string
    top10Apps?: string
    allSocialMediasInPrivate?: string
    havePasswordManager?: string
  }
  strength: Array<string>
}
export interface IScoreHistory {
  _id: string
  score: number
  date: Date
  fixList: IFixList
}

export interface IScore {
  scoreHistory: IScoreHistory[]
  id: string
}

export interface IRegister {
  scoreHistory: IScoreHistory[]
  address: {
    street: string
    number: string
    postalCode: string
    city: string
    country: string
  }
  email: string
  secondaryEmails: Array<string>
  webDomains: string[]
  useMFA: boolean
  haveResponsePlan: boolean
  top10Apps: string[]
  allSocialMediasInPrivate: boolean
  havePasswordManager: boolean
  fullname: string
  phoneNumber: string
  company: string
  gender: string
  image: string
  birthDate: Date

  id: string
}
