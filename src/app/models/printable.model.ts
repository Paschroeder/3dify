export interface Printable {
  id: number
  name: string
  gCodeFilename: string
  printStart: Date
  printEnd: Date
  duration: number
  filamentWeight: number
  filamentLength: number
  filamentCosts: number
  powerCosts: number

}
