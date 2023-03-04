export enum Type {
    SOUP = 'zupa',
    // FOOD = 'potrawa',
    RAW_SALAD = 'surówka',
    SALAD = 'sałatka',
    SAUCE = 'sos',
}

export default class Meal {
    private relevance: number;
    
    constructor(
        private readonly name: string,
        private readonly type: Type,
        private readonly ingsNames: string[]
    ) {
        this.relevance = 0;
    }

    public getName(): string {
        return this.name;
    }

    public getType(): Type {
        return this.type;
    }

    public getIngredientsNames(): string[] {
        return this.ingsNames;
    }

    public getRelevance(): number {
        return this.relevance ?? 0;
    }

    setRelevance(revelance: number) {
        this.relevance = revelance;
    }

    public format(): void {
        console.log(`Meal "${this.name}".`);
    }
}