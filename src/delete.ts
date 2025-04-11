import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const deleteData = async () => {
    const singleDelete = await prisma.user.delete({
        where: {
            id: 2
        }
    });
    console.log(singleDelete);

    // const deleteMany = await prisma.post.deleteMany({})

    // console.log(deleteMany);
};

deleteData();