import { MealType } from "../../../utils/MealType";

export class Meal {
  id: number;
  name: string;
  pricePerPerson: number;
  mealType: MealType;

  constructor(id: number, name: string, pricePerPerson: number, mealType: MealType) {
    this.id = id;
    this.name = name;
    this.pricePerPerson = pricePerPerson;
    this.mealType = mealType;
  }
}

