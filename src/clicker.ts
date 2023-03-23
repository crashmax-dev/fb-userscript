import { observeElement } from '@zero-dependency/dom'
import * as workerTimers from 'worker-timers'
import { events } from './events.js'

export class Clicker {
  private observer: MutationObserver | null
  private interval: number | null
  private submitButton: HTMLElement | null

  mount(): void {
    this.observer = observeElement(document.body, (_, observer) => {
      const xpathResult = document.evaluate(
        "//div[contains(text(), 'Submit')]",
        document,
        null,
        XPathResult.ANY_TYPE,
        null
      )

      const node = xpathResult.iterateNext()
      if (!node) return

      const submitButton = node.parentNode?.parentNode?.parentElement
      if (submitButton && submitButton.ariaLabel === 'Submit') {
        this.submitButton = submitButton
        const isDisabled = Boolean(submitButton.ariaDisabled)
        if (isDisabled) {
          events.emit('timer_start')
        }
        observer.disconnect()
      }
    })
  }

  unmount(): void {
    if (this.interval) {
      workerTimers.clearInterval(this.interval)
      this.interval = null
    }
    this.submitButton = null

    if (this.observer) {
      this.observer.disconnect()
      this.observer = null
    }
  }

  retryClick(): void {
    this.interval = workerTimers.setInterval(() => {
      if (!this.submitButton) return
      this.submitButton.click()
    }, 100)
  }
}
