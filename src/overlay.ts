import { el } from '@zero-dependency/dom'
import { Interact } from '@zero-dependency/interact'
import { LocalStorage } from '@zero-dependency/storage'
import { events } from './events.js'

export class Overlay {
  private el: HTMLElement
  private modal: HTMLDivElement
  private container: HTMLDivElement
  private interact: Interact
  private store = new LocalStorage('modal-position', { x: 0, y: 0 })

  mount(): void {
    this.container = el('div', {
      className: 'modal-container'
    })

    this.modal = el('div', {
      className: 'modal',
      onauxclick: (event: Event) => {
        event.preventDefault()
        events.emit('timer_reset')
      },
      oncontextmenu: (event: Event) => {
        event.preventDefault()
      }
    }, this.container)

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
    document.body.appendChild(this.el)
  }

  setTime(currentTime: string): void {
    this.container.textContent = currentTime
  }

  timerEnded() {
    this.modal.classList.add('timer-ended')
  }

  timerStarted() {
    this.modal.classList.remove('timer-ended')
  }
}
