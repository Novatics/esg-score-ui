/* eslint-disable complexity */

import { TUserRole } from 'models/user.model'

const get = ({ isAdmin, companyId }: { isAdmin: string; companyId: string }): TUserRole => {
  let role

  if (isAdmin) {
    role = 'admin'
  }

  if (!isAdmin && companyId === 'individualPlan') {
    role = 'userB2C'
  }

  if (!isAdmin && companyId !== 'individualPlan') {
    role = 'employee'
  }

  return role
}

export { get }
