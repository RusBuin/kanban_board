import {EnumStatus} from "../../types/deals.types";


export interface ICard {
    id: string
    name: string
    status: string
}

export interface IColumn {
    id: EnumStatus
    name: string
    items: ICard[]
}
