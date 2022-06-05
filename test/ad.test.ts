import {AdRecord} from "../records/ad-record";
import {pool} from "../utils/db";
afterAll(async () => {
    await pool.end();
})


const defaultObj = {
    id:'',
    name: 'Obj to check xD ',
    price: 444,
    lat: 49.6827182,
    lon: 20.3323506,
    url: 'www.google.pl',
    description: "sampler description"
}



test("AdRecords returns data from database for one entry", async () => {
    const ad = await AdRecord.getOne('abc-def');
    expect(ad).toBeDefined();
    expect(ad.id).toBeDefined();
    expect(ad.name).toBeDefined();

})

test("Addrecords returns null for non existing entry ", async () => {
    const ad = await AdRecord.getOne('abc');
    expect(ad).toBeNull();
})


// test("AdRecord.addOne new record item to database ", async () => {
//     const example = {
//
//     }
//     const addNewItem = await AdRecord.insertOne()
//     expect(addNewItem).toBeDefined();
//     expect(addNewItem).not.toBeNull();
//     expect(typeof addNewItem === "string");
//
// })
test("AdRecord.findALl new record item to database ", async () => {
    const allItems = await AdRecord.findAll('test');
    console.log(allItems)
    expect(allItems[0].id).toBeDefined();
    expect(allItems[0].id).not.toBeNull();


})


test("insert a new item ", async ()=>{
    const Item = new AdRecord(defaultObj)
   await Item.insertOne()
})

