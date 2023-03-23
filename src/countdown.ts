import { events } from './events.js'
import { isDev, zeroPad } from './utils.js'

export class Countdown {
  private minutes: number
  private seconds: number

  reset() {
    // 00:10 / 01:36
    this.minutes = isDev ? 0 : 1
    this.seconds = isDev ? 10 : 36
  }

  tick(): void {
    this.seconds--
    if (this.seconds < 0) {
      this.minutes--
      this.seconds = 59
    }

    if (this.minutes < 0) {
      this.minutes = 0
      this.seconds = 0
      events.emit('timer_end')
    }

    const time = `${zeroPad(this.minutes)}:${zeroPad(this.seconds)}`
    events.emit('overlay_set_time', time)
  }
}
