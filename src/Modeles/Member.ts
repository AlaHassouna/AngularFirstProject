import { Evt } from "./Evt"

export interface Member{
    id:string,
    cin: string,
    name: string,
    type: string,
    createdDate: string,
    tab_evt:Evt[]
}