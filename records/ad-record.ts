import {AdEntity, NewAdEntity, SimpleAddEntity} from "../types";
import {ValidationError} from "../utils/errors";
import {pool} from "../utils/db";
import {FieldPacket} from "mysql2";
import {v4 as uuid} from "uuid";

const id: string = uuid();


type AdRecordsResults = [AdEntity[], FieldPacket[]];

export class AdRecord implements NewAdEntity {


    public name: string;
    public description: string;
    public price: number;
    public url: string;
    public lat: number;
    public lon: number;
    public id: string


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

        this.id = obj.id;
        this.name = obj.name;
        this.description = obj.description;
        this.price = obj.price;
        this.url = obj.url;
        this.lat = obj.lat;
        this.lon = obj.lon;

    }

    static async getOne(id: string): Promise<AdRecord> | null {
        const [results] = await pool.execute("SELECT * FROM `ads` WHERE id = :id", {
            id,
        }) as AdRecordsResults;
        return results.length === 0 ? null : new AdRecord(results[0]);
    }


    async insertOne(): Promise<string> {
        if (!this.id) {
            this.id = uuid()
        } else {
            throw new ValidationError("Can not insert on existing element!")
        }
        await pool.execute("INSERT INTO `ads` (id,name,description,price,url,lat,lon) VALUES(:id,:name,:description,:price,:url,:lat,:lon)", this)
        return id
    }

    static async findAll(name: string): Promise<SimpleAddEntity[]> {
        const [allItems] = await pool.execute("SELECT * FROM `ads` WHERE `name` LIKE :search", {
            search: `%${name}%`
        }) as AdRecordsResults;
        return allItems.map(results => {
            const {id, lat, lon} = results
            return {id, lat, lon}
        })

    }

}