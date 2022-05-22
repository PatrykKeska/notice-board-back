export interface NewAdEntity extends Omit<AdEntity, 'id'> {
    id?: string;
}


export interface SimpleAddEntity {
    id: string;
    lat: number;
    lon: number;

}


export interface AdEntity extends SimpleAddEntity {
    name: string;
    price: number;
    description: string;
    url: string;
    lat: number;
    lon: number;

}




