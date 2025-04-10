import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    const createMany = await prisma.post.createMany({
        data: [
            {
                title: "Title 1",
                content: "Content 1",
                authorName: "Author 1"
            },
            {
                title: "Title 2",
                content: "Content 2",
                authorName: "Author 2"
            },
            {
                title: "Title 3",
                content: "Content 3",
                authorName: "Author 3"
            }
        ]
    })
    console.log('createMany :', createMany);
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user2",
    //         email: "user2@ph.com",
    //         role: UserRole.user
    //     }
    // });

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio...",
    //         userId: 1
    //     }
    // })

    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "software engineering"
    //     }
    // })

    // const createPost = await prisma.post.create({
    //     data: {
    //         title: "this is title 5",
    //         content: "this is content of the post. 5",
    //         authorId: 3,
    //         postCategory: {
    //             create: [
    //                 {
    //                     categoryId: 1
    //                 },
    //                 {
    //                     categoryId: 3
    //                 },
    //                 {
    //                     categoryId: 4
    //                 }
    //             ]
    //         }
    //     },
    //     include: {
    //         postCategory: true
    //     }
    // })
    // console.log(createPost)
}

main();