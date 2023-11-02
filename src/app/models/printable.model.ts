<<<<<<< HEAD
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
=======
import {Filament} from "./filament.model";

export interface Printable {
  id: number
  name: string
  gCode_filename: string
  duration: number
  filament_weight: number
  filament_length: number
  filament_costs: number
  power_costs: number
  filament: Filament
>>>>>>> 20643e8 (establish filament model with form and list component)

}
