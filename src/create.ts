import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    // const createUser = await prisma.user.create({
    //     data: {
    //         username: "user2",
    //         email: "user2@ph.com",
    //         role: UserRole.user
    //     }
    // });
    // console.log(createUser);

    // const createProfile = await prisma.profile.create({
    //     data: {
    //         bio: "this is bio...",
    //         userId: 1
    //     }
    // })
    // console.log(createProfile);

    // const createCategory = await prisma.category.create({
    //     data: {
    //         name: "web dev"
    //     }
    // })
    // console.log(createCategory);

    const createPost = await prisma.post.create({
        data: {
            title: "this is title 5",
            content: "this is content of the post. 5",
            authorId: 1,
            postCategory: {
                create: [
                    // {
                    //     category: {
                    //         connect: {
                    //             id: 1
                    //         }
                    //     }
                    // },
                    {
                        categoryId: 3
                    },
                    {
                        categoryId: 4
                    }
                ]
            }
        },
        include: {
            postCategory: true
        }
    })
    console.log(createPost)
}

main();