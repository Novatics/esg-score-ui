/* eslint-disable complexity */
type TCompanyScoreInfomation = {
  scoreGrade: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | '-'
  scoreMessage: string
}

export const companyScoreInfomation = (companyScore: number): TCompanyScoreInfomation => {
  if (companyScore === 0)
    return {
      scoreGrade: '-',
      scoreMessage: 'There is no score to display for now',
    }
  if (companyScore < 400)
    return {
      scoreGrade: 'F',
      scoreMessage:
        'Your organization has poor cyber hygiene, and you are in the highest risk category for compromise. Immediate focus on reducing the attack surface is required. ',
    }
  if (companyScore < 600)
    return {
      scoreGrade: 'E',
      scoreMessage:
        'Your organization has a reasonable chance of being impacted by a cyber attack. Additional focus on your cyber hygiene is required. A few small changes will have a major impact for your company.',
    }
  if (companyScore < 700)
    return {
      scoreGrade: 'D',
      scoreMessage:
        'Your organization has very good online habits and are less likely to fall prey to cyber threats. Consider levelling up your cyber training to strengthen enterprise protection.',
    }
  if (companyScore < 800)
    return {
      scoreGrade: 'C',
      scoreMessage:
        'Your organization has very good online habits and are less likely to fall prey to cyber threats. Consider levelling up your cyber training to strengthen enterprise protection.',
    }
  if (companyScore < 900)
    return {
      scoreGrade: 'B',
      scoreMessage:
        'Your organization has excellent cyber hygiene or a limited radius of exposure. We encourage your continued focus and diligence. Always keep cyber protection at the forefront of your operations.',
    }
  return {
    scoreGrade: 'A',
    scoreMessage:
      'Your organization has excellent cyber hygiene or a limited radius of exposure. We encourage your continued focus and diligence. Always keep cyber protection at the forefront of your operations.',
  }
}

export default { companyScoreInfomation }
