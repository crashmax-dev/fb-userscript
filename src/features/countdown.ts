import { clearInterval, setInterval } from 'worker-timers'
import { events } from '../libs/events.js'
import type { Time } from '../libs/storage.js'

export class Countdown {
  private interval: number | null
  private time: Time

  start(time: Time): void {
    this.stop()
    this.time = time
    this.interval = setInterval(() => this.tick(), 1000)
  }

  stop(): void {
    if (!this.interval) return
    clearInterval(this.interval)
    this.interval = null
  }

  private tick(): void {
    this.time.seconds--

    if (this.time.minutes > 0 && this.time.seconds < 0) {
      this.time.seconds = 59
      this.time.minutes--
    }

    events.emit('timer_tick', this.time)

    if (this.time.minutes === 0 && this.time.seconds === 0) {
      events.emit('timer_stop')
    }
  }
}
