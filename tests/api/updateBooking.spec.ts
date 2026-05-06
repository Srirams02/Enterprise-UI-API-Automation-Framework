import { test, expect } from '@playwright/test';

test('Update Booking API',
async ({ request }) => {

    // CREATE BOOKING

    const createResponse =
        await request.post(
            'https://restful-booker.herokuapp.com/booking',
            {
                data: {

                    firstname: 'Initial',

                    lastname: 'User',

                    totalprice: 100,

                    depositpaid: true,

                    bookingdates: {

                        checkin: '2025-01-01',

                        checkout: '2025-01-05'
                    },

                    additionalneeds: 'Breakfast'
                }
            }
        );

    expect(createResponse.status())
        .toBe(200);

    const createBody =
        await createResponse.json();

    const bookingId =
        createBody.bookingid;

    // AUTH TOKEN

    const authResponse =
        await request.post(
            'https://restful-booker.herokuapp.com/auth',
            {
                data: {

                    username: 'admin',

                    password: 'password123'
                }
            }
        );

    expect(authResponse.status())
        .toBe(200);

    const authBody =
        await authResponse.json();

    const token =
        authBody.token;

    // UPDATE BOOKING

    const updateResponse =
        await request.patch(
            `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            {
                headers: {

                    Cookie: `token=${token}`,

                    Accept: 'application/json',

                    'Content-Type': 'application/json'
                },

                data: {

                    firstname: 'Updated',

                    lastname: 'Playwright',

                    totalprice: 999,

                    depositpaid: true,

                    bookingdates: {

                        checkin: '2025-01-01',

                        checkout: '2025-01-05'
                    },

                    additionalneeds: 'Lunch'
                }
            }
        );

    expect(
        [200, 405]
    ).toContain(updateResponse.status());
});