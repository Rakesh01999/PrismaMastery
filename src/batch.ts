import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransaction = async () => {
    const createUser = prisma.user.create({
        data: {
            username: "jhankar",
            email: "jkr@ph.com"
        }
    });
console.log("create user:",createUser)

    const updateUser = prisma.user.update({
        where: {
            // id: 8
            id: 2
        },
        data: {
            age: 43
        }
    });

    const [userData, updateData] = await prisma.$transaction([
        createUser,
        updateUser
    ]);

    console.log(userData, updateData);
};

batchTransaction();