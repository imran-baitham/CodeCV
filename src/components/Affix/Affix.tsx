import { useWindowScroll } from '@mantine/hooks'
import { Affix, Transition } from '@mantine/core'
import { ReactIcon } from '../ReactIcon/ReactIcon'

function AffixButton() {
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <div
            className="dark:bg-yellow-600 bg-yellow-500 p-1 md:p-2 rounded shadow-2xl"
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            <ReactIcon icon="FiChevronsUp" className="w-7 h-7 text-white" />
          </div>
        )}
      </Transition>
    </Affix>
  )
}
export default AffixButton
