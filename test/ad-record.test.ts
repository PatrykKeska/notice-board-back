import {AdRecord} from "../records/ad-record";
import exp from "constants";


const defaultObj = {
    name: "sample notice on board",
    price: 4,
    id: "das;l'dka12314",
    lat: 123312,
    lon: 2132414,
    url: 'www.google.pl',
    description: "sampler description"
}
test("can build AdRecord", () => {
    const ad = new AdRecord(defaultObj);
    expect(ad.name).toBe("sample notice on board")

})

test("Validates invalid price", () => {
    expect(() => new AdRecord({
        ...defaultObj,
        price: -10,
    })).toThrow("Price can't be higher than 9 999 999 and lower than 0  ")
})