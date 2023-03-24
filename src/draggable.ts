import { el } from '@zero-dependency/dom'
import { Interact } from '@zero-dependency/interact'
import { LocalStorage } from '@zero-dependency/storage'

export class Draggable {
  el: HTMLElement

  private interact: Interact
  private store = new LocalStorage('overlay-position', { x: 0, y: 0 })

  mount(target: HTMLElement): void {
    this.el = el(
      'div',
      {
        className: 'overlay'
      },
      target
    )

    this.interact = new Interact(target, {
      constrain: true,
      relativeTo: this.el,
      handle: target,
      onMouseUp: (el) => {
        const { x, y } = el.getBoundingClientRect()
        this.store.write({ x, y })
      }
    })

    const { x, y } = this.store.values
    this.interact.changePosition(x, y)
    document.body.appendChild(this.el)
  }
}
