import { useQuery } from '@tanstack/vue-query'
import { COLLECTION_DEALS, DB_ID } from '~/app.constants'
import type { IDeal } from '~/types/deals.types'
import { KANBAN_DATA } from './kanban.data'
import type { IColumn } from './kanban.types'

export function useKanbanQuery() {
    return useQuery({
        queryKey: ['deals'],
        queryFn: async () => {
            const data = await DB.listDocuments(DB_ID, COLLECTION_DEALS);
            return data;
        },
        select(data) {
            const newBoard: IColumn[] = KANBAN_DATA.map(column => ({
                ...column,
                items: [],
            }))
            const deals = data.documents as unknown as IDeal[];

            for (const deal of deals) {
                const column = newBoard.find(col => col.id === deal.status);
                if (column) {
                    column.items.push({
                        id: deal.$id,
                        name: deal.name,
                        status: column.name,
                    });
                }
            }
            return newBoard;
        },
    })
}
