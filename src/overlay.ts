import { el } from '@zero-dependency/dom'
import { Interact } from '@zero-dependency/interact'
import { LocalStorage } from '@zero-dependency/storage'
import { events } from './events.js'

export class Overlay {
  private el: HTMLElement
  private widget: HTMLDivElement
  private container: HTMLDivElement
  private time: HTMLTimeElement
  private interact: Interact
  private store = new LocalStorage('widget-position', { x: 0, y: 0 })

  mount(): void {
    this.time = el('time')
    this.container = el(
      'div',
      {
        className: 'widget-container'
      },
      this.time
    )

    this.widget = el(
      'div',
      {
        className: 'widget',
        onmouseenter: () => {
          this.el.classList.add('moved')
        },
        onmouseleave: () => {
          this.el.classList.remove('moved')
        },
        onauxclick: (event: Event) => {
          event.preventDefault()
          events.emit('timer_reset')
        },
        oncontextmenu: (event: Event) => {
          event.preventDefault()
        }
      },
      this.container
    )

    this.el = el(
      'div',
      {
        className: 'overlay'
      },
      this.widget
    )

    this.interact = new Interact(this.widget, {
      constrain: true,
      relativeTo: this.el,
      handle: this.widget,
      onMouseUp: (el) => {
        const { x, y } = el.getBoundingClientRect()
        this.store.write({ x, y })
      }
    })

    const { x, y } = this.store.values
    this.interact.changePosition(x, y)
    this.timerIndle()
    document.body.appendChild(this.el)
  }

  setTime(currentTime: string): void {
    this.time.textContent = currentTime
  }

  timerIndle(): void {
    this.setTime('IDLE')
    this.widget.classList.add('timer-idle')
  }

  timerEnded() {
    this.widget.classList.add('timer-ended')
  }

  timerStarted() {
    this.widget.classList.remove('timer-idle')
    this.widget.classList.remove('timer-ended')
  }
}
