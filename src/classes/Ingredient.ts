import Category from '../constants/categories';
import Icon from './Icon';

class IngredientStaticData {
    private static _lastIndex = 0;

    public static getNewIndex(): number {
        return this._lastIndex++;
    }

    public static getIndex(): number {
        return this._lastIndex;
    }
}

export default class Ingredient {
    private id: number;

    constructor(
        private readonly category: Category,
        private readonly icon: Icon,
        private readonly name: string
    ) {
        this.id = IngredientStaticData.getNewIndex();
    }

    getCategory(): Category {
        return this.category;
    }

    getIcon(): Icon {
        return this.icon;
    }

    getName(): string {
        return this.name;
    }

    getId(): number {
        return this.id;
    }
}