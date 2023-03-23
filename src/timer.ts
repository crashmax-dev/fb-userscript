import * as workerTimers from 'worker-timers'
import { Countdown } from './countdown.js'

export class Timer {
  private interval: number | null
  private readonly countdown = new Countdown()

  reset(): void {
    this.stop()
    this.start()
  }

  start(): void {
    this.countdown.reset()
    this.interval = workerTimers.setInterval(() => {
      this.countdown.tick()
    }, 1000)
  }

  stop(): void {
    if (!this.interval) return
    workerTimers.clearInterval(this.interval)
    this.interval = null
  }
}
