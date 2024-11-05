const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();



async function main() {

    for (let i = 0; i < 50; i++) {

        const imageUrls = [
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/19/7a/f2/96/photo0jpg.jpg",
            "https://img.wongnai.com/p/1920x0/2021/06/10/e8a89440142245f2921d6aa0b1682499.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-s/02/cb/7b/60/lhao-lhao-restaurant.jpg",
            "https://images.deliveryhero.io/image/fd-th/th-logos/cn3bh-logo.jpg",
            "https://themomentum.co/wp-content/uploads/2017/12/07902.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7aVylgQ-Cdvq1Ijku43zake3l-o60IjIUtw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVW_MdT9XrdSZEZbnfLAWC8I0p9Xsg_hzc3A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_mxAkhdB9TX79j5ovMbZUFX1jd6j7yY4eg&s",
            "https://static.bkkmenu.com/files/2018/06/Jongdimsum-31-1005x670.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXdLFA1GpzofElqvWhPYN4IJEkW8_tkqOLDA&s",
            "https://img.wongnai.com/p/1920x0/2015/10/04/2b90e5caeb8e435d807b22f850fda844.jpg",
            "https://api.soimilk.com/sites/default/files/paknang-1.jpg",
            "https://media-cdn.tripadvisor.com/media/photo-p/1a/05/f1/a7/kalyana-restaurant.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkoW9H0MGCGOimJi71U7_tMak6o-u9c8iXw&s",
            "https://www.bkkmenu.com/files/sharer/baby-bar.jpg?v=1726285085",
            "https://i.ytimg.com/vi/PwDXWLEMhfE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAai4Z_fYGEbb2vl5fWFIvdJlVIig",
            "https://api.soimilk.com/sites/default/files/joha-19.jpg",
            "https://scontent.fbkk7-3.fna.fbcdn.net/v/t1.6435-9/91261944_3037919699592547_6528445539409723392_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=2a1932&_nc_ohc=BbpsxFl-B2MQ7kNvgGEQAwv&_nc_zt=23&_nc_ht=scontent.fbkk7-3.fna&_nc_gid=ASQWBJzBqLursST_xkontbG&oh=00_AYAvQJc9_7F7VwuIBgCQAP2quJ66UZfvCrarcSq8NkQFCA&oe=674FFCFD",
            "https://hello2day.com/wp-content/uploads/2019/07/buffet-seafood-amaya-food-gallery-amari-watergate-bangkok-0.jpg",
            "https://www.gourmetandcuisine.com/Images/editor_upload/_editor20231123110529_original.JPG",
            "https://eventbanana.blob.core.windows.net/blogcontainer/0ded987-fb48.jpg",
            "https://www.bkkmenu.com/files/2019/01/Hungrynerd-21.jpg",
            "https://f.ptcdn.info/841/074/000/qzh5ce5naPtS910pRwp-o.jpg",
            "https://lh3.googleusercontent.com/places/ANXAkqEpe-VvzcyO2dXNTPv4HFbolG95QrdYXLQ6FOYEetRGJEE6qlyh0D30W9efn1xsgCFYx4ic98HeNbKET87bgs02x74pzV5TORA=s1600-w640",
            "https://f.ptcdn.info/541/080/000/ru9wwm1r2jh3XBxia3uTw-o.png",
            "https://f.ptcdn.info/121/076/000/r61nns3jx6GVhH7EHLGS-o.jpg",
            "https://1.bp.blogspot.com/-nbNvEAsRg1c/YCeJyMpPQcI/AAAAAAAB7s4/JHAVtZPc1Xcr70xBhflET5EIDNUchojrwCLcBGAsYHQ/s16000/Signature%2BBangkok%2BVIE%2BDinner%2B81.JPG",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2c/6b/9b/d7/we-serve-the-best-authentic.jpg?w=1200&h=-1&s=1",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKGKxAo_9OnRGHGoQ1j3P78jWqXU1mCLnr8A&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy04EzFzTAwbY-h_gLTpR-glpArgV9bCcALQ&s",
            "https://cdn.eatigo.com/restaurant-image/5012328_9198ee02-f1ba-431b-abb0-a796d3f1f863.jpeg",
            "https://img.restaurantguru.com/recf-Chotivala-100-Pure-Vegetarian-and-Jain-Food-Indian-Restaurant-exterior.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSDAL1XTxYPZyd1N4q5O_lkajQxEnRg4p0zg&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgApsUt-bl5gcL6Aj_HOeRvI4p9QOWkW_sQ&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMe12GAxVUjwdfMI933EuGAUxDb7lhsyGRUg&s",
            "https://pbs.twimg.com/media/DYu8f-PWkAE7ISN.jpg:large",
            "https://www.ryoiireview.com/upload/article/202211/1668764460_23fe2d21ea0b05c591eaf11ee20b450c.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVHmmIgQII258TL_whXhfXryp0II2LXsmOwQ&s",
            "https://siam2nite.media/OpJ1XfXrS6-3f5Y4P1KxWLyndkA=/locations/1810/meta_bfe86ed7ca64d31cf795a39958dc705d.jpg",
            "https://usmenuguide.com/wp-content/uploads/2019/05/jarla2.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnjG_gpCVj8OIyIEaiPGmXX8q25rL7nzgPHw&s",
            "https://media-cdn.tripadvisor.com/media/photo-m/1280/18/91/8c/02/photo1jpg.jpg",
            "https://img.wongnai.com/p/400x0/2023/01/16/8d10409589b949db94fbefdb5a0c77ce.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpl2Orn-Ye9qYsAq0cX7__wnU9gls1RVh7Cw&s",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9gSXuo5qNpKuruUjXp-7YCX9yXdfRBo10w&s",
            "https://img.wongnai.com/p/400x0/2021/12/19/4d56a53d69c947139db7c673e5955fd1.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSamn3lcgGLV6qYHrtepl2JZrLlstsWV1O2XQ&s",
            "https://media-cdn.tripadvisor.com/media/photo-s/0b/00/ca/84/karsiyaka-bostanli-da.jpg",
            "https://img.wongnai.com/p/400x0/2019/10/28/6377c17c69f94c5db67406232ae0ddc4.jpg",
            "https://cms.dmpcdn.com/ugcarticle/2023/07/06/bf26d360-1c9d-11ee-8008-b52c7627ccd1_webp_original.webp"
        ];

        await prisma.store.update({
            where: {
                id: i+1
            },
            data: {
                profilePicture : imageUrls[i]
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
