import { test, expect } from '@playwright/test';

test('Create Booking API',
async ({ request }) => {

    const response =
        await request.post(
            'https://restful-booker.herokuapp.com/booking',
            {
                data: {

                    firstname: 'Sriram',

                    lastname: 'Playwright',

                    totalprice: 1000,

                    depositpaid: true,

                    bookingdates: {

                        checkin: '2025-01-01',

                        checkout: '2025-01-05'
                    },

                    additionalneeds: 'Breakfast'
                }
            }
        );

    expect(response.status())
        .toBe(200);

    const responseBody =
        await response.json();

    expect(responseBody.bookingid)
        .toBeTruthy();
});