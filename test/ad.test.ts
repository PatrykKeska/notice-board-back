import {AdRecord} from "../records/ad-record";


test("AdRecords returns data from database for one entry", async ()=>{
    const ad = await AdRecord.getOne('abc-def');
    expect(ad).toBeDefined();
    expect(ad.id).toBeDefined();
    expect(ad.name).toBeDefined();

})

test("Adrecords returns null for non existing entry ", async ()=>{
    const ad = await AdRecord.getOne('abc');
    expect(ad).toBeNull();
})