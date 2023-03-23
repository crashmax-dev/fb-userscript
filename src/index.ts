import { Overlay } from './overlay.js'
import { Timer } from './timer.js'
import { events } from './events.js'
import './styles.scss'

export class App {
  private overlay: Overlay
  private timer: Timer

  constructor() {
    this.overlay = new Overlay()
    this.timer = new Timer()
    this.overlay.mount()

    events.on('timer_reset', () => this.timer.reset())
    events.on('timer_start', () => this.overlay.timerStarted())
    events.on('timer_end', () => this.overlay.timerEnded())
    events.on('overlay_set_time', (currentTime) =>
      this.overlay.setTime(currentTime)
    )
  }
}

const app = new App()
