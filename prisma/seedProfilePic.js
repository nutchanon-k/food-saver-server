const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();


async function main() {

    for (let i = 0; i < 101; i++) {


        const userData = [
            "https://randomuser.me/api/portraits/men/88.jpg",
            "https://randomuser.me/api/portraits/men/47.jpg",
            "https://randomuser.me/api/portraits/women/17.jpg",
            "https://randomuser.me/api/portraits/women/54.jpg",
            "https://randomuser.me/api/portraits/men/93.jpg",
            "https://randomuser.me/api/portraits/men/59.jpg",
            "https://randomuser.me/api/portraits/women/51.jpg",
            "https://randomuser.me/api/portraits/men/72.jpg",
            "https://randomuser.me/api/portraits/women/71.jpg",
            "https://randomuser.me/api/portraits/men/7.jpg",
            "https://randomuser.me/api/portraits/women/60.jpg",
            "https://randomuser.me/api/portraits/men/62.jpg",
            "https://randomuser.me/api/portraits/women/67.jpg",
            "https://randomuser.me/api/portraits/women/60.jpg",
            "https://randomuser.me/api/portraits/women/72.jpg",
            "https://randomuser.me/api/portraits/men/11.jpg",
            "https://randomuser.me/api/portraits/men/6.jpg",
            "https://randomuser.me/api/portraits/men/51.jpg",
            "https://randomuser.me/api/portraits/women/6.jpg",
            "https://randomuser.me/api/portraits/women/0.jpg",
            "https://randomuser.me/api/portraits/women/19.jpg",
            "https://randomuser.me/api/portraits/women/17.jpg",
            "https://randomuser.me/api/portraits/men/96.jpg",
            "https://randomuser.me/api/portraits/men/62.jpg",
            "https://randomuser.me/api/portraits/men/68.jpg",
            "https://randomuser.me/api/portraits/men/45.jpg",
            "https://randomuser.me/api/portraits/men/6.jpg",
            "https://randomuser.me/api/portraits/women/45.jpg",
            "https://randomuser.me/api/portraits/men/70.jpg",
            "https://randomuser.me/api/portraits/women/92.jpg",
            "https://randomuser.me/api/portraits/men/70.jpg",
            "https://randomuser.me/api/portraits/men/58.jpg",
            "https://randomuser.me/api/portraits/women/62.jpg",
            "https://randomuser.me/api/portraits/men/3.jpg",
            "https://randomuser.me/api/portraits/men/39.jpg",
            "https://randomuser.me/api/portraits/women/56.jpg",
            "https://randomuser.me/api/portraits/men/81.jpg",
            "https://randomuser.me/api/portraits/men/39.jpg",
            "https://randomuser.me/api/portraits/women/21.jpg",
            "https://randomuser.me/api/portraits/men/0.jpg",
            "https://randomuser.me/api/portraits/men/23.jpg",
            "https://randomuser.me/api/portraits/men/88.jpg",
            "https://randomuser.me/api/portraits/men/33.jpg",
            "https://randomuser.me/api/portraits/women/90.jpg",
            "https://randomuser.me/api/portraits/men/36.jpg",
            "https://randomuser.me/api/portraits/men/86.jpg",
            "https://randomuser.me/api/portraits/women/12.jpg",
            "https://randomuser.me/api/portraits/men/72.jpg",
            "https://randomuser.me/api/portraits/women/61.jpg",
            "https://randomuser.me/api/portraits/men/83.jpg",
            "https://randomuser.me/api/portraits/men/52.jpg",
            "https://randomuser.me/api/portraits/men/54.jpg",
            "https://randomuser.me/api/portraits/men/23.jpg",
            "https://randomuser.me/api/portraits/women/69.jpg",
            "https://randomuser.me/api/portraits/women/83.jpg",
            "https://randomuser.me/api/portraits/men/29.jpg",
            "https://randomuser.me/api/portraits/women/91.jpg",
            "https://randomuser.me/api/portraits/men/9.jpg",
            "https://randomuser.me/api/portraits/men/9.jpg",
            "https://randomuser.me/api/portraits/men/36.jpg",
            "https://randomuser.me/api/portraits/men/75.jpg",
            "https://randomuser.me/api/portraits/men/87.jpg",
            "https://randomuser.me/api/portraits/men/81.jpg",
            "https://randomuser.me/api/portraits/women/86.jpg",
            "https://randomuser.me/api/portraits/men/8.jpg",
            "https://randomuser.me/api/portraits/men/62.jpg",
            "https://randomuser.me/api/portraits/men/80.jpg",
            "https://randomuser.me/api/portraits/women/77.jpg",
            "https://randomuser.me/api/portraits/women/63.jpg",
            "https://randomuser.me/api/portraits/men/70.jpg",
            "https://randomuser.me/api/portraits/women/55.jpg",
            "https://randomuser.me/api/portraits/men/48.jpg",
            "https://randomuser.me/api/portraits/women/33.jpg",
            "https://randomuser.me/api/portraits/men/77.jpg",
            "https://randomuser.me/api/portraits/men/50.jpg",
            "https://randomuser.me/api/portraits/men/47.jpg",
            "https://randomuser.me/api/portraits/men/61.jpg",
            "https://randomuser.me/api/portraits/women/36.jpg",
            "https://randomuser.me/api/portraits/men/95.jpg",
            "https://randomuser.me/api/portraits/women/29.jpg",
            "https://randomuser.me/api/portraits/women/84.jpg",
            "https://randomuser.me/api/portraits/men/74.jpg",
            "https://randomuser.me/api/portraits/women/18.jpg",
            "https://randomuser.me/api/portraits/women/5.jpg",
            "https://randomuser.me/api/portraits/women/79.jpg",
            "https://randomuser.me/api/portraits/men/81.jpg",
            "https://randomuser.me/api/portraits/men/34.jpg",
            "https://randomuser.me/api/portraits/men/36.jpg",
            "https://randomuser.me/api/portraits/women/66.jpg",
            "https://randomuser.me/api/portraits/men/24.jpg",
            "https://randomuser.me/api/portraits/men/23.jpg",
            "https://randomuser.me/api/portraits/women/72.jpg",
            "https://randomuser.me/api/portraits/men/75.jpg",
            "https://randomuser.me/api/portraits/men/41.jpg",
            "https://randomuser.me/api/portraits/women/31.jpg",
            "https://randomuser.me/api/portraits/women/11.jpg",
            "https://randomuser.me/api/portraits/men/60.jpg",
            "https://randomuser.me/api/portraits/women/58.jpg",
            "https://randomuser.me/api/portraits/women/66.jpg",
            "https://randomuser.me/api/portraits/men/22.jpg",
            "https://randomuser.me/api/portraits/women/55.jpg"
        ]



        await prisma.user.update({
            where: {
                id: i + 1
            },
            data: {
                profilePicture: userData[i]
            }
        })
    }

}
main()
    .catch((err) => {
        console.error(err);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
