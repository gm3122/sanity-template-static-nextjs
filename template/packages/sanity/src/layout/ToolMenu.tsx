import StateButton from 'part:@sanity/components/buttons/state'
import { Tooltip } from 'part:@sanity/components/tooltip'

import { LegacyLayerProvider } from '@sanity/base/components'
import styles from '@sanity/default-layout/lib/navbar/toolMenu/ToolMenu.css'
import { Router, Tool } from '@sanity/default-layout/lib/types'

interface Props {
  activeToolName: string
  direction: 'horizontal' | 'vertical'
  isVisible: boolean
  onSwitchTool: () => void
  router: Router
  showLabel?: boolean
  tone?: 'navbar'
  tools: Tool[]
}

const TOUCH_DEVICE = 'ontouchstart' in document.documentElement

function ToolMenu(props: Props) {
  const { activeToolName, direction, isVisible, onSwitchTool, router, tools, showLabel: showLabelProp, tone } = props
  const isVertical = direction === 'horizontal'
  const showLabel = (TOUCH_DEVICE && !isVertical) || showLabelProp

  return (
    <ul className={styles.root} data-direction={direction} data-tone="navbar">
      {tools
        .filter((tool) => tool.name !== 'dashboard')
        .map((tool) => {
          const title = tool.title || tool.name || undefined
          const tooltipContent = <span className={styles.tooltipContent}>{title}</span>

          return (
            <li key={tool.name}>
              <LegacyLayerProvider zOffset="navbarPopover">
                <Tooltip
                  content={tooltipContent as any}
                  disabled={showLabel}
                  placement="bottom"
                  title={showLabel ? '' : title}
                  tone={tone}
                >
                  <div>
                    <StateButton
                      icon={tool.icon}
                      key={tool.name}
                      kind="simple"
                      onClick={onSwitchTool}
                      padding={direction === 'horizontal' ? 'small' : 'medium'}
                      selected={activeToolName === tool.name}
                      state={{ ...router.state, tool: tool.name, [tool.name]: undefined }}
                      tabIndex={isVisible ? 0 : -1}
                      title={title}
                      tone={tone}
                    >
                      {tool.title}
                    </StateButton>
                  </div>
                </Tooltip>
              </LegacyLayerProvider>
            </li>
          )
        })}
    </ul>
  )
}

export default ToolMenu
