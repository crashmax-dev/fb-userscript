import { observeElement } from '@zero-dependency/dom'
import { events } from './events.js'

export class Clicker {
  private submitButtonObserver: MutationObserver | null

  private addButtonObserver(button: HTMLElement): void {
    this.submitButtonObserver = observeElement(
      button,
      (mutation) => {
        const currentButton = mutation.target as HTMLElement
        const isDisabled = currentButton.ariaDisabled === 'true'
        if (isDisabled) return
        currentButton.click()
        events.emit('timer_end')
        this.unmount()
      },
      { attributes: true }
    )
  }

  mount(): void {
    observeElement(document.body, (_, observer) => {
      if (this.submitButtonObserver) return

      const xpathResult = document.evaluate(
        "//div[contains(text(), 'Submit')]",
        document,
        null,
        XPathResult.ANY_TYPE,
        null
      )

      const node = xpathResult.iterateNext()
      if (!node) return

      const button = node.parentNode?.parentNode?.parentElement
      if (button && button.ariaLabel === 'Submit') {
        this.addButtonObserver(button)
        events.emit('timer_start')
      }
    })
  }

  unmount(): void {
    if (this.submitButtonObserver) {
      this.submitButtonObserver.disconnect()
      this.submitButtonObserver = null
    }
  }
}
