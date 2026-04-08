import { test, request, expect } from "@playwright/test";


let reqContexts;

test.beforeAll("Before All the test", async () => {
   reqContexts = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
    extraHTTPHeaders: {
      Accept:"application/json"
    }
  });
});

test("API Testing Get practice 1", async ({ request }) => {
  const resOne = await request.get("https://restful-booker.herokuapp.com/booking",{
    headers:{
      Accept:"application/json"
    }
  });
  console.log(await resOne.json());
});

test("API Testing GET prctice 2", async () => {
  const reqContext = await request.newContext({
    baseURL: "https://restful-booker.herokuapp.com",
  extraHTTPHeaders: {
     Accept:"application/json"
  }
  });
  const resOne = await reqContext.get("/booking");
  console.log(await resOne.json());
});

//Using Before All//
test("API Testing Get practice 3", async () => {
  const resOne = await reqContexts.get("/booking",);
  console.log(await resOne.json());
});

//Using config file
test("API Testing Get practice 4", async ({request}) => {
  const resOne = await request.get("/booking");
  console.log(await resOne.json());
});

test("API Testing Get practice 5", async ({request}) => {
  const resOne = await request.get("/booking/2402");
  console.log(await resOne.json());
});

//Using Quary paramater
test("API Testing Get practice 6", async ({request}) => {
  const resOne = await request.get("/booking?firstname=John&lastname=Smith");
  console.log(await resOne.json());
});

test("API Testing Get practice 7", async ({request}) => {
  const resOne = await request.get("/booking",{
    params: {
      firstname: "John",
      lastname: "Smith"
    }
  });
  console.log(await resOne.json());
});

//Using Assertions
test("API Testing Get practice 8", async ({request}) => {
  const resOne = await request.get("/booking/16");
  console.log(await resOne.json());
  expect(resOne.status()).toBe(200);
  expect(resOne.ok()).toBeTruthy();
  expect (await resOne.json()).toMatchObject({
  firstname: 'Josh',
  lastname: 'Allen',
  totalprice: 111,
  depositpaid: true,
  bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
  additionalneeds: 'midnight snack'
})
const jsonres = await resOne.json();
expect (jsonres.firstname).toEqual(Josh);
});

test("API with UI verification", async({request,page}) => {
  const res2 = await request.get("https://api.demoblaze.com/entries");
  const jsonres2 = await res2.json();
  console.log(jsonres2.Items[0].title);
  await page.goto("https://www.demoblaze.com/");
  await expect(page.getByRole('link', {name:'Samsung galaxy s6'})).toHaveText(jsonres2.Items[0].title);
});
