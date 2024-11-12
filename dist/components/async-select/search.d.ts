declare const search: (params?: {
    q?: string;
    page?: number;
    limit?: number;
}) => Promise<{
    content: Array<{
        name: string;
        description: string;
        actionAt: string;
        remindMe: boolean;
        category?: string;
        createdAt: string;
        updatedAt: string;
        deletedAt: any;
        oid: string;
    }>;
    pageable: {
        pageNumber: number;
        pageSize: number;
        sort: {
            sorted: boolean;
            empty: boolean;
            unsorted: boolean;
        };
        offset: number;
        paged: boolean;
        unpaged: boolean;
    };
    totalPages: number;
    totalElements: number;
    last: boolean;
    size: number;
    number: number;
    sort: {
        sorted: boolean;
        empty: boolean;
        unsorted: boolean;
    };
    numberOfElements: number;
    first: boolean;
    empty: boolean;
}>;
export default search;
