import { Emitter } from '@zero-dependency/emitter'

type Events = {
  timer_start: () => void
  timer_end: () => void
  timer_reset: () => void
  overlay_set_time: (currentTime: string) => void
}

export const events = new Emitter<Events>()
