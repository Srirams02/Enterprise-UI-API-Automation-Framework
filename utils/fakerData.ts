import { faker } from '@faker-js/faker';

export class FakerData {

    static firstName() {

        return faker.person.firstName();
    }

    static lastName() {

        return faker.person.lastName();
    }

    static email() {

        return faker.internet.email();
    }
}