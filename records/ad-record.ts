import {AdEntity} from "../types";
import {ValidationError} from "../utils/errors";

interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string;
}

export class AdRecord implements AdEntity {
    public id: string;
    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;

    constructor(obj: NewAdEntity) {
        if (!obj.name || obj.name.length > 100) {
            throw new ValidationError("Name of advertisement can't be longer than 100 characters")
        }
        if (obj.description.length > 1000) {
            throw new ValidationError("Description can't be longer than 1000 characters")
        }
        if (obj.price < 0 || obj.price > 9999999) {
            throw new ValidationError("Price can't be higher than 9 999 999 and lower than 0  ")
        }
        if (obj.url.length < 0 || obj.url.length > 100) {
            throw new ValidationError("Url can't be longer than 100  and lower than 0 characters  ")
        }
        if (typeof obj.lat !== 'number' || typeof obj.lon !== 'number') {
            throw new ValidationError("Your offer can not be localized")
        }
        this.name = obj.name
        this.description = obj.description
        this.price = obj.price
        this.url = obj.url
        this.lat = obj.lat
        this.lon = obj.lon

    }

}