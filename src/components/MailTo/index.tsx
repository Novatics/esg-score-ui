interface IMailToProps {
  email: string
  subject: string
  body?: string
  children?: React.ReactNode
}

const MailTo = ({ email, subject, body, children }: IMailToProps) => {
  return (
    <a
      style={{ textDecoration: 'none' }}
      href={`mailto:${email}?subject=${subject || ''}&body=${body || ''}`}
    >
      {children}
    </a>
  )
}

export default MailTo
