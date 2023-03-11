export type QueryParamArray = string[];

export type QueryParams = {
    ingredients?: QueryParamArray | undefined,
    types?: QueryParamArray | undefined
};

export function buildQuery(params: QueryParams): string {
    let query = '?';
    
    const ingsQuery = buildQueryFromArray('ings', params.ingredients);
    const typesQuery = buildQueryFromArray('types', params.types);
    
    if (ingsQuery && typesQuery) {
        return `?${[ingsQuery, typesQuery].join('&')}`;
    }
    
    if (ingsQuery) {
        query += ingsQuery;
    }
    
    if (typesQuery) {
        query += typesQuery;
    }
    
    return query;
}

function buildQueryFromArray(param: string, elements?: string[] | undefined): string {
    if (!elements?.length) {
        return '';
    }
    
    return `${param}=${elements.join(`&${param}=`)}`;
}

export function buildPathWithQuery(page: string, query: string) {
    return `/${page}${query}`;
}