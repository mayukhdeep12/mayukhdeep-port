 import { Leva } from 'leva'
import useDebug from '@/api/store'

function LevaGui() {
  const isDebug = useDebug(state => state.isDebug)

  return <Leva hideCopyButton collapsed hidden={true} titleBar={{ title: import.meta.env.VITE_NICK_NAME }} />
}

export default LevaGui
