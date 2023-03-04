export function buildQuery(ingredients: string[] | undefined): string {
    if (!ingredients) {
        return '';   
    }
    
    const variable = 'ings=';
    const query = `?${variable}${ingredients.join(`&${variable}`)}`;
    
    return query;
}

export function buildPathWithQuery(page: string, query: string) {
    return `/${page}${query}`;
}