import { EnumStatus } from '~/types/deals.types'
import type { IColumn } from './kanban.types'

export const KANBAN_DATA: IColumn[] = [
    {
        id: EnumStatus.new,
        name: 'New',
        items: [],
    },
    {
        id: EnumStatus.processing,
        name: 'Processing',
        items: [],
    },
    {
        id: EnumStatus.done,
        name: 'Done',
        items: [],
    },
]
