import { events } from './events.js'
import { isDev, zeroPad } from './utils.js'

export class Countdown {
  private minutes: number
  private seconds: number

  get time(): string {
    return `${zeroPad(this.minutes)}:${zeroPad(this.seconds)}`
  }

  reset(): void {
    // 00:5 / 01:36
    this.minutes = isDev ? 0 : 1
    this.seconds = isDev ? 4 : 36
  }

  tick(): void {
    this.seconds--

    if (this.minutes > 0 && this.seconds < 0) {
      this.seconds = 59
      this.minutes--
    }

    if (this.minutes === 0 && this.seconds === 0) {
      events.emit('timer_end')
    }

    events.emit('overlay_set_time', this.time)
  }
}
