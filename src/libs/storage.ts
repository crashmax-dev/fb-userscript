import { LocalStorage } from '@zero-dependency/storage'

export interface Time {
  minutes: number
  seconds: number
}

export interface Position {
  x: number
  y: number
}

export interface StorageData {
  time: Time
  position: Position
}

class Storage {
  private readonly initialData: StorageData = {
    time: {
      minutes: 1,
      seconds: 35
    },
    position: {
      x: 0,
      y: 0
    }
  }

  private readonly storage = new LocalStorage<StorageData>(
    'fb-userscript',
    this.initialData
  )

  get data() {
    return this.storage.values
  }

  getByKey<T extends keyof StorageData>(key: T): StorageData[T] {
    return this.data[key]
  }

  write(callback: (prevValue: StorageData) => StorageData) {
    this.storage.write(callback)
  }

  reset() {
    this.storage.reset()
  }
}

export const store = new Storage()
