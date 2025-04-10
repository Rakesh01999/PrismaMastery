import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // find all
    const getAllFromDB = await prisma.post.findMany({
        select: {
            authorName: true
        }
    });

    console.log("Get all data: ", getAllFromDB);

    // find first and find first or throw error
    const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            published: false
        }
    });
    console.log("findFirst: ", findFirst);


    // find unique and find unique or throw error
    const findUnique = await prisma.post.findUniqueOrThrow({
        where: {
            // id: 4
            id: 2
        },
        select: {
            title: true,
            // content: true,
            // authorName: true
        }
    })

    console.log({ findUnique })
}

main();