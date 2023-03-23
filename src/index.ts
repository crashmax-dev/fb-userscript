import { Clicker } from './clicker.js'
import { events } from './events.js'
import { Overlay } from './overlay.js'
import { Timer } from './timer.js'
import './styles.scss'

export class App {
  private overlay: Overlay
  private timer: Timer
  private clicker: Clicker

  constructor() {
    this.overlay = new Overlay()
    this.overlay.mount()

    this.clicker = new Clicker()
    this.clicker.mount()

    this.timer = new Timer()

    events.on('timer_start', () => {
      console.log('timer_start')
      this.timer.start()
      this.overlay.timerStarted()
    })

    events.on('timer_end', () => {
      console.log('timer_end')
      this.timer.stop()
      this.overlay.timerEnded()
    })

    events.on('timer_reset', () => {
      console.log('timer_reset')
      this.timer.reset()
      this.overlay.timerStarted()
      this.clicker.unmount()
      this.clicker.mount()
    })

    events.on('overlay_set_time', (currentTime) => {
      this.overlay.setTime(currentTime)
    })
  }
}

const app = new App()
