import CriticalArea from './Areas/CriticalArea'
import ImportantArea from './Areas/ImportantArea'
import StrengthArea from './Areas/StrengthArea'

const UserThreatsAreas = () => {
  return (
    <>
      <CriticalArea />
      <ImportantArea />
      <StrengthArea />
      {/* <ImportantArea />
      <StrengthArea /> */}
    </>
  )
}

export default UserThreatsAreas
