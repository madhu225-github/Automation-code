import { expect, test } from "@playwright/test";


test("API Testing-Post call 1", async ({ request }) => {
  const resOne = await request.post("/booking", {
    data: {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01",
      },
      additionalneeds: "Breakfast",
    },
  });
  const resJson = await resOne.json();
  console.log(resJson);
  //expect(resOne.status()).toBe(200);
  //expect(resOne.statusText()).toBe("OK");
  //expect(resOne.ok()).toBeTruthy();
//   expect(resJson.booking).toMatchObject({
//     firstname: "Jim",
//     lastname: "Brown",
//     totalprice: 111,
//     depositpaid: true,
//     bookingdates: { checkin: "2018-01-01", checkout: "2019-01-01" },
//     additionalneeds: "Breakfast",
//   });
  expect(resJson.booking.additionalneeds).toEqual("Breakfast");
});

test('validate API and UI',async({request,page}) => {
const res2 = await request.post("https://api.demoblaze.com/addtocart",{
    data: {"id":"ab1bc0e3-1e09-b625-4b17-855f18d66a16","cookie":"user=4f674f2b-8f63-4c0d-f66d-a7b44f24b351","prod_id":3,"flag":false}
});
await page.goto("https://www.demoblaze.com/");
expect(res2.status()).toBe(200);
});
