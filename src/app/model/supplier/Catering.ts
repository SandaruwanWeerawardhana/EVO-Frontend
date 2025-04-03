import { Meal } from "./Meal";

export class Catering {
  cateringId: number;
  isAvailable: boolean;
  meals: Meal[];

  constructor(cateringId: number, isAvailable: boolean, meals: Meal[]) {
    this.cateringId = cateringId;
    this.isAvailable = isAvailable;
    this.meals = meals;
  }
}
