import {AdRecord} from "../records/ad-record";


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


// test("add new record item to database ", async () => {
//     const newMark = await AdRecord.addOne("xxx-xxx", "test", "test description", 0, "www.google.pl", 49.6827182, 20.3323506)
//
// })

test("add new record item to database ", async () => {
    const newMark = await AdRecord.addOne( "test2", "test description", 0, "www.google.pl", 49.6827182, 20.3323506)

})

