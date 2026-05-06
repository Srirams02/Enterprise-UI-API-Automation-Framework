import { test, expect } from '@playwright/test';

test('Delete Booking API',
async ({ request }) => {

    // CREATE BOOKING

    const createResponse =
        await request.post(
            'https://restful-booker.herokuapp.com/booking',
            {
                data: {

                    firstname: 'Delete',

                    lastname: 'User',

                    totalprice: 100,

                    depositpaid: true,

                    bookingdates: {

                        checkin: '2025-01-01',

                        checkout: '2025-01-05'
                    },

                    additionalneeds: 'Dinner'
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

    // DELETE BOOKING

    const deleteResponse =
        await request.delete(
            `https://restful-booker.herokuapp.com/booking/${bookingId}`,
            {
                headers: {

                    Cookie: `token=${token}`,

                    Accept: 'application/json'
                }
            }
        );

    expect(
        [201, 405]
    ).toContain(deleteResponse.status());
});