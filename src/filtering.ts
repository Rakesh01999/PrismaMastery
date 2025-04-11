import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


const filtering = async () => {
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: "title"
                    }
                },
                {
                    published: true
                }
            ]
        }
    });
    console.dir(andFiltering, { depth: Infinity })
    
    const orFiltering = await prisma.post.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: "title"
                    }
                },
                {
                    published: true
                }
            ]
        }
    });
    console.dir(orFiltering, { depth: Infinity })
    
    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: {
                        contains: "this"
                    }
                }
            ]
        }
    });
    console.dir(notFiltering, { depth: Infinity })
    
    const startsWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: 'user1@ph.com' // endsWith, contains, equals
            }
        }
    });
    console.dir(startsWith, { depth: Infinity })
    
    const userNameArray = ['user1', 'user2', 'user5'];

    const userNamesByArray = await prisma.user.findMany({
        where: {
            username: {
                in: userNameArray
            }
        }
    });
    console.dir(userNamesByArray, { depth: Infinity })
    
    const inDepthData = await prisma.user.findUnique({
        where: {
            id: 3
        },
        include: {
            post: {
                include: {
                    postCategory: {
                        include: {
                            category: true
                        }
                    }
                }
            }
        }
    })

    console.dir(inDepthData, { depth: Infinity })

};

filtering();