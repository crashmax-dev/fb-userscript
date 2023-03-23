export function zeroPad(num: number): string {
  return num.toString().padStart(2, '0')
}

export const isDev = import.meta.env.MODE === 'development'
