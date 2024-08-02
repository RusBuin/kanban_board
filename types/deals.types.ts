export interface IBaseField {
    $id: string
}


export enum EnumStatus {
    'new' = 'new',
    'processing' = 'processing',
    'done' = 'done',
}

export interface IDeal extends IBaseField {
    name: string
    status: EnumStatus
}
