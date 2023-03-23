import { el } from '@zero-dependency/dom'
import { Interact } from '@zero-dependency/interact'
import { LocalStorage } from '@zero-dependency/storage'
import { events } from './events.js'

export class Overlay {
  private el: HTMLElement
  private modal: HTMLDivElement
  private container: HTMLDivElement
  private time: HTMLTimeElement
  private interact: Interact
  private store = new LocalStorage('modal-position', { x: 0, y: 0 })

  mount(): void {
    this.time = el('time')
    this.container = el(
      'div',
      {
        className: 'modal-container'
      },
      this.time
    )

    this.modal = el(
      'div',
      {
        className: 'modal',
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
      this.modal
    )

    this.interact = new Interact(this.modal, {
      constrain: true,
      relativeTo: this.el,
      handle: this.modal,
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
    this.modal.classList.add('timer-idle')
  }

  timerEnded() {
    this.modal.classList.add('timer-ended')
  }

  timerStarted() {
    this.modal.classList.remove('timer-idle')
    this.modal.classList.remove('timer-ended')
  }
}
