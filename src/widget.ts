import { el } from '@zero-dependency/dom'
import { Draggable } from './draggable.js'
import { events } from './events.js'

export class Widget {
  el: HTMLDivElement

  private time: HTMLTimeElement
  private container: HTMLDivElement
  private draggable: Draggable

  mount(draggable: Draggable): void {
    this.draggable = draggable
    this.time = el('time')
    this.container = el('div', { className: 'widget-container' }, this.time)

    this.el = el(
      'div',
      {
        className: 'widget',
        onmouseenter: () => {
          this.draggable.el.classList.add('moved')
        },
        onmouseleave: () => {
          this.draggable.el.classList.remove('moved')
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

    this.timerIdle()
  }

  setTime(currentTime: string): void {
    this.time.textContent = currentTime
  }

  timerIdle(): void {
    this.setTime('IDLE')
    this.el.classList.add('timer-idle')
  }

  timerEnded(): void {
    this.el.classList.add('timer-ended')
  }

  timerStarted(): void {
    this.el.classList.remove('timer-idle')
    this.el.classList.remove('timer-ended')
  }
}
