import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const purgeNotes = prisma.note.deleteMany();
  const purgeTodos = prisma.task.deleteMany();
  const purgeUsers = prisma.user.deleteMany();

  const seedUser = prisma.user.create({
    data: {
      email: "me@aidhan.net",
      name: "Aidhan",
      units: {
        createMany: {
          data: [
            {
              code: "COMP1000",
              name: "Introduction to Computer Science",
            },
            {
              code: "COMP1001",
              name: "Introduction to Programming",
            },
            {
              code: "COMP1002",
              name: "Introduction to Web Development",
            },
          ],
        },
      },
      notes: {
        createMany: {
          data: [
            {
              name: "Note 1",
              content: "This is my first note",
            },
            {
              name: "Note 2",
              content: "This is my second note",
            },
            {
              name: "Note 3",
              content: "This is my third note",
            },
          ],
        },
      },
      tasks: {
        createMany: {
          data: [
            {
              name: "Item 1",
            },
            {
              name: "Item 2",
            },
          ],
        },
      },
    },
  });

  await prisma.$transaction([purgeNotes, purgeTodos, purgeUsers]).then(() => {
    console.log("Purged users and notes");
  });

  return await prisma.$transaction([seedUser]);
}

console.log("Seeding database...");
main().then((output) => {
  console.log(output);
  console.log("Database seeded!");
  prisma.$disconnect();
});
