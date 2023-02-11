export function buildQuery(ingredients: string[] | undefined): string {
    if (!ingredients) {
        return '';   
    }
    
    const encoded = encodeURIComponent('ings[]');
    const query = `?${encoded}${ingredients.join(`&${encoded}`)}`;
    
    return query;
}

export function buildPathWithQuery(page: string, query: string) {
    return `/${page}${query}`;
}