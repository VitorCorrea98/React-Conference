import { faker } from '@faker-js/faker';

function useRandomSpeaker() {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const email = (faker.internet.email, [
    firstName,
    lastName,
  ]);

  return {
    _id: faker.string.uuid(),
    avatar: faker.image.avatar(),
    birthday: faker.date.birthdate(),
    email,
    firstName,
    lastName,
    sex,
  };
}

export default useRandomSpeaker;
