import { faker } from "@faker-js/faker";

export const shortedUrls = Array.from({ length: 200 })
  .map((_, index) => ({
    id: faker.number.int({ min: 0, max: 1000 }),
    url: faker.internet.url(),
    shortedUrl: `https://short.url/${faker.internet.url().split("/").pop()}`,
    clicks: faker.number.int({ min: 0, max: 100 }),
    createdAt: faker.date.recent(),
  }))
  .sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  )
  .slice(0, 10)
  .map((url) => ({
    ...url,
    createdAt: new Date(url.createdAt).toLocaleDateString(),
  }));
