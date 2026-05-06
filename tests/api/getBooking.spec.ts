import { test, expect } from '@playwright/test';

test('Get Booking API',
async ({ request }) => {

    const response =
        await request.get(
            'https://restful-booker.herokuapp.com/booking'
        );

    expect(response.status())
        .toBe(200);

    const responseBody =
        await response.json();

    expect(responseBody.length)
        .toBeGreaterThan(0);
});