interface IScoreHistory {
  score: number
  date: Date
  _id: string
}

export interface ICompanyThreats {
  label: string
  quantity: number
  classification: 'strength' | 'critical' | 'important'
}
export interface ICompanyStats {
  seats: number
  seatsRemaining: number
  accountsCreated: {
    total: number
    completedProfile: string
  }
  participationRate: {
    percentage: number
    calculation: string
  }
  companyScans: number
  nextScanDate: Date
  lastScore: number
  threats: Array<ICompanyThreats>
  sumThreats: number
}
export interface ICompanyData {
  email: string[]
  industry: string
  companyDomains: string[]
  billingEmail: string
  active: boolean
  name: string
  invite: string
  image: string
  scoreHistory: IScoreHistory[]
  seatsRemaining: number
  seats: number
  companyScore: number
}
