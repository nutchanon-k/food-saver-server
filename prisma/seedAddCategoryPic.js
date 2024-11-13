
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const fs = require('fs');



async function main() {
    
    for (let i = 0; i < 23; i++) {
    const imageUrls = [
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731484157/category/elr2jmh1b620b8yxaroq.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482418/category/pv5zpve1ut3oik3bicxj.webp",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731484157/category/gkicb7dw5xzjbg4pzdc4.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482418/category/ckzqjvy9vzep1uy1iznj.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482419/category/ao6cyw2gwhvkxigq0qxo.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482420/category/cobst5hqo5ig9vhplab3.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490418/category/nb8oql58qlctxbqmh1ag.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490419/category/rtntvnpxmxypb7ncc2rl.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490417/category/cioeu43hk8lmt4xohdi7.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490404/category/gln0fzsyr9utz0rycs08.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490420/category/zdjswb7pasnwugv22vbb.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482419/category/mx7ro7faboh552o7sjnm.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482418/category/vgm1jf3umpowrys5cf9z.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490419/category/yzzlyugpel9xutkwtk2m.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490419/category/zewiloyi6pryeajbnwoa.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490419/category/a6tkrfvzm6xhz7j7ozxq.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490419/category/rbpwm1t1x4rhwa7xqv10.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482419/category/rlrotghwpqmxbp9zxiyn.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482417/category/wxt5nhd6atfh0ciuo1ls.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490418/category/aybocmcl9yubsuyitlka.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482420/category/aidedwzm07n0ipwzpr1g.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731482420/category/hwzielrw2r92g99wzpya.png",
        "https://res.cloudinary.com/dm28osvs7/image/upload/v1731490419/category/w9fhqt7oxaoferl32huz.png"
    ];
     
    await prisma.category.update({
        where: {
            id: i+1
        },
        data: {
            imageUrl : imageUrls[i]
        }
    })


}

    
}


main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });