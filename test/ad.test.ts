import {AdRecord} from "../records/ad-record";
import {pool} from "../utils/db";

afterAll(async () => {
    await pool.end();
})
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


test("AdRecord.addOne new record item to database ", async () => {
    const addNewItem = await AdRecord.addOne("test2", "test description", 0, "www.google.pl", 49.6827182, 20.3323506)

})
test("AdRecord.findALl new record item to database ", async () => {
    const allItems = await AdRecord.findAll('test');
    console.log(allItems)
    expect(allItems[0].id).toBeDefined();


})

