const score = (req, res, ctx) => {
  // Persist user's authentication in the session
  const data = {
    scoreHistory: [
      {
        score: 500,
        date: '2022-03-25T11:37:12.534Z',
        _id: '623df5780956ac0f606cb1a6',
        fixList: {
          allSocialMediasInPrivate:
            'Client advised on Fix List to set all social accounts to Private.',
          haveResponsePlan: 'Client advised to create Personal Cyber Incident Response Plan.',
          wifiPasswordChangedMultipleTimesAYear:
            'Client advised to change device passwords regularly and sync with password manager.',
          email:
            'Client advised to take action which could include resetting passwords, closing accounts, takedown/removal service.',
        },
      },
    ],
    id: '623df5780956ac0f606cb1a4',
  }
  return res(ctx.delay(1000), ctx.json(data))
}

export default {
  score,
}
