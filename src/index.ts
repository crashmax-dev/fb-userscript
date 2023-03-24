import { Clicker } from './clicker.js'
import { Draggable } from './draggable.js'
import { events } from './events.js'
import { Timer } from './timer.js'
import { Widget } from './widget.js'
import './styles.scss'

export class App {
  private draggable: Draggable
  private widget: Widget
  private timer: Timer
  private clicker: Clicker

  constructor() {
    this.draggable = new Draggable()
    this.widget = new Widget()
    this.widget.mount(this.draggable)
    this.draggable.mount(this.widget.el)

    this.clicker = new Clicker()
    this.clicker.mount()

    this.timer = new Timer()

    events.on('timer_start', () => {
      console.log('timer_start')
      this.timer.start()
      this.widget.timerStarted()
    })

    events.on('timer_end', () => {
      console.log('timer_end')
      this.timer.stop()
      this.widget.timerEnded()
    })

    events.on('timer_reset', () => {
      console.log('timer_reset')
      this.timer.reset()
      this.widget.timerStarted()
      this.clicker.unmount()
      this.clicker.mount()
    })

    events.on('overlay_set_time', (currentTime) => {
      this.widget.setTime(currentTime)
    })
  }
}

const app = new App()
console.log(app)
