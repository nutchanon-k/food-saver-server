const bcrypt = require("bcryptjs");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const hashedPassword = bcrypt.hashSync("123456", 8);

async function main() {
    // Seed User
    const userData = await prisma.user.createMany({
    data: [
      {
        firstName: "สมชัย",
        lastName: "ทันยุควงศ์กุล",
        email: "admin@gmail.com",
        address: "61 ถ.ไทนิยม อ.วังทองหลาง จ.เชียงใหม่ 11920",
        phoneNumber: "206024615",
        role: "ADMIN",
        password: hashedPassword,
      },

      {
        firstName: "ปิยวัจน์",
        lastName: "ทันยุค",
        email: "buyer@gmail.com",
        address: "61 ถ.ไทนิยม อ.วังทองหลาง จ.เชียงราย 11920",
        phoneNumber: "206024615",
        
        password: hashedPassword,
      },
      {
        firstName: "สมเกียรติ",
        lastName: "ไทยสุชาต",
        email: "wrrnratntangrb@gmail.com",
        address:
          "130/46 ถนนนาถะพินธุ ต.สุขเดือนห้า อ.เวียงแก่น จ.หนองคาย 97680",
        phoneNumber: "748526516",
        
        password: hashedPassword,
      },
      {
        firstName: "รภัสพงษ์",
        lastName: "บุนยะศัพท์",
        email: "wallphewiiyngcchanthuek@gmail.com",
        address: "67/5 ถนนหนุนสุข ตำบลบางโรงใต้ จังหวัดลำพูน 68830",
        phoneNumber: "772052819",
        
        password: hashedPassword,
      },
      {
        firstName: "ธัญญามาศ",
        lastName: "ทองแท้",
        email: "twngthngsumachyaa@gmail.com",
        address: "381/0 ถ.ปานสุวรรณ ต.หนองอิเฒ่า อ.ภักดีชุมพล ศรีสะเกษ",
        phoneNumber: "42911399",
        
        password: hashedPassword,
      },
      {
        firstName: "วรศาสส์",
        lastName: "ฉัตรอภิเที่ยงค่ำ",
        email: "tnakrb@gmail.com",
        address: "7 ถ.ซาซุม อำเภอคอนสวรรค์ กาญจนบุรี 75460",
        phoneNumber: "288209128",
        
        password: hashedPassword,
      },
      {
        firstName: "กวาง",
        lastName: "ถนัดการยนต์",
        email: "phngschbabnphaawiirchay@gmail.com",
        address: "2/6 ถ.ทับทิมไทย ตำบลหัวนาคำ จังหวัดเพชรบูรณ์ 52210",
        phoneNumber: "539733819",
        
        password: hashedPassword,
      },
      {
        firstName: "เบญญาทิพย์",
        lastName: "ทองสุกเลิศ",
        email: "praesrithaenwphyaa@gmail.com",
        address: "1 ถนนทองลาภ อำเภอป้อมปราบศัตรูพ่าย น่าน 35320",
        phoneNumber: "298529661",
        
        password: hashedPassword,
      },
      {
        firstName: "พิมพกานต์",
        lastName: "แนวพนิช",
        email: "phkhwathnbuyyaaphirmy@gmail.com",
        address: "2 ถ.ซูสารอ ต.โนนศิลาใต้ จ.นราธิวาส 42700",
        phoneNumber: "941141092",
        
        password: hashedPassword,
      },
      {
        firstName: "สุปรานี",
        lastName: "ทองลาภ",
        email: "wanchatr70@gmail.com",
        address: "884 ถนนหอมพิกุล ต.บ้านลำภูรา จ.ภูเก็ต 53250",
        phoneNumber: "204316856",
        
        password: hashedPassword,
      },
      {
        firstName: "ขวัญรุ้ง",
        lastName: "โพธิสัตย์",
        email: "nathphichaathraphythamrngkh@gmail.com",
        address: "39 หมู่ 06 ถ.หนักแน่น ตำบลกะบกเตี้ย อำเภอคอนสาร ยะลา 47830",
        phoneNumber: "454486818",
        
        password: hashedPassword,
      },
      {
        firstName: "เนตรฤดี",
        lastName: "ทุมะบุตร์",
        email: "thnadkaarekhiiynwalyaa@gmail.com",
        address: "4 หมู่บ้านฐิติกุล เรณูนคร หนองบัวลำภู 20430",
        phoneNumber: "278735836",
        
        password: hashedPassword,
      },
      {
        firstName: "ธีรลักษณ์",
        lastName: "เมืองสุข",
        email: "ulayphrchaayaesng@gmail.com",
        address: "91 หมู่ 62 ถ.ศรทอง โนนแดงใหญ่ บ่อไร่ ชลบุรี 65220",
        phoneNumber: "595636944",
        
        password: hashedPassword,
      },
      {
        firstName: "รมิตา",
        lastName: "ทองเนื้อดี",
        email: "nanthwrrn38@gmail.com",
        address:
          "4/7 ถ.ดุษฎีวนิช ตำบลป่าลำภูรา อำเภอเวียงป่าเป้า สุพรรณบุรี 90100",
        phoneNumber: "377058765",
        
        password: hashedPassword,
      },
      {
        firstName: "นาวีตา",
        lastName: "ศรทอง",
        email: "phaaswuthi82@gmail.com",
        address: "140/4 ถ.พงศ์ฉบับนภา ต.เขาพระนอนกลาง จ.พิษณุโลก 66980",
        phoneNumber: "280536923",
        
        password: hashedPassword,
      },
      {
        firstName: "เพียงกมล",
        lastName: "เมืองสุข",
        email: "wrdaaphr95@gmail.com",
        address: "3/8 ถ.พีระเพ็ญกุล คลองใหญ่ ขอนแก่น 84450",
        phoneNumber: "533995455",
        
        password: hashedPassword,
      },
      {
        firstName: "สินสมุทร",
        lastName: "บุนยาภิสนท์",
        email: "mchamnaaywaad@gmail.com",
        address: "23/01 ถ.บุนยะศัพท์ ต.บางกุ้ง อ.โพนสวรรค์ ราชบุรี 57440",
        phoneNumber: "489966588",
        
        password: hashedPassword,
      },
      {
        firstName: "นันทวุฒิ",
        lastName: "เขียวอ่อน",
        email: "thrrmsthitaiphsaalwaasuethph@gmail.com",
        address: "7/3 ถ.ถนัดรักษา ตำบลบ้านห้วยยอด จังหวัดชุมพร 91510",
        phoneNumber: "893711872",
        
        password: hashedPassword,
      },
      {
        firstName: "อุลัยพร",
        lastName: "หอมพิกุล",
        email: "bunyaaphisnthsuththinath@gmail.com",
        address: "832/68 ถนนยะผา เวียงป่าเป้า บุรีรัมย์ 36740",
        phoneNumber: "594126167",
        
        password: hashedPassword,
      },
      {
        firstName: "อรจิรา",
        lastName: "เช้าวันดี",
        email: "withuulytangkulngaam@gmail.com",
        address: "0 ถนนบินดี อำเภอบ้านแท่น สิงห์บุรี 48840",
        phoneNumber: "540025793",
        
        password: hashedPassword,
      },
      {
        firstName: "ภานิณี",
        lastName: "ไทยแท้",
        email: "nriiratnaekwyuu@gmail.com",
        address: "632/00 ถ.เพียยา อำเภอหนองบัวระเหว สมุทรสงคราม 39240",
        phoneNumber: "80953701",
        
        password: hashedPassword,
      },
      {
        firstName: "ประสิทธิ์",
        lastName: "ศิวะวรเวท",
        email: "naakknkphaadiila@gmail.com",
        address:
          "37 หมู่ 29 ถ.ดาวกระจาย ตำบลบึงโนนศิลา อำเภอพระนคร เพชรบุรี 67460",
        phoneNumber: "482350908",
        
        password: hashedPassword,
      },
      {
        firstName: "ชิดชนก",
        lastName: "มนทอง",
        email: "smhmaay66@gmail.com",
        address: "53/50 ถนนหนุนสุข บางกุ้ง ศรีวิไล สุโขทัย 11750",
        phoneNumber: "511241909",
        
        password: hashedPassword,
      },
      {
        firstName: "ญาณพันธุ์",
        lastName: "แก้วอยู่",
        email: "phchrphrn40@gmail.com",
        address: "41/7 ถ.ดาบเงิน ต.กะบกเตี้ย อ.เรณูนคร อุตรดิตถ์",
        phoneNumber: "942931845",
        
        password: hashedPassword,
      },
      {
        firstName: "อดิสรณ์",
        lastName: "ขำเอนก",
        email: "ephyyuphaasriiwngkh@gmail.com",
        address: "68/6 ถนนดวงทับทิม หนอกจอก ลำปาง 22360",
        phoneNumber: "272813575",
        
        password: hashedPassword,
      },
      {
        firstName: "สิทธิชัย",
        lastName: "นาควงษ์",
        email: "kantwrrn64@gmail.com",
        address: "829/18 ถนนไทยสุชาต คอนสาร นครราชสีมา 69430",
        phoneNumber: "481772435",
        
        password: hashedPassword,
      },
      {
        firstName: "ธัญญกัญญา",
        lastName: "ขุนดำ",
        email: "lnaakknk@gmail.com",
        address: "190/7 ถนนฉายแสง เขาสมิง อุดรธานี 84560",
        phoneNumber: "595332943",
        
        password: hashedPassword,
      },
      {
        firstName: "พันธุ์เทพ",
        lastName: "ตะละภัฏ",
        email: "naameswtrwiiraochti@gmail.com",
        address: "1/0 ถนนไทยสุชาต ภูเขียว กทม. 15390",
        phoneNumber: "423418419",
        
        password: hashedPassword,
      },
      {
        firstName: "กิติยาธรณ์",
        lastName: "ดิสกะประกาย",
        email: "thiirwuthi78@gmail.com",
        address: "826 ถ.ธัญาโภชน์ อำเภอเรณูนคร นราธิวาส 70340",
        phoneNumber: "130893576",
        
        password: hashedPassword,
      },
      {
        firstName: "ไวพจน์",
        lastName: "นาคพันธุ์",
        email: "phaadiila16@gmail.com",
        address: "39/5 ถ.ฉายแสง ต.หัวนาคำ อ.บ่อไร่ จ.ลำปาง 47930",
        phoneNumber: "472766081",
        
        password: hashedPassword,
      },
      {
        firstName: "จักรกฤนาย",
        lastName: "ถนัดการเขียน",
        email: "nathcchsakdi28@gmail.com",
        address: "76 หมู่ 56 ถนนเนตร์มณี สุขเดือนห้า ศรีวิไล เพชรบุรี 19050",
        phoneNumber: "425996500",
        
        password: hashedPassword,
      },
      {
        firstName: "ยนงคราญ",
        lastName: "ไตรบรรพ",
        email: "naayphaaneklaa@gmail.com",
        address: "66 ถ.นิยมเซียม ต.คลองเขื่อน อ.หนองบัวแดง จ.ขอนแก่น 54800",
        phoneNumber: "828346680",
        
        password: hashedPassword,
      },
      {
        firstName: "อนุวัช",
        lastName: "ซาซุม",
        email: "wsiwawrewth@gmail.com",
        address: "124 ถ.ฉายแสง ต.เกาะโพธิ์ อ.บ้านแพง จ.ยะลา",
        phoneNumber: "79656262",
        
        password: hashedPassword,
      },
      {
        firstName: "สุทกร",
        lastName: "ตวงทอง",
        email: "wdaawraam@gmail.com",
        address: "5 ถ.นำธวัช ห้วยยอด สามโคก หนองบัวลำภู 87510",
        phoneNumber: "492113787",
        
        password: hashedPassword,
      },
      {
        firstName: "มารีนี",
        lastName: "สุวรรณหงษ์",
        email: "osphnsiwawrewth@gmail.com",
        address: "0 ถนนถนัดการยนต์ เวียงชัย ชัยภูมิ 25090",
        phoneNumber: "331027629",
        
        password: hashedPassword,
      },
      {
        firstName: "ทับทิม",
        lastName: "สงประเสริฐ",
        email: "aenwphyaaphakhchayyaa@gmail.com",
        address: "094/63 ถนนนิลเสนา ภาษีเจริญ ระยอง 99470",
        phoneNumber: "555966355",
        
        password: hashedPassword,
      },
      {
        firstName: "สุมัชญา",
        lastName: "ตั้งเผ่า",
        email: "pnawamandr@gmail.com",
        address: "812/8 ถ.สันตะวงศ์ วังทองหลาง อุบลราชธานี 53820",
        phoneNumber: "112721216",
        
        password: hashedPassword,
      },
      {
        firstName: "หลี",
        lastName: "ทีฆะ",
        email: "inilsuwrrn@gmail.com",
        address: "01 ถนนถิรสวัสดิ์ คลองเขื่อน บ้านเขว้า ตรัง 35280",
        phoneNumber: "416946182",
        
        password: hashedPassword,
      },
      {
        firstName: "เกษมชัย",
        lastName: "ดุริยพันธุ์",
        email: "phuumipayyaa47@gmail.com",
        address: "704/31 ถ.ทัศนสุทธิ เรณูนคร สระแก้ว 28170",
        phoneNumber: "560419386",
        
        password: hashedPassword,
      },
      {
        firstName: "มนรัตน์",
        lastName: "ทองประดิฐ",
        email: "hrrsaathrrmthinnaa@gmail.com",
        address: "46 หมู่ 4 ถ.บุนยาภิสนท์ อ.นาหว้า จ.สิงห์บุรี 83530",
        phoneNumber: "785864407",
        
        password: hashedPassword,
      },
      {
        firstName: "กษิดิฐ",
        lastName: "เมืองสุข",
        email: "faekwyuu@gmail.com",
        address: "9/7 ถนนเธียรายัน อำเภอบำเหน็จณรงค์ จังหวัดนครนายก 32150",
        phoneNumber: "582757827",
        
        password: hashedPassword,
      },
      {
        firstName: "เกษตร",
        lastName: "บุญศล",
        email: "rangsinii61@gmail.com",
        address:
          "40 หมู่ 39 ถ.ทรงโกมล ตำบลบางปะกอกใต้ อำเภอศรีวิไล ลำพูน 91610",
        phoneNumber: "302879704",
        
        password: hashedPassword,
      },
      {
        firstName: "รชตกร",
        lastName: "นามเสวตร",
        email: "ssirinthrthnmmnusy@gmail.com",
        address: "251/2 ถนนศรีตะวัน ต.หัวงัว อ.บ้านแท่น สงขลา 14090",
        phoneNumber: "581480376",
        
        password: hashedPassword,
      },
      {
        firstName: "อนุบาล",
        lastName: "นฤทุกข์",
        email: "siththay62@gmail.com",
        address: "262/3 ถนนถนอมพล อำเภอเวียงแก่น นครศรีธรรมราช 89720",
        phoneNumber: "73072627",
        
        password: hashedPassword,
      },
      {
        firstName: "กองสิน",
        lastName: "ดัตพันธุ์",
        email: "wallph69@gmail.com",
        address: "89 หมู่ 47 ต.บางแค อ.ศรีวิไล บุรีรัมย์ 44880",
        phoneNumber: "748758621",
        
        password: hashedPassword,
      },
      {
        firstName: "ณัฐติญา",
        lastName: "ศรีสัตย์",
        email: "datphanthuthinwathn@gmail.com",
        address: "17/53 ถนนหนักแน่น ต.บางโรงใต้ อ.คอนสาร จ.ชัยภูมิ",
        phoneNumber: "680569533",
        
        password: hashedPassword,
      },
      {
        firstName: "ฐิติณัฐฐา",
        lastName: "สังข์กรด",
        email: "niymechiiymthiirwach@gmail.com",
        address: "435/98 ถนนนาคพันธุ์ ต.ปากทรงเหนือ อ.บ่อไร่ สกลนคร",
        phoneNumber: "532274861",
        
        password: hashedPassword,
      },
      {
        firstName: "สุไฮลัน",
        lastName: "ถะเกิงชศ",
        email: "othrrmniym@gmail.com",
        address: "79 หมู่ 44 ถนนศรีวงค์ ต.วัดบางกุ้ง จ.ตราด 51510",
        phoneNumber: "181505412",
        
        password: hashedPassword,
      },
      {
        firstName: "ธาเอก",
        lastName: "ภูภักดี",
        email: "naakhsuthinruuaikyah@gmail.com",
        address: "76/3 ถ.นาคสุทิน ต.ก้อนแก้วใต้ อ.วังยาง จ.บึงกาฬ 41600",
        phoneNumber: "527001450",
        
        password: hashedPassword,
      },
      {
        firstName: "โสภา",
        lastName: "เดชคุ้ม",
        email: "mattikaa81@gmail.com",
        address: "88 หมู่ 0 หมู่บ้านดวงจันทร์ วังทองหลาง หนองคาย 16560",
        phoneNumber: "811240418",
        
        password: hashedPassword,
      },
      {
        firstName: "นรีกานต์",
        lastName: "เมืองสุข",
        email: "piyananth10@gmail.com",
        address: "99 หมู่ 55 หมู่บ้านดวงจันทร์ เรณูนคร ภูเก็ต 91600",
        phoneNumber: "315623525",
        
        password: hashedPassword,
      },
      {
        firstName: "ก้องภพ",
        lastName: "ศรีสุข",
        email: "seller@gmail.com",
        address: "123 ถนนสุขุมวิท, กรุงเทพ",
        phoneNumber: "891234567",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ธนภพ",
        lastName: "พงษ์สวัสดิ์",
        email: "tanapob@gmail.com",
        address: "456 ถนนสีลม, กรุงเทพ",
        phoneNumber: "812345678",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ปรัชญา",
        lastName: "สุขสวัสดิ์",
        email: "prachaya@gmail.com",
        address: "789 ถนนพระราม 4, กรุงเทพ",
        phoneNumber: "833456789",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ชญานิน",
        lastName: "ศิริวัฒน์",
        email: "chayanin@gmail.com",
        address: "101 ถนนสาทร, กรุงเทพ",
        phoneNumber: "824567890",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ภูมิภัทร",
        lastName: "วิชัยรัตน์",
        email: "phumipat@gmail.com",
        address: "202 ถนนพระราม 9, กรุงเทพ",
        phoneNumber: "845678901",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ศศิธร",
        lastName: "วงศ์แก้ว",
        email: "sasithorn@gmail.com",
        address: "303 ถนนรัชดาภิเษก, กรุงเทพ",
        phoneNumber: "856789012",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ธีรดนย์",
        lastName: "สุวรรณชัย",
        email: "teeradorn@gmail.com",
        address: "404 ถนนเพลินจิต, กรุงเทพ",
        phoneNumber: "867890123",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "กานต์ชนก",
        lastName: "ศิริชัย",
        email: "karnchanok@gmail.com",
        address: "505 ถนนวิภาวดีรังสิต, กรุงเทพ",
        phoneNumber: "878901234",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "อนุชิต",
        lastName: "รัตนกุล",
        email: "anuchit@gmail.com",
        address: "606 ถนนนราธิวาส, กรุงเทพ",
        phoneNumber: "899012345",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "สุพัตรา",
        lastName: "ทองสุข",
        email: "supattra@gmail.com",
        address: "707 ถนนเพชรบุรี, กรุงเทพ",
        phoneNumber: "801234567",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ปวีณา",
        lastName: "ศรีวงศ์",
        email: "paweena@gmail.com",
        address: "808 ถนนอโศก, กรุงเทพ",
        phoneNumber: "812345679",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "วรพล",
        lastName: "สุขเจริญ",
        email: "worapon@gmail.com",
        address: "909 ถนนลาดพร้าว, กรุงเทพ",
        phoneNumber: "823456789",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ธีรยุทธ",
        lastName: "จันทรโชติ",
        email: "teerayut@gmail.com",
        address: "1010 ถนนสุขุมวิท, กรุงเทพ",
        phoneNumber: "834567890",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ภูวเดช",
        lastName: "ศรีสุวรรณ",
        email: "phuwadech@gmail.com",
        address: "1111 ถนนรามคำแหง, กรุงเทพ",
        phoneNumber: "845678902",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ณัฐพล",
        lastName: "วงศ์สถิต",
        email: "nattapon@gmail.com",
        address: "1212 ถนนเจริญนคร, กรุงเทพ",
        phoneNumber: "856789013",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ปณิตา",
        lastName: "จิรวงศ์",
        email: "panita@gmail.com",
        address: "1313 ถนนประชาชื่น, กรุงเทพ",
        phoneNumber: "867890124",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "อนุชา",
        lastName: "ศิริพงศ์",
        email: "anucha@gmail.com",
        address: "1414 ถนนแจ้งวัฒนะ, กรุงเทพ",
        phoneNumber: "878901235",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "สุจิตราพร",
        lastName: "วงศ์เดช",
        email: "sujitraborn@gmail.com",
        address: "1515 ถนนพหลโยธิน, กรุงเทพ",
        phoneNumber: "889012346",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ธีรดา",
        lastName: "รัตนมณี",
        email: "teerada@gmail.com",
        address: "1616 ถนนจันทน์, กรุงเทพ",
        phoneNumber: "890123456",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "พิชญ์",
        lastName: "ชัยวัฒน์",
        email: "pitchaya@gmail.com",
        address: "1717 ถนนบางนา-ตราด, กรุงเทพ",
        phoneNumber: "802345678",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "วีระศักดิ์",
        lastName: "อัมพรสกุล",
        email: "weerasak@gmail.com",
        address: "1818 ถนนเกษตร-นวมินทร์, กรุงเทพ",
        phoneNumber: "813456789",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ณัฐภัทร",
        lastName: "นครทอง",
        email: "nattapat@gmail.com",
        address: "1919 ถนนพญาไท, กรุงเทพ",
        phoneNumber: "824567891",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "อธิชาติ",
        lastName: "อินทรมงคล",
        email: "atichart@gmail.com",
        address: "2020 ถนนบางรัก, กรุงเทพ",
        phoneNumber: "835678902",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ณิชานันท์",
        lastName: "วงศ์จันทร์",
        email: "nichanun@gmail.com",
        address: "2121 ถนนพระราม 3, กรุงเทพ",
        phoneNumber: "846789013",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "อนุรักษ์",
        lastName: "พิชัยวงศ์",
        email: "anurak@gmail.com",
        address: "2222 ถนนเลียบคลองประปา, กรุงเทพ",
        phoneNumber: "857890124",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ภรภัทร",
        lastName: "จิระวงษ์",
        email: "porapat@gmail.com",
        address: "2323 ถนนจรัญสนิทวงศ์, กรุงเทพ",
        phoneNumber: "868901235",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "พัชรพล",
        lastName: "นวลชัย",
        email: "patcharapol@gmail.com",
        address: "2424 ถนนบรมราชชนนี, กรุงเทพ",
        phoneNumber: "879012346",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "วรนุช",
        lastName: "พิชัยศรี",
        email: "waranuch@gmail.com",
        address: "2525 ถนนรัตนาธิเบศร์, กรุงเทพ",
        phoneNumber: "880123457",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ชญานี",
        lastName: "ศรีสุชาติ",
        email: "chayanee@gmail.com",
        address: "2626 ถนนสามเสน, กรุงเทพ",
        phoneNumber: "891234568",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "กิตติภพ",
        lastName: "ทรงชัย",
        email: "kittipop@gmail.com",
        address: "2727 ถนนเอกมัย, กรุงเทพ",
        phoneNumber: "802345679",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "จิรพัฒน์",
        lastName: "จิตตินนท์",
        email: "jirapat@gmail.com",
        address: "2828 ถนนสุรวงศ์, กรุงเทพ",
        phoneNumber: "813456780",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "พรพรรณ",
        lastName: "รัศมี",
        email: "pornphan@gmail.com",
        address: "2929 ถนนพระราม 5, กรุงเทพ",
        phoneNumber: "824567892",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ณภัทร",
        lastName: "นวลทอง",
        email: "napat@gmail.com",
        address: "3030 ถนนสุขสวัสดิ์, กรุงเทพ",
        phoneNumber: "835678903",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "รณชัย",
        lastName: "ศิริวงศ์",
        email: "ronchai@gmail.com",
        address: "3131 ถนนราชดำเนิน, กรุงเทพ",
        phoneNumber: "846789014",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "สุนิษา",
        lastName: "วงศ์พัฒน์",
        email: "sunisa@gmail.com",
        address: "3232 ถนนเจริญกรุง, กรุงเทพ",
        phoneNumber: "857890125",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ศุภกิจ",
        lastName: "ศรีโสภา",
        email: "supakit@gmail.com",
        address: "3333 ถนนสามเสนใน, กรุงเทพ",
        phoneNumber: "868901236",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ชัยวัฒน์",
        lastName: "มั่งคง",
        email: "chaiwat@gmail.com",
        address: "3434 ถนนพระราม 8, กรุงเทพ",
        phoneNumber: "879012347",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ภูวดล",
        lastName: "วงศ์คำจันทร์",
        email: "phuwadol@gmail.com",
        address: "3535 ถนนจตุจักร, กรุงเทพ",
        phoneNumber: "880123458",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ศิริพร",
        lastName: "นาคพันธุ์",
        email: "siriporn@gmail.com",
        address: "3636 ถนนลาดปลาเค้า, กรุงเทพ",
        phoneNumber: "891234569",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "อนุวัฒน์",
        lastName: "เจริญทอง",
        email: "anuwat@gmail.com",
        address: "3737 ถนนปทุมวัน, กรุงเทพ",
        phoneNumber: "802345670",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ณัฐวุฒิ",
        lastName: "ศรีธนารักษ์",
        email: "nattawut@gmail.com",
        address: "3838 ถนนหนองแขม, กรุงเทพ",
        phoneNumber: "813456781",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ชนาธิป",
        lastName: "นาวารัตน์",
        email: "chanathip@gmail.com",
        address: "3939 ถนนบางกอกน้อย, กรุงเทพ",
        phoneNumber: "824567893",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ปภาวี",
        lastName: "ทองบำรุง",
        email: "papavee@gmail.com",
        address: "4040 ถนนลาดกระบัง, กรุงเทพ",
        phoneNumber: "835678904",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ณภัทร",
        lastName: "ศรีสุขุม",
        email: "napat.s@gmail.com",
        address: "4141 ถนนบางขุนเทียน, กรุงเทพ",
        phoneNumber: "846789015",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ปานทิพย์",
        lastName: "รัตนาวดี",
        email: "pantip@gmail.com",
        address: "4242 ถนนคลองสาน, กรุงเทพ",
        phoneNumber: "857890126",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "สุนทรี",
        lastName: "วัฒนสุข",
        email: "suntaree@gmail.com",
        address: "4343 ถนนมีนบุรี, กรุงเทพ",
        phoneNumber: "868901237",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "ธนดล",
        lastName: "สุขใจ",
        email: "thanadon@gmail.com",
        address: "4444 ถนนบางพลัด, กรุงเทพ",
        phoneNumber: "879012348",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "จิตติพันธ์",
        lastName: "รัตนศรี",
        email: "jittiphan@gmail.com",
        address: "4545 ถนนบางนา, กรุงเทพ",
        phoneNumber: "880123459",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "อัญชลี",
        lastName: "ศรีวิชัย",
        email: "anchalee@gmail.com",
        address: "4646 ถนนป้อมปราบศัตรูพ่าย, กรุงเทพ",
        phoneNumber: "891234570",
        role: "SELLER",
        password: hashedPassword,
      },
      {
        firstName: "กิตติวัฒน์",
        lastName: "จันทรเจริญ",
        email: "kittiwat@gmail.com",
        address: "4747 ถนนพระราม 2, กรุงเทพ",
        phoneNumber: "802345671",
        role: "SELLER",
        password: hashedPassword,
      },
    ],
  });

  // Seed Foundations
    const foundationData =  await prisma.foundation.createMany({
    data: [
{
      name: 'สมาคมส่งเสริมสถานภาพสตรีฯบ้านพักฉุกเฉิน ดอนเมือง',
      contactInfo: '02 929 2222',
      address: 'เลขที่ 501/1 ซ.เดชะตุงคะ 1 ถ.เดชะตุงคะ แขวงสีกัน เขตดอนเมือง กรุงเทพฯ (บริจาคช่วยบ้านพักฉุกเฉิน)',
      profilePicture: 'https://www.bloggang.com/data/the-psy/picture/1191127173.jpg'
    },
{
      name: 'สถานสงเคราะห์เด็กอ่อนรังสิต',
      contactInfo: '02-577-1172',
      address: 'สถานสงเคราะห์เด็กอ่อนรังสิต 2/40 หมู่ 2 ถนนรังสิต-นครนายก ตำบลรังสิต อำเภอธัญบุรี ปทุมธานี',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCBztc7w4K_HnjdT5Czu1ForLDLK58nFJbiw&s'
    },
{
      name: 'มูลนิธิธารนุเคราะห์ สถานพักฟื้นคนชราบางเขน',
      contactInfo: '02 521 0087',
      address: '159/4 วิภาวดีรังสิต 64 หลักสี่ กรุงเทพมหานคร',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJLM7d6bDpi0yHebdLhFBbFSSyAt-2ogU3Cw&s'
    },
{
      name: 'ศูนย์พัฒนาการจัดสวัสดิการสังคมผู้สูงอายุจังหวัดปทุมธานี',
      contactInfo: '0-2577-1958',
      address: 'เลขที่ 9/1 หมู่ 2 ถนนรังสิต - นครนายก ตำบลรังสิต อำเภอธัญบุรี จังหวัดปทุมธานี',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_rg6Olm2BCcw7ZjwZ29nO1hT7owXEcvU6wg&s'
    },
{
      name: 'มูลนิธิเด็ก FOUNDATION FOR CHILDREN',
      contactInfo: '097-213-0647',
      address: 'อยู่ 95/24 หมู่ที่ 6 ซ.กระทุ่มล้ม 18 ถ.พุทธมณฑล สาย 4 ต.กระทุ่มล้ม อ.สามพราน จ.นครปฐม',
      profilePicture: 'https://image.makewebcdn.com/makeweb/m_1920x0/FZoJyLend/DefaultData/45th_Anniversary_of_FFC_web.png'
    },
{
      name: 'สมาคมสงเคราะห์เด็กกำพร้าแห่งประเทศไทย',
      contactInfo: '02 427 8498',
      address: 'เลขที่ 437 ม.4 ซ.สุขสวัสดิ์52 แขวงราษฎร์บูรณะ กรุงเทพ',
      profilePicture: 'https://today-obs.line-scdn.net/0hk3LPIcUfNBxxKRxsiTpLS0t_N3NCRScfFR9lHy1HaigIGXUdSUp-clJ9bHhbG3NCHxp8c10qLy0PHXZKH01-/w644'
    },
{
      name: 'บ้านพักคนชรา พระราม9',
      contactInfo: '0926149542',
      address: 'iCare Seniors Home ซ.พระรามเก้า 49 21 ซ.พระรามเก้า 49 แขวงสวนหลวง เขตสวนหลวง กรุงเทพมหานคร 		',
      profilePicture: 'https://fi.lnwfile.com/_/fi/_raw/po/ik/2n.png'
    },
{
      name: 'มูลนิธิสงเคราะห์เด็ก พัทยา',
      contactInfo: '038 423 468',
      address: 'เลขที่ 384 หมู่6 ถนนสุขุมวิท กม.144 ต.นาเกลือ อ.บางละมุง จ.ชลบุรี',
      profilePicture: 'https://designtook.wordpress.com/wp-content/uploads/2014/12/pattaya-orphanage-cover.jpg'
    },
{
      name: 'มูลนิธิกระจกเงา',
      contactInfo: '02-973-2236',
      address: 'เลขที่ 191 ซอยวิภาวดี62 ถนนวิภาวดีรังสิต แขวงตลาดบางเขน เขตหลักสี่ กรุงเทพฯ',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs4s801UzZH17SUO41XubNR4KdL6N99vfSow&s'
    },
{
      name: 'บ้านนนทภูมิ',
      contactInfo: '0-2583-8396',
      address: 'เลขที่ 78/5 หมู่ 1 ซอยติวานนท์-ปากเกร็ด 1 ถนนติวานนท์ ตำบลบางตลาด อำเภอปากเกร็ด จังหวัดนนทบุรี',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKxh_9Ll6TAQPy9REbyP1gWiS-ls9FmHnyvw&s'
    },
{
      name: 'มูลนิธิบ้านนกขมิ้น',
      contactInfo: '02 375 6497',
      address: 'มูลนิธิบ้านนกขมิ้น เลขที่ 89 ซอยเสรีไทย17 ถนนเสรีไทย แขวงคลองกุ่ม เขตบึงกุ่ม กรุงเทพมหานคร',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFFX7S-DeKOjTBRhadlCr0-GydpFsTkvEtEA&s'
    },
{
      name: 'มูลนิธิเพื่อเด็กพิการ',
      contactInfo: '02-539-2916',
      address: '546 ซอยลาดพร้าว 47 ถนนลาดพร้าว แขวงสะพานสอง เขตวังทองหลาง กรุงเทพฯ',
      profilePicture: 'https://fcdthailand.org/wp-content/uploads/2015/08/FCD-logo.jpg'
    },
{
      name: 'มูลนิธิสวนแก้ว',
      contactInfo: '098-310-3956',
      address: 'เลขที่ 55/1 หมู่ 1 ต.บางเลน อ.บางใหญ่ จ.นนทบุรี',
      profilePicture: 'https://www.kanlayano.org/home/images/logo/logo_main.jpg'
    },
{
      name: 'โครงการร้านปันกัน โดย มูลนิธิยุวพัฒน์',
      contactInfo: '02-118-3968-9',
      address: 'ร้านปันกันทั้ง 16 สาขา หรือโครงการร้านปันกัน โดย มูลนิธิยุวพัฒน์ เลขที่ 7 ซอยอ่อนนุช 90 เขตประเวศแขวงประเวศ กรุงเทพฯ',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt_eU-K25kDBVC-EkRcu1BUuE0FUzXJsBQ2A&s'
    },
{
      name: 'วัดจากแดง',
      contactInfo: '066-159-9558',
      address: 'วัดจากแดง ถ.เพชรหึงษ์ ซ. 10 ต.ทรงคนอง อ.พระประแดง จ.สมุทรปราการ',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQKvvcnTYAzTHQXK_yF9Qi4gedyuGlC_TMdw&s'
    },
{
      name: 'วัดห้วยหมู และศูนย์สาธารณสงเคราะห์เด็กพิเศษ',
      contactInfo: '086-020-9978',
      address: 'วัดห้วยหมู เลขที่ 39 ม.9 ต.เจดีย์หัก อ.เมืองราชบุรี จ.ราชบุรี',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw_XSaRl0yi8VLS--_rVHdZWjVcyT9rWQgZA&s'
    },
{
      name: 'มูลนิธิบ้านสงเคราะห์สัตว์พิการ',
      contactInfo: '02-584-4896',
      address: 'มูลนิธิบ้านสงเคราะห์สัตว์พิการ (ในความอุปถัมภ์ของหลวงตามหาบัว ญาณสัมปันโน) 15/1 หมู่ 1 ซ.พระมหาการุณย์ 25 ถ.ติวานนท์-ปากเกร็ด 56 ต.บ้านใหม่ อ.ปากเกร็ด จ.นนทบุรี',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm9-qyxTTqdUvuyqFW2KPEzyvtei_ARZQ92w&s'
    },
{
      name: 'ป้าจุ๊ บ้านพักสี่ขาเพื่อหมาจร',
      contactInfo: '086-7751151',
      address: '27/2 ม.4 ซ.วัดพิรุณศาสตร์ (ลำลูกกาคลอง 10) ต.บึงทองหลาง อ.ลำลูกกา จ.ปทุมธานี,',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsBPdF3VIDibaOOzg2XGE-2TR7C6ZfxR3WVg&s'
    },
{
      name: 'มูลนิธิเพื่อสุนัขในซอย',
      contactInfo: '087 6681 029',
      address: 'มูลนิธิเพื่อสุนัขในซอย 167/9 หมู่4 ซอยไม้ขาว10 ต.ไม้ขาว อ.ถลาง จ.ภูเก็ต',
      profilePicture: 'https://www.care-nation.com/wp-content/uploads/2019/11/fdlogo_sdf.png'
    },
{
      name: 'WVS Care for Dogs',
      contactInfo: '086-9138701',
      address: '12 Moo 11, Nam Phrae, Hang Dong, Chiang Mai, Amphoe Hang Dong, Thailand, Chiang Mai',
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHIoljsF75dV4vVvdgmXZX35ukAecVbXcrng&s'
    }
    ]
  });

  // Category
    const categoryData =  await prisma.category.createMany({
    data: [
{
      name: 'อาหารตามสั่ง'
    },
{
      name: 'ฟาสต์ฟู้ด'
    },
{
      name: 'แฮมเบอร์เกอร์'
    },
{
      name: 'ชากาแฟ'
    },
{
      name: 'ขนมขบเคี้ยว'
    },
{
      name: 'อาหารเส้น'
    },
{
      name: 'ข้าวหน้า'
    },
{
      name: 'อาหารสุขภาพ'
    },
{
      name: 'เบเกอรี่'
    },
{
      name: 'ชานมไข่มุก'
    },
{
      name: 'ยำ'
    },
{
      name: 'น้ำผลไม้'
    },
{
      name: 'อาหารอีสาน'
    },
{
      name: 'ปิ้งย่าง'
    },
{
      name: 'พิซซ่า'
    },
{
      name: 'อาหารทะเล'
    },
{
      name: 'สเต๊ก'
    },
{
      name: 'ข้าวมันไก่'
    },
{
      name: 'ชาบู/สุกี้'
    },
{
      name: 'ไอศกรีม'
    },
{
      name: 'ซูชิ'
    },
{
      name: 'ราเมน'
    },
{
      name: 'ไก่ทอด'
    },

    ]
  });
// Seed Allergens
    const allerData =  await prisma.allergen.createMany({
    data: [
{
      name: 'นมวัว',
      description: 'หน้าบวม ปากบวมแดง ลมพิษ อาเจียนมาก มีผื่นขึ้นตามใบหน้าหรือตามตัว บางรายถ่ายเป็นเลือดปนมูก ท้องเสียเรื้อรัง หรือหวัดเรื้อรัง'
    },
{
      name: 'ถั่วเหลือง',
      description: 'เป็นอาการที่ร้ายแรงมาก อาการหลักๆ จะได้แก่ รู้สึกมึนงง หายใจมีเสียงวี๊ด แน่นหน้าอก'
    },
{
      name: 'ไข่',
      description: 'การแพ้ไข่มีอาการได้ทั้งแบบเฉียบพลัน เช่น ผื่นลมพิษ ตาบวม ปากบวม หลอดลมอุดตัน ปวดท้อง ถ่ายเหลว อาเจียน จนถึงแพ้แบบรุนแรงได้'
    },
{
      name: 'อาหารทะเล',
      description: 'การแพ้อาหารทะเลรุนแรง คอบวมจนปิดกั้นทางเดินหายใจ ชีพจรเต้นเร็ว วิงเวียนศีรษะ คล้ายจะเป็นลม ช็อก'
    },
{
      name: 'แป้งสาลี',
      description: 'ผู้ป่วยจะมีอาการท้องเสียเล็กน้อย แต่ถ้าตรวจพบช้าจะถ่ายเป็นมันลอย ดูดซึมสารอาหารไม่ได้ น้ำหนักลด ร่างกายขาดสารหาร'
    },
{
      name: 'ข้าวโพด',
      description: 'ส่วนใหญ่ มักไม่รุนแรง ผู้ป่วยจะรู้สึกไม่สบายเล็กน้อย ซึ่งโดยปกติจะค่อยๆ หายไปภายในสองสามชั่วโมง'
    }
    ]
  });
 // Seed Stores
    const storeData =   await prisma.store.createMany({
    data: [
{
      userId: 51,
      storeName: 'Yana Restaurant',
      storeAddress: '5A - 05 444 ถนนพญาไท อาคารเอ็ม บี เค เซ็นเตอร์ ชั้น 5 ห้อง 5เอ-05 444 Phaya Thai Rd, Wang Mai, Pathum Wan, Bangkok 10330, Thailand',
      storeDetails: 'ร้านอาหารไทยและคาเฟ่ที่มีเมนูอาหารหลากหลาย ทั้งอาหารไทยและฟิวชั่น บรรยากาศเรียบง่ายเป็นกันเอง',
      status: "OPEN",
      phoneNumber: '0879473710',
      timeOpen: '2023-01-01T7:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.744866,
      longitude: 100.5297873
    },
{
      userId: 52,
      storeName: 'Samsen Villa - Phyathai',
      storeAddress: '49/2 Set Siri Rd, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารไทยที่ตั้งอยู่ใกล้สถานีรถไฟฟ้าพญาไท บรรยากาศดี มีเมนูไทยโบราณและอาหารไทยฟิวชั่น',
      status: "OPEN",
      phoneNumber: '0817424838',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T20:00:00:00',
      latitude: 13.7806484,
      longitude: 100.5318687
    },
{
      userId: 53,
      storeName: 'Lhao Lhao',
      storeAddress: '1271 7 Phahonyothin Rd, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารเล็ก ๆ ที่มีบรรยากาศอบอุ่น เสิร์ฟเมนูอาหารไทยรสชาติเข้มข้น',
      status: "OPEN",
      phoneNumber: '0896413108',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7820964,
      longitude: 100.5453428
    },
{
      userId: 54,
      storeName: 'Ongtong Khaosoi Ari Branch',
      storeAddress: '31 Phahonyothin Soi 7, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านข้าวซอยเจ้าดังจากเชียงใหม่ มีสาขาในกรุงเทพฯ พร้อมเสิร์ฟข้าวซอยรสชาติเข้มข้น',
      status: "OPEN",
      phoneNumber: '0867376208',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.7811784,
      longitude: 100.5443825
    },
{
      userId: 55,
      storeName: 'Cantina Italian Kitchen (Ari)',
      storeAddress: '142 Rama VI Soi 30, Samsen Nai, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารอิตาเลียนที่บรรยากาศสบาย ๆ พร้อมเมนูพิซซ่าและพาสต้าแสนอร่อย',
      status: "OPEN",
      phoneNumber: '0887300138',
      timeOpen: '2023-01-01T22:00:00:00',
      timeClose: '2023-01-01T7:00:00:00',
      latitude: 13.7784803,
      longitude: 100.538545
    },
{
      userId: 56,
      storeName: 'Soei',
      storeAddress: 'Phibun Watthana 6 Alley, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารชื่อดังที่เน้นเมนูไทยรสชาติจัดจ้านและมีความเป็นเอกลักษณ์',
      status: "OPEN",
      phoneNumber: '0838808765',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7853841,
      longitude: 100.5364243
    },
{
      userId: 57,
      storeName: 'Rosabieng',
      storeAddress: '102/5 Set Siri Rd, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารไทยที่ให้บรรยากาศร่มรื่นและอบอุ่น มีเมนูไทยหลากหลายให้เลือก',
      status: "OPEN",
      phoneNumber: '0836459286',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.7787903,
      longitude: 100.5301276
    },
{
      userId: 58,
      storeName: 'Baan Pueng Chom',
      storeAddress: '38 Phahon Yothin 7, แขวง พญาไท Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารไทยสไตล์บ้าน มีบรรยากาศสบาย ๆ และเน้นการใช้วัตถุดิบสดใหม่',
      status: "OPEN",
      phoneNumber: '0878468608',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.7827638,
      longitude: 100.544084
    },
{
      userId: 59,
      storeName: 'JONG DIMSUM',
      storeAddress: '524, 4 Phahonyothin Rd, Samsen Nai, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านติ่มซำที่มีเมนูหลากหลาย ทั้งซาลาเปา เกี๊ยว และขนมจีบ พร้อมบรรยากาศเป็นกันเอง',
      status: "OPEN",
      phoneNumber: '0813565286',
      timeOpen: '2023-01-01T22:00:00:00',
      timeClose: '2023-01-01T7:00:00:00',
      latitude: 13.7892582,
      longitude: 100.5482364
    },
{
      userId: 60,
      storeName: 'Porwa Northern Thai Cuisine',
      storeAddress: '69/34 Phaya Thai Rd, Thanon Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารไทยเหนือที่มีเมนูเด่นเช่น ข้าวซอย น้ำเงี้ยว และอาหารพื้นบ้านเหนือ',
      status: "OPEN",
      phoneNumber: '0879005322',
      timeOpen: '2023-01-01T7:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7549082,
      longitude: 100.5340859
    },
{
      userId: 61,
      storeName: 'Rose Apple Cuisine',
      storeAddress: '28 Soi Phahon Yothin 6, Samsen Nai, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารที่เน้นเมนูไทยประยุกต์ ท่ามกลางบรรยากาศสบาย ๆ เหมาะสำหรับการนั่งชิลล์',
      status: "OPEN",
      phoneNumber: '0891353556',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7802578,
      longitude: 100.5459707
    },
{
      userId: 62,
      storeName: 'Paknang.bkk',
      storeAddress: '2/23, 5 Phahon Yothin 7, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารที่นำเสนอเมนูอาหารพื้นบ้านปักษ์ใต้ รสชาติจัดจ้านเหมือนต้นตำรับ',
      status: "OPEN",
      phoneNumber: '0895260023',
      timeOpen: '2023-01-01T22:00:00:00',
      timeClose: '2023-01-01T7:00:00:00',
      latitude: 13.7835893,
      longitude: 100.5417191
    },
{
      userId: 63,
      storeName: 'Kalyana Restaurant',
      storeAddress: '110, 112 Ratchaprarop Rd, Khwaeng Makkasan, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารไทยดั้งเดิม บรรยากาศดี มีทั้งอาหารไทยและอาหารนานาชาติ',
      status: "OPEN",
      phoneNumber: '0817947412',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T20:00:00:00',
      latitude: 13.7545787,
      longitude: 100.5419686
    },
{
      userId: 64,
      storeName: 'Flow',
      storeAddress: '21 Si Fa Alley, Samsen Nai, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารที่ตั้งอยู่ริมแม่น้ำ มีเมนูอาหารหลากหลายจากทั่วโลกและบรรยากาศโรแมนติก',
      status: "OPEN",
      phoneNumber: '0876414708',
      timeOpen: '2023-01-01T7:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7861683,
      longitude: 100.5455768
    },
{
      userId: 65,
      storeName: 'Baby Bar Bangkok',
      storeAddress: 'Craftsman Hotel 1st Floor, 34-36 Soi Phahonyothin, 11 Phahonyothin Rd, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านบาร์และคาเฟ่ที่ออกแบบให้เป็นมิตรกับครอบครัวและเด็ก',
      status: "OPEN",
      phoneNumber: '0869185872',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7876502,
      longitude: 100.5448841
    },
{
      userId: 66,
      storeName: 'Phayathai Kitchen',
      storeAddress: '63 63 Phetchaburi 7 Alley, Thung Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารไทยรสชาติเข้มข้น ตั้งอยู่ในย่านพญาไท',
      status: "OPEN",
      phoneNumber: '0856903630',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7556434,
      longitude: 100.5299517
    },
{
      userId: 67,
      storeName: 'Joha',
      storeAddress: '111/1 7 Phahonyothin Rd, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารเกาหลีสไตล์บ้านๆ มีเมนูหลากหลาย เช่น บูลโกกิ กิมจิ และบิบิมบับ',
      status: "OPEN",
      phoneNumber: '0826541435',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.782599,
      longitude: 100.5428085
    },
{
      userId: 68,
      storeName: 'Prik-Yuak',
      storeAddress: '108 Pradiphat Rd, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารไทยสไตล์ดั้งเดิม เน้นรสชาติอาหารที่จัดจ้าน',
      status: "OPEN",
      phoneNumber: '0886842373',
      timeOpen: '2023-01-01T7:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7916403,
      longitude: 100.5385589
    },
{
      userId: 69,
      storeName: 'Amaya Food Gallery at Amari Bangkok',
      storeAddress: '847 Petchburi Road, Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารที่มีการนำเสนอเมนูจากทั่วโลก ในบรรยากาศหรูหราและทันสมัย',
      status: "OPEN",
      phoneNumber: '0849272594',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T20:00:00:00',
      latitude: 13.751302,
      longitude: 100.540244
    },
{
      userId: 70,
      storeName: 'Always Sunday Cafeteria',
      storeAddress: '23/1 Si Fa Alley, Samsen Nai, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'คาเฟ่ที่มีเมนูอาหารหลากหลาย และบรรยากาศที่อบอุ่น',
      status: "OPEN",
      phoneNumber: '0815119235',
      timeOpen: '2023-01-01T10:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7861628,
      longitude: 100.5456817
    },
{
      userId: 71,
      storeName: 'The Bangkok Heritage',
      storeAddress: '2 Phaya Thai Rd, Thung Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารที่เน้นอาหารไทยแท้ และการบริการที่ดี',
      status: "OPEN",
      phoneNumber: '0896425200',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7553756,
      longitude: 100.5327609
    },
{
      userId: 72,
      storeName: 'Hungry Nerd',
      storeAddress: '89/70 Phaya Thai Rd, Thanon Phetchaburi, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านที่เสิร์ฟเมนูฟาสต์ฟู้ดและของว่าง',
      status: "OPEN",
      phoneNumber: '0871984669',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.7517779,
      longitude: 100.5318346
    },
{
      userId: 73,
      storeName: 'Eat Am Are',
      storeAddress: 'อาคารเซ็นจูรี่ ชั้น 3 ห้องเลขที่ 318 Phaya Thai Rd, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารที่มีเมนูไทยหลากหลาย',
      status: "OPEN",
      phoneNumber: '0890776352',
      timeOpen: '2023-01-01T7:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7617868,
      longitude: 100.5372314
    },
{
      userId: 74,
      storeName: 'Shree Bhavan Pure South Indian Vegetarian Restaurant',
      storeAddress: '120 Pratunam Market, 45 Ratchaprarop Rd, Thanon Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านมังสวิรัติอาหารอินเดียใต้',
      status: "OPEN",
      phoneNumber: '0875516124',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.7541381,
      longitude: 100.5406141
    },
{
      userId: 75,
      storeName: 'Pasta Ama Ratchathewi',
      storeAddress: 'ชั้น 1, ยิ้มแย้ม โฮสเทล, 503/3 Phaya Thai Rd, Thanon Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านที่เน้นเมนูพาสต้าและอาหารอิตาเลียน',
      status: "OPEN",
      phoneNumber: '0895430496',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7531332,
      longitude: 100.5325551
    },
{
      userId: 76,
      storeName: 'มันจอมเอ ปิ้งย่างเกาหลี',
      storeAddress: '89/70 Room A6 CocoWalk Ratchathewi, Phaya Thai Rd, Thanon Phetchaburi, Rajthawei, Bangkok 10400, Thailand',
      storeDetails: 'ร้านปิ้งย่างเกาหลีที่มีรสชาติอร่อย',
      status: "OPEN",
      phoneNumber: '0888558148',
      timeOpen: '2023-01-01T22:00:00:00',
      timeClose: '2023-01-01T7:00:00:00',
      latitude: 13.7514418,
      longitude: 100.532329
    },
{
      userId: 77,
      storeName: 'Signature Bangkok',
      storeAddress: '11th floor, Vie Hotel Bangkok MGallery Hotel Collection, 117/39-40 Phaya Thai Rd, Khwaeng Thanon Phetchaburi, Khet Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านอาหารที่มีการตกแต่งสวยงามและเมนูอาหารระดับพรีเมียม',
      status: "OPEN",
      phoneNumber: '0876688896',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7504915,
      longitude: 100.5319807
    },
{
      userId: 78,
      storeName: 'Thailicious Thai Restaurant',
      storeAddress: '120/9-10 Ratchaprarop Rd, Thanon Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'ร้านที่เสิร์ฟอาหารไทยในบรรยากาศอบอุ่น',
      status: "OPEN",
      phoneNumber: '0891252229',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.7540908,
      longitude: 100.5418637
    },
{
      userId: 79,
      storeName: 'Amaya Food Gallery at Amari Bangkok',
      storeAddress: '847 Petchburi Road, Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'This restaurant features a diverse range of Thai and international dishes, focusing on fresh ingredients and a contemporary dining experience.',
      status: "OPEN",
      phoneNumber: '0848209207',
      timeOpen: '2023-01-01T10:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.751302,
      longitude: 100.540244
    },
{
      userId: 80,
      storeName: 'Red Istanbul Turkish Restaurant Halal food Bangkok (Kebab & Grill)',
      storeAddress: '497/12 Phetchaburi Rd, Khwaeng Thung Phaya Thai, Khet Ratchathewi, Krung Thep Maha Nakhon 10400, Thailand',
      storeDetails: 'Specializes in authentic Turkish cuisine, including kebabs and traditional dishes, ensuring halal options for guests.',
      status: "OPEN",
      phoneNumber: '0893970068',
      timeOpen: '2023-01-01T7:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7537971,
      longitude: 100.5306873
    },
{
      userId: 81,
      storeName: 'Porwa Northern Thai Cuisine',
      storeAddress: '69/34 Phaya Thai Rd, Thanon Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'Offers a taste of northern Thai dishes with a focus on local ingredients and traditional recipes.',
      status: "OPEN",
      phoneNumber: '0840072978',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.7549082,
      longitude: 100.5340859
    },
{
      userId: 82,
      storeName: 'Chotivala 100% Pure Vegetarian & Jain Food Indian Restaurant',
      storeAddress: '120/24 Ratchaprarop Rd, Thanon Phaya Thai, Ratchathewi, Bangkok 10400, Thailand',
      storeDetails: 'A vegetarian restaurant that caters to Jain dietary restrictions, offering a variety of Indian dishes.',
      status: "OPEN",
      phoneNumber: '0897021880',
      timeOpen: '2023-01-01T22:00:00:00',
      timeClose: '2023-01-01T7:00:00:00',
      latitude: 13.7539488,
      longitude: 100.5414128
    },
{
      userId: 83,
      storeName: 'Thestaycafe Indian Touch',
      storeAddress: '72/1, Rajprarop road Ratchathewi, Phaya Thai, Bangkok 10400, Thailand',
      storeDetails: 'Combines Indian flavors with a modern cafe setting, providing a range of Indian dishes.',
      status: "OPEN",
      phoneNumber: '0827936949',
      timeOpen: '2023-01-01T10:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7592295,
      longitude: 100.5423447
    },
{
      userId: 84,
      storeName: 'Boon Tong Kee บุญตงกี่',
      storeAddress: '69, 69/1-2 Pradit Manutham Rd, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'ร้านไก่ฮ่องกงที่มีชื่อเสียง.',
      status: "OPEN",
      phoneNumber: '0895882661',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.8029223,
      longitude: 100.6147859
    },
{
      userId: 85,
      storeName: 'MAMA YAYA Restaurant',
      storeAddress: '53 Soi Nak Niwat 16, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'อาหารไทยและนานาชาติ.',
      status: "OPEN",
      phoneNumber: '0847242515',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T20:00:00:00',
      latitude: 13.807233,
      longitude: 100.6131998
    },
{
      userId: 86,
      storeName: 'Nanalee korean BBQ',
      storeAddress: '55 Thanon Sena Nikhom 1, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'BBQ เกาหลีในบรรยากาศสบาย.',
      status: "OPEN",
      phoneNumber: '0863600680',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T20:00:00:00',
      latitude: 13.831794,
      longitude: 100.5919799
    },
{
      userId: 87,
      storeName: 'Vinifera',
      storeAddress: '199 Chok Chai 4 Soi 54, Khwaeng Lat Phrao, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'ร้านไวน์และอาหารที่มีรสชาติดี.',
      status: "OPEN",
      phoneNumber: '0842810982',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.8165236,
      longitude: 100.6049994
    },
{
      userId: 88,
      storeName: 'Paesano Italian Restaurant',
      storeAddress: '63 Nak Niwat Rd, Khwaeng Lat Phrao, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'อาหารอิตาเลียนแท้ในบรรยากาศสบาย.',
      status: "OPEN",
      phoneNumber: '0818541383',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7990511,
      longitude: 100.6066446
    },
{
      userId: 89,
      storeName: 'Fullmoon Terrace & Bar',
      storeAddress: '614 Lad Prao Wanghin Rd, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'ร้านบาร์ที่มีวิวพระจันทร์สวย.',
      status: "OPEN",
      phoneNumber: '0886906045',
      timeOpen: '2023-01-01T22:00:00:00',
      timeClose: '2023-01-01T7:00:00:00',
      latitude: 13.8191507,
      longitude: 100.5930227
    },
{
      userId: 90,
      storeName: 'The Jar Restaurant',
      storeAddress: '614 Lad Prao Wanghin Rd, Khwaeng Lat Phrao, Khet Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'อาหารไทยในบรรยากาศอบอุ่น.',
      status: "OPEN",
      phoneNumber: '0864474945',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.81938,
      longitude: 100.5928941
    },
{
      userId: 91,
      storeName: 'ครัวคุณต๋อย เพลส',
      storeAddress: 'RJ69+XH6, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'อาหารไทยในบรรยากาศที่เป็นกันเอง.',
      status: "OPEN",
      phoneNumber: '0837876182',
      timeOpen: '2023-01-01T10:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.8124049,
      longitude: 100.6188908
    },
{
      userId: 92,
      storeName: 'Staneemeehoi',
      storeAddress: '11 Prasert-Manukitch Rd, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'ร้านอาหารที่มีเมนูหลากหลาย.',
      status: "OPEN",
      phoneNumber: '0818317381',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T21:30:00:00',
      latitude: 13.8266809,
      longitude: 100.6260796
    },
{
      userId: 93,
      storeName: 'CQK Mala Hot Pot เดอะคริสตัล',
      storeAddress: 'RJ69+RR5, Soi Mu Ban Crystal Park The Luxury Living, Khwaeng Lat Phrao, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'ร้านสุกี้หม่าล่าที่มีชื่อเสียง.',
      status: "OPEN",
      phoneNumber: '0825206573',
      timeOpen: '2023-01-01T10:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.8120303,
      longitude: 100.6195917
    },
{
      userId: 94,
      storeName: 'Mae Mungkorn Seafood Buffet Ladprao 87',
      storeAddress: '449 Lat Phrao 87 Alley, Lane 9, Khlong Chaokhun Sing, Wang Thonglang, Bangkok 10310, Thailand',
      storeDetails: 'บุฟเฟ่ต์อาหารทะเลที่มีให้เลือกมากมาย เหมาะสำหรับกลุ่มใหญ่',
      status: "OPEN",
      phoneNumber: '0816444428',
      timeOpen: '2023-01-01T7:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7930908,
      longitude: 100.6188049
    },
{
      userId: 95,
      storeName: 'ช้อนหมูกรอบชาชู - Chonmookrob',
      storeAddress: 'ยูนิต LB11, เลขที่ 456/17 ถนนศรีวรา, Lat Phrao 94 Alley, Phlabphla, Wang Thonglang, Bangkok 10310, Thailand',
      storeDetails: 'เชี่ยวชาญในอาหารจากหมูกรอบและฟิวชั่นเอเชีย',
      status: "OPEN",
      phoneNumber: '0865652212',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7693313,
      longitude: 100.6063064
    },
{
      userId: 96,
      storeName: 'All About Fish สาขา ลาดพร้าว 50',
      storeAddress: 'Wang Thonglang, Lat Phrao, Bangkok 10900, Thailand',
      storeDetails: 'ร้านอาหารที่เน้นอาหารทะเลสด',
      status: "OPEN",
      phoneNumber: '0824557002',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7963206,
      longitude: 100.5907578
    },
{
      userId: 97,
      storeName: 'Bluetamp Cafe',
      storeAddress: '56 Soi Lat Phrao 73, Saphansong, Wang Thonglang, Bangkok 10310, Thailand',
      storeDetails: 'คาเฟ่ทันสมัยที่มีเมนูกาแฟและอาหารเบา',
      status: "OPEN",
      phoneNumber: '0854061728',
      timeOpen: '2023-01-01T6:00:00:00',
      timeClose: '2023-01-01T14:30:00:00',
      latitude: 13.7884057,
      longitude: 100.6090293
    },
{
      userId: 98,
      storeName: 'Pia Restaurant',
      storeAddress: '17 Lat Phrao Rd, Wang Thonglang, Bangkok 10310, Thailand',
      storeDetails: 'มีเมนูที่หลากหลาย โดยเน้นที่วัตถุดิบคุณภาพ',
      status: "OPEN",
      phoneNumber: '0865510887',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T20:00:00:00',
      latitude: 13.7905466,
      longitude: 100.599765
    },
{
      userId: 99,
      storeName: 'TSUKEMEN GO GO TOPS NAKNIWAS',
      storeAddress: '1 Nak Niwat Rd, Lat Phrao, Bangkok 10230, Thailand',
      storeDetails: 'เชี่ยวชาญในการทำซุเคเมน (บะหมี่จุ่ม)',
      status: "OPEN",
      phoneNumber: '0863537134',
      timeOpen: '2023-01-01T11:00:00:00',
      timeClose: '2023-01-01T20:00:00:00',
      latitude: 13.7958123,
      longitude: 100.6067683
    },
{
      userId: 100,
      storeName: 'เจริญรสชาบู บุฟเฟ่ต์ สาขาThe Scene (เดอะซีน ทาวน์ อิน ทาวน์)',
      storeAddress: '1323 Lat Phrao 94 Alley, Phlabphla, Wang Thonglang, Bangkok 10310, Thailand',
      storeDetails: 'บุฟเฟ่ต์ชาบูที่มีให้เลือกมากมาย',
      status: "OPEN",
      phoneNumber: '0819536280',
      timeOpen: '2023-01-01T7:00:00:00',
      timeClose: '2023-01-01T21:00:00:00',
      latitude: 13.7732186,
      longitude: 100.6102778
    }
    ]
  });
  
     // Seed Products
    const productData =  await prisma.product.createMany({
      data: [
  {
        storeId: 1,
        name: 'ผัดซีอิ๊ว',
        description: 'ผัดซีอิ๊ว รสชาติเข้มข้น อร่อยจนต้องลองจาก Yana Restaurant',
        originalPrice: 120,
        salePrice: 50,
        imageUrl: 'https://yalamarketplace.com/upload/1648731671847.png',
        quantity: 1
      },
  {
        storeId: 1,
        name: 'กระเพราไข่ดาว',
        description: 'กระเพราไข่ดาว รสชาติเข้มข้น อร่อยจนต้องลองจาก Yana Restaurant',
        originalPrice: 115,
        salePrice: 45,
        imageUrl: 'https://www.thaifranchisecenter.com/document/market/picture/document_8075_p4_20230622155207.jpg',
        quantity: 7
      },
  {
        storeId: 1,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวผัดหมู รสชาติเข้มข้น อร่อยจนต้องลองจาก Yana Restaurant',
        originalPrice: 200,
        salePrice: 65,
        imageUrl: 'https://www.naibann.com/wp-content/uploads/2015/09/k6.jpg',
        quantity: 7
      },
  {
        storeId: 1,
        name: 'ส้มตำไทย',
        description: 'ส้มตำรสเปรี้ยวหวานเผ็ด จัดจ้านแบบไทยแท้',
        originalPrice: 255,
        salePrice: 90,
        imageUrl: 'https://i.ytimg.com/vi/VW1d9Zj_bMA/sddefault.jpg',
        quantity: 5
      },
  {
        storeId: 1,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Yana Restaurant',
        originalPrice: 215,
        salePrice: 65,
        imageUrl: 'https://img-global.cpcdn.com/recipes/8bba4878226e4b9f/1200x630cq70/photo.jpg',
        quantity: 10
      },
  {
        storeId: 2,
        name: 'ผัดซีอิ๊ว',
        description: 'ผัดซีอิ๊ว รสชาติเข้มข้น อร่อยจนต้องลองจาก Samsen Villa - Phyathai',
        originalPrice: 200,
        salePrice: 80,
        imageUrl: 'https://yalamarketplace.com/upload/1648731671847.png',
        quantity: 1
      },
  {
        storeId: 2,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Samsen Villa - Phyathai',
        originalPrice: 110,
        salePrice: 25,
        imageUrl: 'https://img-global.cpcdn.com/recipes/8bba4878226e4b9f/1200x630cq70/photo.jpg',
        quantity: 10
      },
  {
        storeId: 2,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวผัดหมู รสชาติเข้มข้น อร่อยจนต้องลองจาก Samsen Villa - Phyathai',
        originalPrice: 105,
        salePrice: 50,
        imageUrl: 'https://www.naibann.com/wp-content/uploads/2015/09/k6.jpg',
        quantity: 8
      },
  {
        storeId: 2,
        name: 'ส้มตำไทย',
        description: 'ส้มตำรสเปรี้ยวหวานเผ็ด จัดจ้านแบบไทยแท้',
        originalPrice: 120,
        salePrice: 30,
        imageUrl: 'https://i.ytimg.com/vi/VW1d9Zj_bMA/sddefault.jpg',
        quantity: 9
      },
  {
        storeId: 2,
        name: 'กระเพราไข่ดาว',
        description: 'กระเพราไข่ดาว รสชาติเข้มข้น อร่อยจนต้องลองจาก Samsen Villa - Phyathai',
        originalPrice: 70,
        salePrice: 30,
        imageUrl: 'https://www.thaifranchisecenter.com/document/market/picture/document_8075_p4_20230622155207.jpg',
        quantity: 3
      },
  {
        storeId: 3,
        name: 'ซูชิกุ้ง',
        description: 'ซูชิกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 210,
        salePrice: 75,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030040_9.jpg',
        quantity: 3
      },
  {
        storeId: 3,
        name: 'สุกี้น้ำทะเลรวม',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 275,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 3,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 3,
        name: 'ซูชิแซลมอน',
        description: 'ซูชิแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 150,
        salePrice: 55,
        imageUrl: 'https://allianz-assistance.co.th/travel/wp-content/uploads/2023/12/salmon-01-768.jpg',
        quantity: 5
      },
  {
        storeId: 3,
        name: 'ซูชิทูน่า',
        description: 'ซูชิทูน่า รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030038_11.jpg',
        quantity: 1
      },
  {
        storeId: 4,
        name: 'นักเก็ตไก่',
        description: 'นักเก็ตไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Findicafebingsu ร้านอาหาร ฟินดิคาเฟ่บิงซู คาเฟ่ลับ อาหารหลากหลาย บรรยากาศติดคลองใหญ่ เปิด 9.00 - 21.00',
        originalPrice: 215,
        salePrice: 75,
        imageUrl: 'https://www.sgethai.com/wp-content/w3-webp/uploads/2022/09/5-13.jpgw3.webp',
        quantity: 10
      },
  {
        storeId: 4,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวผัดหมู รสชาติเข้มข้น อร่อยจนต้องลองจาก Turbine Cafe Nongchok',
        originalPrice: 270,
        salePrice: 70,
        imageUrl: 'https://www.naibann.com/wp-content/uploads/2015/09/k6.jpg',
        quantity: 6
      },
  {
        storeId: 4,
        name: 'กาแฟเย็น',
        description: 'กาแฟเย็น รสชาติเข้มข้น อร่อยจนต้องลองจาก Chunjie 春节 ชุนเจี๋ย หม่าล่า มาสเตอร์',
        originalPrice: 130,
        salePrice: 55,
        imageUrl: 'https://img.kapook.com/u/2016/surauch/Health/coffee7_1.jpg',
        quantity: 9
      },
  {
        storeId: 4,
        name: 'สปาเก็ตตี้ซอสมะเขือเทศ',
        description: 'สปาเก็ตตี้ซอสมะเขือเทศ รสชาติเข้มข้น อร่อยจนต้องลองจาก Findicafebingsu ร้านอาหาร ฟินดิคาเฟ่บิงซู คาเฟ่ลับ อาหารหลากหลาย บรรยากาศติดคลองใหญ่ เปิด 9.00 - 21.00',
        originalPrice: 135,
        salePrice: 50,
        imageUrl: 'https://img-global.cpcdn.com/recipes/983cd789624dab49/1200x630cq70/photo.jpg',
        quantity: 2
      },
  {
        storeId: 4,
        name: 'ผัดซีอิ๊ว',
        description: 'ผัดซีอิ๊ว รสชาติเข้มข้น อร่อยจนต้องลองจาก ครัวคุณเจี๊ยบ',
        originalPrice: 165,
        salePrice: 65,
        imageUrl: 'https://yalamarketplace.com/upload/1648731671847.png',
        quantity: 1
      },
  {
        storeId: 5,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวผัดหมู รสชาติเข้มข้น อร่อยจนต้องลองจาก Yana Restaurant',
        originalPrice: 200,
        salePrice: 65,
        imageUrl: 'https://www.naibann.com/wp-content/uploads/2015/09/k6.jpg',
        quantity: 7
      },
  {
        storeId: 5,
        name: 'กระเพราไข่ดาว',
        description: 'กระเพราไข่ดาว รสชาติเข้มข้น อร่อยจนต้องลองจาก Samsen Villa - Phyathai',
        originalPrice: 70,
        salePrice: 30,
        imageUrl: 'https://www.thaifranchisecenter.com/document/market/picture/document_8075_p4_20230622155207.jpg',
        quantity: 3
      },
  {
        storeId: 5,
        name: 'ชาไทย',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 215,
        salePrice: 95,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 5,
        name: 'หมูสามชั้นชาบู',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 235,
        salePrice: 85,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 7
      },
  {
        storeId: 5,
        name: 'ไอศกรีมกะทิทรงเครื่อง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 235,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 6,
        name: 'สเต๊กหมูพอร์คชอป',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 55,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 6,
        name: 'ชีสเค้กญี่ปุ่น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 175,
        salePrice: 65,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 10
      },
  {
        storeId: 6,
        name: 'สเต๊กปลาแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 135,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 3
      },
  {
        storeId: 6,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 6,
        name: 'ส้มตำไทย',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 120,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 4
      },
  {
        storeId: 7,
        name: 'ไอศกรีมกะทิทรงเครื่อง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 235,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 7,
        name: 'ไอศกรีมรสช็อกโกแลตมะพร้าว',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 50,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 2
      },
  {
        storeId: 7,
        name: 'ราเมนโชยุ',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 195,
        salePrice: 90,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 8
      },
  {
        storeId: 7,
        name: 'มิโซะราเมน',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 7,
        name: 'กระเพราไข่ดาว',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 250,
        salePrice: 85,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 8,
        name: 'เบอร์เกอร์เนื้อ',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 95,
        salePrice: 25,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 8
      },
  {
        storeId: 8,
        name: 'เบอร์เกอร์หมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 210,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 10
      },
  {
        storeId: 8,
        name: 'เบอร์เกอร์ไก่',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 120,
        salePrice: 40,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 8
      },
  {
        storeId: 8,
        name: 'ดับเบิ้ลเบอร์เกอร์',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 110,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 7
      },
  {
        storeId: 8,
        name: 'ชีสเบอร์เกอร์',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 110,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 6
      },
  {
        storeId: 9,
        name: 'ลาเต้',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 75,
        salePrice: 20,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 9,
        name: 'กาแฟเย็น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 2
      },
  {
        storeId: 9,
        name: 'มัทฉะลาเต้ไข่มุก',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 75,
        salePrice: 25,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 3
      },
  {
        storeId: 9,
        name: 'ชาไทย',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 215,
        salePrice: 95,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 9,
        name: 'หมูสามชั้นชาบู',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 235,
        salePrice: 85,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 7
      },
  {
        storeId: 10,
        name: 'ชีสเบอร์เกอร์',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 110,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 6
      },
  {
        storeId: 10,
        name: 'พิซซ่าฮาวาเอียน',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 60,
        salePrice: 15,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 10,
        name: 'สปาเก็ตตี้ซอสมะเขือเทศ',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 80,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 9
      },
  {
        storeId: 10,
        name: 'ไก่ทอด',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 295,
        salePrice: 80,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 10,
        name: 'นักเก็ตไก่',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 170,
        salePrice: 70,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 3
      },
  {
        storeId: 11,
        name: 'ไอศกรีมรสช็อกโกแลตมะพร้าว',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 50,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 2
      },
  {
        storeId: 11,
        name: 'ราเมนโชยุ',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 195,
        salePrice: 90,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 8
      },
  {
        storeId: 11,
        name: 'มิโซะราเมน',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 11,
        name: 'กระเพราไข่ดาว',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 250,
        salePrice: 85,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 11,
        name: 'ผัดซีอิ๊ว',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 250,
        salePrice: 75,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 12,
        name: 'สเต๊กหมูพอร์คชอป',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 55,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 12,
        name: 'ชีสเค้กญี่ปุ่น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 175,
        salePrice: 65,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 10
      },
  {
        storeId: 12,
        name: 'สเต๊กปลาแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 135,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 3
      },
  {
        storeId: 12,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 12,
        name: 'ส้มตำไทย',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 120,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 4
      },
  {
        storeId: 13,
        name: 'น้ำส้มคั้นสด',
        description: 'เต้าหู้ย่างและผักสด หัวไชเท้า มะเขือเทศ และแครอท พร้อมน้ำสลัดงา',
        originalPrice: 300,
        salePrice: 150,
        imageUrl: 'https://www.ajinomoto.co.th//storage/photos/shares/Recipe/Leanlicious/Tofuteriyakisaucesalad/6324664e9734d.jpg',
        quantity: 7
      },
  {
        storeId: 13,
        name: 'กุ้งแม่น้ำย่างเกลือ',
        description: 'ซูชิแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 150,
        salePrice: 55,
        imageUrl: 'https://allianz-assistance.co.th/travel/wp-content/uploads/2023/12/salmon-01-768.jpg',
        quantity: 5
      },
  {
        storeId: 13,
        name: 'เห็ดรวมย่างเนยกระเทียม',
        description: 'ซูชิทูน่า รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030038_11.jpg',
        quantity: 1
      },
  {
        storeId: 13,
        name: 'ยำมาม่าทะเล',
        description: 'ซูชิกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 210,
        salePrice: 75,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030040_9.jpg',
        quantity: 3
      },
  {
        storeId: 13,
        name: 'ไส้กรอกหมูรมควันย่าง',
        description: 'เบอร์เกอร์เนื้อ รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านอาหารญี่ปุ่นโยชิ เดอะริช พลาซ่า บางบอน',
        originalPrice: 300,
        salePrice: 90,
        imageUrl: 'https://d1vs91ctevllei.cloudfront.net/images/product/1594018720072_MCD_Menu-Icon_600x400px_Alacarte_Triple-Beef-Cheese_Final.jpg',
        quantity: 5
      },
  {
        storeId: 14,
        name: 'สุกี้น้ำทะเลรวม',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 275,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 14,
        name: 'ข้าวหน้าไก่เทอริยากิ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 230,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 5
      },
  {
        storeId: 14,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 14,
        name: 'ข้าวหน้าเนื้อไข่ดอง',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 160,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 14,
        name: 'สลัดเต้าหู้ย่าง',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 270,
        salePrice: 85,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 3
      },
  {
        storeId: 15,
        name: 'ดับเบิ้ลเบอร์เกอร์',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 110,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 7
      },
  {
        storeId: 15,
        name: 'ชีสเบอร์เกอร์',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 110,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 6
      },
  {
        storeId: 15,
        name: 'พิซซ่าฮาวาเอียน',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 60,
        salePrice: 15,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 15,
        name: 'สปาเก็ตตี้ซอสมะเขือเทศ',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 80,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 9
      },
  {
        storeId: 15,
        name: 'ไก่ทอด',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 295,
        salePrice: 80,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 16,
        name: 'ข้าวหน้าไก่เทอริยากิ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 230,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 5
      },
  {
        storeId: 16,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 16,
        name: 'ข้าวหน้าเนื้อไข่ดอง',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 160,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 16,
        name: 'สลัดเต้าหู้ย่าง',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 270,
        salePrice: 85,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 3
      },
  {
        storeId: 16,
        name: 'ซูชิกุ้ง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 195,
        salePrice: 85,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 6
      },
  {
        storeId: 17,
        name: 'ผัดซีอิ๊ว',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 250,
        salePrice: 75,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 17,
        name: 'สเต๊กหมูพอร์คชอป',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 55,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 17,
        name: 'ชีสเค้กญี่ปุ่น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 175,
        salePrice: 65,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 10
      },
  {
        storeId: 17,
        name: 'สเต๊กปลาแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 135,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 3
      },
  {
        storeId: 17,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 18,
        name: 'ชีสเค้กญี่ปุ่น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 175,
        salePrice: 65,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 10
      },
  {
        storeId: 18,
        name: 'สเต๊กปลาแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 135,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 3
      },
  {
        storeId: 18,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 18,
        name: 'ส้มตำไทย',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 120,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 4
      },
  {
        storeId: 18,
        name: 'ชาเขียวมัทฉะ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 125,
        salePrice: 35,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 4
      },
  {
        storeId: 19,
        name: 'น้ำส้มคั้นสด',
        description: 'เต้าหู้ย่างและผักสด หัวไชเท้า มะเขือเทศ และแครอท พร้อมน้ำสลัดงา',
        originalPrice: 300,
        salePrice: 150,
        imageUrl: 'https://www.ajinomoto.co.th//storage/photos/shares/Recipe/Leanlicious/Tofuteriyakisaucesalad/6324664e9734d.jpg',
        quantity: 7
      },
  {
        storeId: 19,
        name: 'กุ้งแม่น้ำย่างเกลือ',
        description: 'ซูชิแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 150,
        salePrice: 55,
        imageUrl: 'https://allianz-assistance.co.th/travel/wp-content/uploads/2023/12/salmon-01-768.jpg',
        quantity: 5
      },
  {
        storeId: 19,
        name: 'เห็ดรวมย่างเนยกระเทียม',
        description: 'ซูชิทูน่า รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030038_11.jpg',
        quantity: 1
      },
  {
        storeId: 19,
        name: 'ยำมาม่าทะเล',
        description: 'ซูชิกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 210,
        salePrice: 75,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030040_9.jpg',
        quantity: 3
      },
  {
        storeId: 19,
        name: 'ไส้กรอกหมูรมควันย่าง',
        description: 'เบอร์เกอร์เนื้อ รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านอาหารญี่ปุ่นโยชิ เดอะริช พลาซ่า บางบอน',
        originalPrice: 300,
        salePrice: 90,
        imageUrl: 'https://d1vs91ctevllei.cloudfront.net/images/product/1594018720072_MCD_Menu-Icon_600x400px_Alacarte_Triple-Beef-Cheese_Final.jpg',
        quantity: 5
      },
  {
        storeId: 20,
        name: 'สุกี้น้ำทะเลรวม',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 275,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 20,
        name: 'ข้าวหน้าไก่เทอริยากิ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 230,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 5
      },
  {
        storeId: 20,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 20,
        name: 'ข้าวหน้าเนื้อไข่ดอง',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 160,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 20,
        name: 'โรลแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Bang Bon Bar - ဘန်ဘောဘား',
        originalPrice: 295,
        salePrice: 120,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 1
      },
  {
        storeId: 21,
        name: 'ป๊อปคอร์น',
        description: 'ป๊อปคอร์น รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 290,
        salePrice: 90,
        imageUrl: 'https://static.hd.co.th/system/blog_articles/main_hero_images/000/005/113/original/iStock-478626726_%281%29.jpg',
        quantity: 9
      },
  {
        storeId: 21,
        name: 'ข้าวเกรียบ',
        description: 'ข้าวเกรียบ รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 95,
        salePrice: 30,
        imageUrl: 'https://png.pngtree.com/thumb_back/fw800/background/20220605/pngtree-bag-of-freuds-shrimp-rice-cracker-snack-crunchy-crispy-and-spongy-cookie-delight-photo-image_30987152.jpg',
        quantity: 9
      },
  {
        storeId: 21,
        name: 'ครัวซองต์เนยสด',
        description: 'ครัวซองต์หอมกรุ่น กรอบนอกนุ่มใน',
        originalPrice: 300,
        salePrice: 100,
        imageUrl: 'https://s359.kapook.com/pagebuilder/37a6ec5e-712d-462c-9e2d-6b63c39e9777.jpg',
        quantity: 10
      },
  {
        storeId: 21,
        name: 'มันฝรั่งทอด',
        description: 'มันฝรั่งทอด รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://i.ytimg.com/vi/JgBfbzc1cKw/sddefault.jpg',
        quantity: 7
      },
  {
        storeId: 21,
        name: 'ผักอบกรอบ',
        description: 'ขนมอบกรอบ รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 235,
        salePrice: 100,
        imageUrl: 'https://media.thairath.co.th/image/BLagCXwIySE6oubfaan0eTpcWmLQVGierZcxODkP1Rwe9vA1.webp',
        quantity: 7
      },
  {
        storeId: 22,
        name: 'ข้าวมันไก่',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 55,
        salePrice: 20,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 1
      },
  {
        storeId: 22,
        name: 'สุกี้น้ำทะเลรวม',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 275,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 22,
        name: 'ข้าวหน้าไก่เทอริยากิ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 230,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 5
      },
  {
        storeId: 22,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 22,
        name: 'ข้าวหน้าเนื้อไข่ดอง',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 160,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 23,
        name: 'โรลแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Bang Bon Bar - ဘန်ဘောဘား',
        originalPrice: 295,
        salePrice: 120,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 1
      },
  {
        storeId: 23,
        name: 'สลัดเต้าหู้ย่าง',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 270,
        salePrice: 85,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 3
      },
  {
        storeId: 23,
        name: 'ซูชิแซลมอน',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Bang Bon Bar - ဘန်ဘောဘား',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 23,
        name: 'ซูชิทูน่า',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 260,
        salePrice: 100,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 6
      },
  {
        storeId: 23,
        name: 'ซูชิกุ้ง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 195,
        salePrice: 85,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 6
      },
  {
        storeId: 24,
        name: 'เบอร์เกอร์เนื้อ',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 95,
        salePrice: 25,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 8
      },
  {
        storeId: 24,
        name: 'เบอร์เกอร์หมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 210,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 10
      },
  {
        storeId: 24,
        name: 'เบอร์เกอร์ไก่',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 120,
        salePrice: 40,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 8
      },
  {
        storeId: 24,
        name: 'ดับเบิ้ลเบอร์เกอร์',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 110,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 7
      },
  {
        storeId: 24,
        name: 'ชีสเบอร์เกอร์',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 110,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 6
      },
  {
        storeId: 25,
        name: 'พิซซ่าฮาวาเอียน',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 60,
        salePrice: 15,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 25,
        name: 'สปาเก็ตตี้ซอสมะเขือเทศ',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 80,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 9
      },
  {
        storeId: 25,
        name: 'ไก่ทอด',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 295,
        salePrice: 80,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 25,
        name: 'นักเก็ตไก่',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 170,
        salePrice: 70,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 3
      },
  {
        storeId: 25,
        name: 'คาปูชิโน่',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 155,
        salePrice: 55,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 7
      },
  {
        storeId: 26,
        name: 'ลาเต้',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 75,
        salePrice: 20,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 26,
        name: 'กาแฟเย็น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 2
      },
  {
        storeId: 26,
        name: 'มัทฉะลาเต้ไข่มุก',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 75,
        salePrice: 25,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 3
      },
  {
        storeId: 26,
        name: 'ชาไทย',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 215,
        salePrice: 95,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 26,
        name: 'หมูสามชั้นชาบู',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 235,
        salePrice: 85,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 7
      },
  {
        storeId: 27,
        name: 'ไอศกรีมกะทิทรงเครื่อง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 235,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 27,
        name: 'ไอศกรีมรสช็อกโกแลตมะพร้าว',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 50,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 2
      },
  {
        storeId: 27,
        name: 'ราเมนโชยุ',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 195,
        salePrice: 90,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 8
      },
  {
        storeId: 27,
        name: 'มิโซะราเมน',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 27,
        name: 'กระเพราไข่ดาว',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 250,
        salePrice: 85,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 28,
        name: 'ผัดซีอิ๊ว',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 250,
        salePrice: 75,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 28,
        name: 'ขนมปังกรอบ',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 105,
        salePrice: 45,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 28,
        name: 'สเต๊กหมูพอร์คชอป',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 55,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 28,
        name: 'ชีสเค้กญี่ปุ่น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 175,
        salePrice: 65,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 10
      },
  {
        storeId: 28,
        name: 'สเต๊กปลาแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 135,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 3
      },
  {
        storeId: 29,
        name: 'โรลปูอัด',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 125,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 8
      },
  {
        storeId: 29,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 29,
        name: 'ส้มตำไทย',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 120,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 4
      },
  {
        storeId: 29,
        name: 'ชาเขียวมัทฉะ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 125,
        salePrice: 35,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 4
      },
  {
        storeId: 29,
        name: 'ชานมไต้หวันไข่มุกบราวน์ชูการ์',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 105,
        salePrice: 20,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 30,
        name: 'ลาบหมู',
        description: 'โรลแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 255,
        salePrice: 75,
        imageUrl: 'https://chillchilljapan.com/wp-content/uploads/2017/10/pixta_81151276_M-760x506.jpg',
        quantity: 6
      },
  {
        storeId: 30,
        name: 'น้ำส้มคั้นสด',
        description: 'เต้าหู้ย่างและผักสด หัวไชเท้า มะเขือเทศ และแครอท พร้อมน้ำสลัดงา',
        originalPrice: 300,
        salePrice: 150,
        imageUrl: 'https://www.ajinomoto.co.th//storage/photos/shares/Recipe/Leanlicious/Tofuteriyakisaucesalad/6324664e9734d.jpg',
        quantity: 7
      },
  {
        storeId: 30,
        name: 'กุ้งแม่น้ำย่างเกลือ',
        description: 'ซูชิแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 150,
        salePrice: 55,
        imageUrl: 'https://allianz-assistance.co.th/travel/wp-content/uploads/2023/12/salmon-01-768.jpg',
        quantity: 5
      },
  {
        storeId: 30,
        name: 'เห็ดรวมย่างเนยกระเทียม',
        description: 'ซูชิทูน่า รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030038_11.jpg',
        quantity: 1
      },
  {
        storeId: 30,
        name: 'ยำมาม่าทะเล',
        description: 'ซูชิกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 210,
        salePrice: 75,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030040_9.jpg',
        quantity: 3
      },
  {
        storeId: 31,
        name: 'โรลปูอัด',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 125,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 8
      },
  {
        storeId: 31,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 31,
        name: 'ส้มตำไทย',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 120,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 4
      },
  {
        storeId: 31,
        name: 'ชาเขียวมัทฉะ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 125,
        salePrice: 35,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 4
      },
  {
        storeId: 31,
        name: 'ชานมไต้หวันไข่มุกบราวน์ชูการ์',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 105,
        salePrice: 20,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 32,
        name: 'ผัดซีอิ๊ว',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 250,
        salePrice: 75,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 32,
        name: 'ขนมปังกรอบ',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 105,
        salePrice: 45,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 32,
        name: 'สเต๊กหมูพอร์คชอป',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 55,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 32,
        name: 'ชีสเค้กญี่ปุ่น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 175,
        salePrice: 65,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 10
      },
  {
        storeId: 32,
        name: 'สเต๊กปลาแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 135,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 3
      },
  {
        storeId: 33,
        name: 'ไอศกรีมกะทิทรงเครื่อง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 235,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 33,
        name: 'ไอศกรีมรสช็อกโกแลตมะพร้าว',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 50,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 2
      },
  {
        storeId: 33,
        name: 'ราเมนโชยุ',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 195,
        salePrice: 90,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 8
      },
  {
        storeId: 33,
        name: 'มิโซะราเมน',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 33,
        name: 'กระเพราไข่ดาว',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 250,
        salePrice: 85,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 34,
        name: 'ลาเต้',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 75,
        salePrice: 20,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 34,
        name: 'กาแฟเย็น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 2
      },
  {
        storeId: 34,
        name: 'มัทฉะลาเต้ไข่มุก',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 75,
        salePrice: 25,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 3
      },
  {
        storeId: 34,
        name: 'ชาไทย',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 215,
        salePrice: 95,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 34,
        name: 'หมูสามชั้นชาบู',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 235,
        salePrice: 85,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 7
      },
  {
        storeId: 35,
        name: 'พิซซ่าฮาวาเอียน',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 60,
        salePrice: 15,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 35,
        name: 'สปาเก็ตตี้ซอสมะเขือเทศ',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 80,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 9
      },
  {
        storeId: 35,
        name: 'ไก่ทอด',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 295,
        salePrice: 80,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 35,
        name: 'นักเก็ตไก่',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 170,
        salePrice: 70,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 3
      },
  {
        storeId: 35,
        name: 'คาปูชิโน่',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 155,
        salePrice: 55,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 7
      },
  {
        storeId: 36,
        name: 'เบอร์เกอร์เนื้อ',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 95,
        salePrice: 25,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 8
      },
  {
        storeId: 36,
        name: 'เบอร์เกอร์หมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 210,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 10
      },
  {
        storeId: 36,
        name: 'เบอร์เกอร์ไก่',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 120,
        salePrice: 40,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 8
      },
  {
        storeId: 36,
        name: 'ดับเบิ้ลเบอร์เกอร์',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 110,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 7
      },
  {
        storeId: 36,
        name: 'ชีสเบอร์เกอร์',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 110,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 6
      },
  {
        storeId: 37,
        name: 'โรลแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Bang Bon Bar - ဘန်ဘောဘား',
        originalPrice: 295,
        salePrice: 120,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 1
      },
  {
        storeId: 37,
        name: 'สลัดเต้าหู้ย่าง',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 270,
        salePrice: 85,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 3
      },
  {
        storeId: 37,
        name: 'ซูชิแซลมอน',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Bang Bon Bar - ဘန်ဘောဘား',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 37,
        name: 'ซูชิทูน่า',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 260,
        salePrice: 100,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 6
      },
  {
        storeId: 37,
        name: 'ซูชิกุ้ง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 195,
        salePrice: 85,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 6
      },
  {
        storeId: 38,
        name: 'ข้าวมันไก่',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 55,
        salePrice: 20,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 1
      },
  {
        storeId: 38,
        name: 'สุกี้น้ำทะเลรวม',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 275,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 38,
        name: 'ข้าวหน้าไก่เทอริยากิ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 230,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 5
      },
  {
        storeId: 38,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 38,
        name: 'ข้าวหน้าเนื้อไข่ดอง',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 160,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 39,
        name: 'ไส้กรอกหมูรมควันย่าง',
        description: 'เบอร์เกอร์เนื้อ รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านอาหารญี่ปุ่นโยชิ เดอะริช พลาซ่า บางบอน',
        originalPrice: 300,
        salePrice: 90,
        imageUrl: 'https://d1vs91ctevllei.cloudfront.net/images/product/1594018720072_MCD_Menu-Icon_600x400px_Alacarte_Triple-Beef-Cheese_Final.jpg',
        quantity: 5
      },
  {
        storeId: 39,
        name: 'ลาบหมู',
        description: 'โรลแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 255,
        salePrice: 75,
        imageUrl: 'https://chillchilljapan.com/wp-content/uploads/2017/10/pixta_81151276_M-760x506.jpg',
        quantity: 6
      },
  {
        storeId: 39,
        name: 'น้ำส้มคั้นสด',
        description: 'เต้าหู้ย่างและผักสด หัวไชเท้า มะเขือเทศ และแครอท พร้อมน้ำสลัดงา',
        originalPrice: 300,
        salePrice: 150,
        imageUrl: 'https://www.ajinomoto.co.th//storage/photos/shares/Recipe/Leanlicious/Tofuteriyakisaucesalad/6324664e9734d.jpg',
        quantity: 7
      },
  {
        storeId: 39,
        name: 'กุ้งแม่น้ำย่างเกลือ',
        description: 'ซูชิแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 150,
        salePrice: 55,
        imageUrl: 'https://allianz-assistance.co.th/travel/wp-content/uploads/2023/12/salmon-01-768.jpg',
        quantity: 5
      },
  {
        storeId: 39,
        name: 'เห็ดรวมย่างเนยกระเทียม',
        description: 'ซูชิทูน่า รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030038_11.jpg',
        quantity: 1
      },
  {
        storeId: 40,
        name: 'ยำมาม่าทะเล',
        description: 'ซูชิกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 210,
        salePrice: 75,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030040_9.jpg',
        quantity: 3
      },
  {
        storeId: 40,
        name: 'ป๊อปคอร์น',
        description: 'ป๊อปคอร์น รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 290,
        salePrice: 90,
        imageUrl: 'https://static.hd.co.th/system/blog_articles/main_hero_images/000/005/113/original/iStock-478626726_%281%29.jpg',
        quantity: 9
      },
  {
        storeId: 40,
        name: 'ข้าวเกรียบ',
        description: 'ข้าวเกรียบ รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 95,
        salePrice: 30,
        imageUrl: 'https://png.pngtree.com/thumb_back/fw800/background/20220605/pngtree-bag-of-freuds-shrimp-rice-cracker-snack-crunchy-crispy-and-spongy-cookie-delight-photo-image_30987152.jpg',
        quantity: 9
      },
  {
        storeId: 40,
        name: 'ครัวซองต์เนยสด',
        description: 'ครัวซองต์หอมกรุ่น กรอบนอกนุ่มใน',
        originalPrice: 300,
        salePrice: 100,
        imageUrl: 'https://s359.kapook.com/pagebuilder/37a6ec5e-712d-462c-9e2d-6b63c39e9777.jpg',
        quantity: 10
      },
  {
        storeId: 40,
        name: 'มันฝรั่งทอด',
        description: 'มันฝรั่งทอด รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://i.ytimg.com/vi/JgBfbzc1cKw/sddefault.jpg',
        quantity: 7
      },
  {
        storeId: 41,
        name: 'กระเพราไข่ดาว',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 250,
        salePrice: 85,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 41,
        name: 'กาแฟเย็น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 2
      },
  {
        storeId: 41,
        name: 'กุ้งแม่น้ำย่างเกลือ',
        description: 'ซูชิแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 150,
        salePrice: 55,
        imageUrl: 'https://allianz-assistance.co.th/travel/wp-content/uploads/2023/12/salmon-01-768.jpg',
        quantity: 5
      },
  {
        storeId: 41,
        name: 'ไก่ทอด',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 295,
        salePrice: 80,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 41,
        name: 'ขนมปังกรอบ',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 105,
        salePrice: 45,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 42,
        name: 'ข้าวเกรียบ',
        description: 'ข้าวเกรียบ รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 95,
        salePrice: 30,
        imageUrl: 'https://png.pngtree.com/thumb_back/fw800/background/20220605/pngtree-bag-of-freuds-shrimp-rice-cracker-snack-crunchy-crispy-and-spongy-cookie-delight-photo-image_30987152.jpg',
        quantity: 9
      },
  {
        storeId: 42,
        name: 'ข้าวผัดหมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 8
      },
  {
        storeId: 42,
        name: 'ข้าวมันไก่',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 55,
        salePrice: 20,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 1
      },
  {
        storeId: 42,
        name: 'ข้าวหน้าไก่เทอริยากิ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 230,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 5
      },
  {
        storeId: 42,
        name: 'ข้าวหน้าเนื้อไข่ดอง',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 160,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 43,
        name: 'ครัวซองต์เนยสด',
        description: 'ครัวซองต์หอมกรุ่น กรอบนอกนุ่มใน',
        originalPrice: 300,
        salePrice: 100,
        imageUrl: 'https://s359.kapook.com/pagebuilder/37a6ec5e-712d-462c-9e2d-6b63c39e9777.jpg',
        quantity: 10
      },
  {
        storeId: 43,
        name: 'คาปูชิโน่',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 155,
        salePrice: 55,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 7
      },
  {
        storeId: 43,
        name: 'ชาเขียวมัทฉะ',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 125,
        salePrice: 35,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 4
      },
  {
        storeId: 43,
        name: 'ชาไทย',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 215,
        salePrice: 95,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 43,
        name: 'ชานมไต้หวันไข่มุกบราวน์ชูการ์',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 105,
        salePrice: 20,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 44,
        name: 'ชีสเค้กญี่ปุ่น',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 175,
        salePrice: 65,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 10
      },
  {
        storeId: 44,
        name: 'ชีสเบอร์เกอร์',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 110,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 6
      },
  {
        storeId: 44,
        name: 'ซูชิกุ้ง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 195,
        salePrice: 85,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 6
      },
  {
        storeId: 44,
        name: 'ซูชิแซลมอน',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Bang Bon Bar - ဘန်ဘောဘား',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 44,
        name: 'ซูชิทูน่า',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 260,
        salePrice: 100,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 6
      },
  {
        storeId: 45,
        name: 'ดับเบิ้ลเบอร์เกอร์',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 110,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 7
      },
  {
        storeId: 45,
        name: 'ต้มยำกุ้ง',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Maenam Fish Restaurant',
        originalPrice: 290,
        salePrice: 140,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 4
      },
  {
        storeId: 45,
        name: 'นักเก็ตไก่',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 170,
        salePrice: 70,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 3
      },
  {
        storeId: 45,
        name: 'น้ำส้มคั้นสด',
        description: 'เต้าหู้ย่างและผักสด หัวไชเท้า มะเขือเทศ และแครอท พร้อมน้ำสลัดงา',
        originalPrice: 300,
        salePrice: 150,
        imageUrl: 'https://www.ajinomoto.co.th//storage/photos/shares/Recipe/Leanlicious/Tofuteriyakisaucesalad/6324664e9734d.jpg',
        quantity: 7
      },
  {
        storeId: 45,
        name: 'เบอร์เกอร์ไก่',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก บางหว้าขาหมู สาขาเอกชัย-บางบอน',
        originalPrice: 120,
        salePrice: 40,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 8
      },
  {
        storeId: 46,
        name: 'เบอร์เกอร์เนื้อ',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 95,
        salePrice: 25,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 8
      },
  {
        storeId: 46,
        name: 'เบอร์เกอร์หมู',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 210,
        salePrice: 70,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 10
      },
  {
        storeId: 46,
        name: 'ป๊อปคอร์น',
        description: 'ป๊อปคอร์น รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 290,
        salePrice: 90,
        imageUrl: 'https://static.hd.co.th/system/blog_articles/main_hero_images/000/005/113/original/iStock-478626726_%281%29.jpg',
        quantity: 9
      },
  {
        storeId: 46,
        name: 'ผักอบกรอบ',
        description: 'ขนมอบกรอบ รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 235,
        salePrice: 100,
        imageUrl: 'https://media.thairath.co.th/image/BLagCXwIySE6oubfaan0eTpcWmLQVGierZcxODkP1Rwe9vA1.webp',
        quantity: 7
      },
  {
        storeId: 46,
        name: 'ผัดซีอิ๊ว',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 250,
        salePrice: 75,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 47,
        name: 'พิซซ่าฮาวาเอียน',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 60,
        salePrice: 15,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 10
      },
  {
        storeId: 47,
        name: 'มัทฉะลาเต้ไข่มุก',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 75,
        salePrice: 25,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 3
      },
  {
        storeId: 47,
        name: 'มันฝรั่งทอด',
        description: 'มันฝรั่งทอด รสชาติเข้มข้น อร่อยจนต้องลองจาก The Little Friday Café & Bistro',
        originalPrice: 185,
        salePrice: 65,
        imageUrl: 'https://i.ytimg.com/vi/JgBfbzc1cKw/sddefault.jpg',
        quantity: 7
      },
  {
        storeId: 47,
        name: 'มิโซะราเมน',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 290,
        salePrice: 105,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 8
      },
  {
        storeId: 47,
        name: 'ยำมาม่าทะเล',
        description: 'ซูชิกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 210,
        salePrice: 75,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030040_9.jpg',
        quantity: 3
      },
  {
        storeId: 48,
        name: 'ราเมนโชยุ',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านหมูแดง SML (Char Siu Fan by SML) ข้าวหมูแดงฮ่องกง โดยคุณแม่สุมาลี',
        originalPrice: 195,
        salePrice: 90,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 8
      },
  {
        storeId: 48,
        name: 'โรลแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Bang Bon Bar - ဘန်ဘောဘား',
        originalPrice: 295,
        salePrice: 120,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 1
      },
  {
        storeId: 48,
        name: 'โรลปูอัด',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 125,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 8
      },
  {
        storeId: 48,
        name: 'ลาเต้',
        description: 'ข้าวร้อน ๆ เสิร์ฟพร้อมเนื้อวากิวย่าง โรยไข่ดองซีอิ๊วและต้นหอมซอย',
        originalPrice: 75,
        salePrice: 20,
        imageUrl: 'https://img.wongnai.com/p/1920x0/2020/03/24/4113f6c191574974817584f3abe6b6b9.jpg',
        quantity: 1
      },
  {
        storeId: 48,
        name: 'ลาบหมู',
        description: 'โรลแซลมอน รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 255,
        salePrice: 75,
        imageUrl: 'https://chillchilljapan.com/wp-content/uploads/2017/10/pixta_81151276_M-760x506.jpg',
        quantity: 6
      },
  {
        storeId: 49,
        name: 'สเต๊กปลาแซลมอน',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 135,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 3
      },
  {
        storeId: 49,
        name: 'สเต๊กหมูพอร์คชอป',
        description: 'ต้มยำกุ้ง รสชาติเข้มข้น อร่อยจนต้องลองจาก Pet Bang Bon Restaurant',
        originalPrice: 55,
        salePrice: 25,
        imageUrl: 'https://image.makewebcdn.com/makeweb/m_1920x0/HH9u8FNiT/BLOG000B1/thai_chili_tom_yam_soup.jpg',
        quantity: 9
      },
  {
        storeId: 49,
        name: 'สปาเก็ตตี้ซอสมะเขือเทศ',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก องุ่นสเต็ก&เย็นตาโฟ',
        originalPrice: 80,
        salePrice: 25,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 9
      },
  {
        storeId: 49,
        name: 'ส้มตำไทย',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก Irashaimase',
        originalPrice: 120,
        salePrice: 35,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 4
      },
  {
        storeId: 49,
        name: 'สลัดเต้าหู้ย่าง',
        description: 'ไก่เทอริยากิหอมหวานนุ่มนวล เสิร์ฟบนข้าวสวยร้อนและผักสด',
        originalPrice: 270,
        salePrice: 85,
        imageUrl: 'https://api2.krua.co/wp-content/uploads/2020/06/SEOForm_RI0364_1200x630.jpg',
        quantity: 3
      },
  {
        storeId: 50,
        name: 'สุกี้น้ำทะเลรวม',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 275,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      },
  {
        storeId: 50,
        name: 'ไส้กรอกหมูรมควันย่าง',
        description: 'เบอร์เกอร์เนื้อ รสชาติเข้มข้น อร่อยจนต้องลองจาก ร้านอาหารญี่ปุ่นโยชิ เดอะริช พลาซ่า บางบอน',
        originalPrice: 300,
        salePrice: 90,
        imageUrl: 'https://d1vs91ctevllei.cloudfront.net/images/product/1594018720072_MCD_Menu-Icon_600x400px_Alacarte_Triple-Beef-Cheese_Final.jpg',
        quantity: 5
      },
  {
        storeId: 50,
        name: 'หมูสามชั้นชาบู',
        description: 'ข้าวมันไก่ รสชาติเข้มข้น อร่อยจนต้องลองจาก ReaunYok Suki',
        originalPrice: 235,
        salePrice: 85,
        imageUrl: 'https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5naLwWtYtNesZaki91wtz8N9CQg7YZvxZMhzjwoOWiUn6p2zikv.jpg',
        quantity: 7
      },
  {
        storeId: 50,
        name: 'เห็ดรวมย่างเนยกระเทียม',
        description: 'ซูชิทูน่า รสชาติเข้มข้น อร่อยจนต้องลองจาก Faito Sushi',
        originalPrice: 95,
        salePrice: 35,
        imageUrl: 'https://www.shopteenee.com/media/catalog/product/cache/c3f074100ef384e76d6b1a1eb8132671/t/0/t07030038_11.jpg',
        quantity: 1
      },
  {
        storeId: 50,
        name: 'ไอศกรีมกะทิทรงเครื่อง',
        description: 'สุกี้น้ำกับซีฟู้ดสด ๆ เช่น กุ้ง ปลาหมึก และหอย พร้อมผักหลากชนิด',
        originalPrice: 235,
        salePrice: 60,
        imageUrl: 'https://yalamarketplace.com/upload/1662970645713.jpg',
        quantity: 1
      }
      ]
    });
  
      // Seed Product Categories
  const productandCatData =    await prisma.productCategories.createMany({
          data: [
      { productId: 1, categoryId: 1 },
      { productId: 1, categoryId: 6 },
      { productId: 2, categoryId: 1 },
      { productId: 2, categoryId: 7 },
      { productId: 3, categoryId: 1 },
      { productId: 3, categoryId: 7 },
      { productId: 4, categoryId: 1 },
      { productId: 4, categoryId: 13 },
      { productId: 5, categoryId: 1 },
      { productId: 5, categoryId: 16 },
      { productId: 6, categoryId: 1 },
      { productId: 6, categoryId: 6 },
      { productId: 7, categoryId: 1 },
      { productId: 7, categoryId: 16 },
      { productId: 8, categoryId: 1 },
      { productId: 8, categoryId: 7 },
      { productId: 9, categoryId: 1 },
      { productId: 9, categoryId: 13 },
      { productId: 10, categoryId: 1 },
      { productId: 10, categoryId: 7 },
      { productId: 11, categoryId: 21 },
      { productId: 12, categoryId: 1 },
      { productId: 12, categoryId: 16 },
      { productId: 12, categoryId: 19 },
      { productId: 13, categoryId: 1 },
      { productId: 13, categoryId: 16 },
      { productId: 14, categoryId: 21 },
      { productId: 15, categoryId: 21 },
      { productId: 16, categoryId: 2 },
      { productId: 16, categoryId: 23 },
      { productId: 17, categoryId: 1 },
      { productId: 17, categoryId: 7 },
      { productId: 18, categoryId: 4 },
      { productId: 19, categoryId: 1 },
      { productId: 19, categoryId: 6 },
      { productId: 20, categoryId: 1 },
      { productId: 20, categoryId: 6 },
      { productId: 21, categoryId: 1 },
      { productId: 21, categoryId: 7 },
      { productId: 22, categoryId: 1 },
      { productId: 22, categoryId: 7 },
      { productId: 23, categoryId: 4 },
      { productId: 24, categoryId: 19 },
      { productId: 25, categoryId: 20 },
      { productId: 26, categoryId: 14 },
      { productId: 26, categoryId: 17 },
      { productId: 27, categoryId: 9 },
      { productId: 28, categoryId: 14 },
      { productId: 28, categoryId: 16 },
      { productId: 28, categoryId: 17 },
      { productId: 29, categoryId: 1 },
      { productId: 29, categoryId: 7 },
      { productId: 30, categoryId: 1 },
      { productId: 30, categoryId: 13 },
      { productId: 31, categoryId: 20 },
      { productId: 32, categoryId: 20 },
      { productId: 33, categoryId: 6 },
      { productId: 33, categoryId: 22 },
      { productId: 34, categoryId: 6 },
      { productId: 34, categoryId: 22 },
      { productId: 35, categoryId: 1 },
      { productId: 35, categoryId: 7 },
      { productId: 36, categoryId: 2 },
      { productId: 36, categoryId: 3 },
      { productId: 37, categoryId: 2 },
      { productId: 37, categoryId: 3 },
      { productId: 38, categoryId: 2 },
      { productId: 38, categoryId: 3 },
      { productId: 39, categoryId: 2 },
      { productId: 39, categoryId: 3 },
      { productId: 40, categoryId: 2 },
      { productId: 40, categoryId: 3 },
      { productId: 41, categoryId: 4 },
      { productId: 42, categoryId: 4 },
      { productId: 43, categoryId: 4 },
      { productId: 43, categoryId: 10 },
      { productId: 44, categoryId: 4 },
      { productId: 45, categoryId: 19 },
      { productId: 46, categoryId: 2 },
      { productId: 46, categoryId: 3 },
      { productId: 47, categoryId: 2 },
      { productId: 47, categoryId: 14 },
      { productId: 48, categoryId: 1 },
      { productId: 48, categoryId: 6 },
      { productId: 49, categoryId: 2 },
      { productId: 49, categoryId: 23 },
      { productId: 50, categoryId: 2 },
      { productId: 50, categoryId: 23 },
      { productId: 51, categoryId: 20 },
      { productId: 52, categoryId: 6 },
      { productId: 52, categoryId: 22 },
      { productId: 53, categoryId: 6 },
      { productId: 53, categoryId: 22 },
      { productId: 54, categoryId: 1 },
      { productId: 54, categoryId: 7 },
      { productId: 55, categoryId: 1 },
      { productId: 55, categoryId: 6 },
      { productId: 56, categoryId: 14 },
      { productId: 56, categoryId: 17 },
      { productId: 57, categoryId: 9 },
      { productId: 58, categoryId: 14 },
      { productId: 58, categoryId: 16 },
      { productId: 58, categoryId: 17 },
      { productId: 59, categoryId: 1 },
      { productId: 59, categoryId: 7 },
      { productId: 60, categoryId: 1 },
      { productId: 60, categoryId: 13 },
      { productId: 61, categoryId: 12 },
      { productId: 62, categoryId: 16 },
      { productId: 63, categoryId: 14 },
      { productId: 64, categoryId: 6 },
      { productId: 64, categoryId: 11 },
      { productId: 64, categoryId: 16 },
      { productId: 65, categoryId: 2 },
      { productId: 65, categoryId: 14 },
      { productId: 66, categoryId: 1 },
      { productId: 66, categoryId: 16 },
      { productId: 66, categoryId: 19 },
      { productId: 67, categoryId: 1 },
      { productId: 67, categoryId: 7 },
      { productId: 68, categoryId: 1 },
      { productId: 68, categoryId: 16 },
      { productId: 69, categoryId: 1 },
      { productId: 69, categoryId: 7 },
      { productId: 70, categoryId: 8 },
      { productId: 70, categoryId: 14 },
      { productId: 71, categoryId: 2 },
      { productId: 71, categoryId: 3 },
      { productId: 72, categoryId: 2 },
      { productId: 72, categoryId: 3 },
      { productId: 73, categoryId: 2 },
      { productId: 73, categoryId: 14 },
      { productId: 74, categoryId: 1 },
      { productId: 74, categoryId: 6 },
      { productId: 75, categoryId: 2 },
      { productId: 75, categoryId: 23 },
      { productId: 76, categoryId: 1 },
      { productId: 76, categoryId: 7 },
      { productId: 77, categoryId: 1 },
      { productId: 77, categoryId: 16 },
      { productId: 78, categoryId: 1 },
      { productId: 78, categoryId: 7 },
      { productId: 79, categoryId: 8 },
      { productId: 79, categoryId: 14 },
      { productId: 80, categoryId: 21 },
      { productId: 81, categoryId: 1 },
      { productId: 81, categoryId: 6 },
      { productId: 82, categoryId: 14 },
      { productId: 82, categoryId: 17 },
      { productId: 83, categoryId: 9 },
      { productId: 84, categoryId: 14 },
      { productId: 84, categoryId: 16 },
      { productId: 84, categoryId: 17 },
      { productId: 85, categoryId: 1 },
      { productId: 85, categoryId: 7 },
      { productId: 86, categoryId: 9 },
      { productId: 87, categoryId: 14 },
      { productId: 87, categoryId: 16 },
      { productId: 87, categoryId: 17 },
      { productId: 88, categoryId: 1 },
      { productId: 88, categoryId: 7 },
      { productId: 89, categoryId: 1 },
      { productId: 89, categoryId: 13 },
      { productId: 90, categoryId: 4 },
      { productId: 91, categoryId: 12 },
      { productId: 92, categoryId: 16 },
      { productId: 93, categoryId: 14 },
      { productId: 94, categoryId: 6 },
      { productId: 94, categoryId: 11 },
      { productId: 94, categoryId: 16 },
      { productId: 95, categoryId: 2 },
      { productId: 95, categoryId: 14 },
      { productId: 96, categoryId: 1 },
      { productId: 96, categoryId: 16 },
      { productId: 96, categoryId: 19 },
      { productId: 97, categoryId: 1 },
      { productId: 97, categoryId: 7 },
      { productId: 98, categoryId: 1 },
      { productId: 98, categoryId: 16 },
      { productId: 99, categoryId: 1 },
      { productId: 99, categoryId: 7 },
      { productId: 100, categoryId: 16 },
      { productId: 100, categoryId: 21 },
      { productId: 101, categoryId: 2 },
      { productId: 101, categoryId: 5 },
      { productId: 102, categoryId: 2 },
      { productId: 102, categoryId: 5 },
      { productId: 103, categoryId: 9 },
      { productId: 104, categoryId: 2 },
      { productId: 104, categoryId: 5 },
      { productId: 105, categoryId: 8 },
      { productId: 106, categoryId: 18 },
      { productId: 107, categoryId: 1 },
      { productId: 107, categoryId: 16 },
      { productId: 107, categoryId: 19 },
      { productId: 108, categoryId: 1 },
      { productId: 108, categoryId: 7 },
      { productId: 109, categoryId: 1 },
      { productId: 109, categoryId: 16 },
      { productId: 110, categoryId: 1 },
      { productId: 110, categoryId: 7 },
      { productId: 111, categoryId: 16 },
      { productId: 111, categoryId: 21 },
      { productId: 112, categoryId: 8 },
      { productId: 112, categoryId: 14 },
      { productId: 113, categoryId: 21 },
      { productId: 114, categoryId: 21 },
      { productId: 115, categoryId: 21 },
      { productId: 116, categoryId: 2 },
      { productId: 116, categoryId: 3 },
      { productId: 117, categoryId: 2 },
      { productId: 117, categoryId: 3 },
      { productId: 118, categoryId: 2 },
      { productId: 118, categoryId: 3 },
      { productId: 119, categoryId: 2 },
      { productId: 119, categoryId: 3 },
      { productId: 120, categoryId: 2 },
      { productId: 120, categoryId: 3 },
      { productId: 121, categoryId: 2 },
      { productId: 121, categoryId: 14 },
      { productId: 122, categoryId: 1 },
      { productId: 122, categoryId: 6 },
      { productId: 123, categoryId: 2 },
      { productId: 123, categoryId: 23 },
      { productId: 124, categoryId: 2 },
      { productId: 124, categoryId: 23 },
      { productId: 125, categoryId: 4 },
      { productId: 126, categoryId: 4 },
      { productId: 127, categoryId: 4 },
      { productId: 128, categoryId: 4 },
      { productId: 128, categoryId: 10 },
      { productId: 129, categoryId: 4 },
      { productId: 130, categoryId: 19 },
      { productId: 131, categoryId: 20 },
      { productId: 132, categoryId: 20 },
      { productId: 133, categoryId: 6 },
      { productId: 133, categoryId: 22 },
      { productId: 134, categoryId: 6 },
      { productId: 134, categoryId: 22 },
      { productId: 135, categoryId: 1 },
      { productId: 135, categoryId: 7 },
      { productId: 136, categoryId: 1 },
      { productId: 136, categoryId: 6 },
      { productId: 137, categoryId: 5 },
      { productId: 137, categoryId: 9 },
      { productId: 138, categoryId: 14 },
      { productId: 138, categoryId: 17 },
      { productId: 139, categoryId: 9 },
      { productId: 140, categoryId: 14 },
      { productId: 140, categoryId: 16 },
      { productId: 140, categoryId: 17 },
      { productId: 141, categoryId: 16 },
      { productId: 141, categoryId: 21 },
      { productId: 142, categoryId: 1 },
      { productId: 142, categoryId: 7 },
      { productId: 143, categoryId: 1 },
      { productId: 143, categoryId: 13 },
      { productId: 144, categoryId: 4 },
      { productId: 145, categoryId: 4 },
      { productId: 145, categoryId: 10 },
      { productId: 146, categoryId: 1 },
      { productId: 146, categoryId: 13 },
      { productId: 147, categoryId: 12 },
      { productId: 148, categoryId: 16 },
      { productId: 149, categoryId: 14 },
      { productId: 150, categoryId: 6 },
      { productId: 150, categoryId: 11 },
      { productId: 150, categoryId: 16 },
      { productId: 151, categoryId: 16 },
      { productId: 151, categoryId: 21 },
      { productId: 152, categoryId: 1 },
      { productId: 152, categoryId: 7 },
      { productId: 153, categoryId: 1 },
      { productId: 153, categoryId: 13 },
      { productId: 154, categoryId: 4 },
      { productId: 155, categoryId: 4 },
      { productId: 155, categoryId: 10 },
      { productId: 156, categoryId: 1 },
      { productId: 156, categoryId: 6 },
      { productId: 157, categoryId: 5 },
      { productId: 157, categoryId: 9 },
      { productId: 158, categoryId: 14 },
      { productId: 158, categoryId: 17 },
      { productId: 159, categoryId: 9 },
      { productId: 160, categoryId: 14 },
      { productId: 160, categoryId: 16 },
      { productId: 160, categoryId: 17 },
      { productId: 161, categoryId: 20 },
      { productId: 162, categoryId: 20 },
      { productId: 163, categoryId: 6 },
      { productId: 163, categoryId: 22 },
      { productId: 164, categoryId: 6 },
      { productId: 164, categoryId: 22 },
      { productId: 165, categoryId: 1 },
      { productId: 165, categoryId: 7 },
      { productId: 166, categoryId: 4 },
      { productId: 167, categoryId: 4 },
      { productId: 168, categoryId: 4 },
      { productId: 168, categoryId: 10 },
      { productId: 169, categoryId: 4 },
      { productId: 170, categoryId: 19 },
      { productId: 171, categoryId: 2 },
      { productId: 171, categoryId: 14 },
      { productId: 172, categoryId: 1 },
      { productId: 172, categoryId: 6 },
      { productId: 173, categoryId: 2 },
      { productId: 173, categoryId: 23 },
      { productId: 174, categoryId: 2 },
      { productId: 174, categoryId: 23 },
      { productId: 175, categoryId: 4 },
      { productId: 176, categoryId: 2 },
      { productId: 176, categoryId: 3 },
      { productId: 177, categoryId: 2 },
      { productId: 177, categoryId: 3 },
      { productId: 178, categoryId: 2 },
      { productId: 178, categoryId: 3 },
      { productId: 179, categoryId: 2 },
      { productId: 179, categoryId: 3 },
      { productId: 180, categoryId: 2 },
      { productId: 180, categoryId: 3 },
      { productId: 181, categoryId: 16 },
      { productId: 181, categoryId: 21 },
      { productId: 182, categoryId: 8 },
      { productId: 182, categoryId: 14 },
      { productId: 183, categoryId: 21 },
      { productId: 184, categoryId: 21 },
      { productId: 185, categoryId: 21 },
      { productId: 186, categoryId: 18 },
      { productId: 187, categoryId: 1 },
      { productId: 187, categoryId: 16 },
      { productId: 187, categoryId: 19 },
      { productId: 188, categoryId: 1 },
      { productId: 188, categoryId: 7 },
      { productId: 189, categoryId: 1 },
      { productId: 189, categoryId: 16 },
      { productId: 190, categoryId: 1 },
      { productId: 190, categoryId: 7 },
      { productId: 191, categoryId: 2 },
      { productId: 191, categoryId: 14 },
      { productId: 192, categoryId: 1 },
      { productId: 192, categoryId: 13 },
      { productId: 193, categoryId: 12 },
      { productId: 194, categoryId: 16 },
      { productId: 195, categoryId: 14 },
      { productId: 196, categoryId: 6 },
      { productId: 196, categoryId: 11 },
      { productId: 196, categoryId: 16 },
      { productId: 197, categoryId: 2 },
      { productId: 197, categoryId: 5 },
      { productId: 198, categoryId: 2 },
      { productId: 198, categoryId: 5 },
      { productId: 199, categoryId: 9 },
      { productId: 200, categoryId: 2 },
      { productId: 200, categoryId: 5 },
      { productId: 201, categoryId: 1 },
      { productId: 201, categoryId: 7 },
      { productId: 202, categoryId: 4 },
      { productId: 203, categoryId: 16 },
      { productId: 204, categoryId: 2 },
      { productId: 204, categoryId: 23 },
      { productId: 205, categoryId: 5 },
      { productId: 205, categoryId: 9 },
      { productId: 206, categoryId: 2 },
      { productId: 206, categoryId: 5 },
      { productId: 207, categoryId: 1 },
      { productId: 207, categoryId: 7 },
      { productId: 208, categoryId: 18 },
      { productId: 209, categoryId: 1 },
      { productId: 209, categoryId: 7 },
      { productId: 210, categoryId: 1 },
      { productId: 210, categoryId: 7 },
      { productId: 211, categoryId: 9 },
      { productId: 212, categoryId: 4 },
      { productId: 213, categoryId: 4 },
      { productId: 214, categoryId: 4 },
      { productId: 215, categoryId: 4 },
      { productId: 215, categoryId: 10 },
      { productId: 216, categoryId: 9 },
      { productId: 217, categoryId: 2 },
      { productId: 217, categoryId: 3 },
      { productId: 218, categoryId: 21 },
      { productId: 219, categoryId: 21 },
      { productId: 220, categoryId: 21 },
      { productId: 221, categoryId: 2 },
      { productId: 221, categoryId: 3 },
      { productId: 222, categoryId: 1 },
      { productId: 222, categoryId: 16 },
      { productId: 223, categoryId: 2 },
      { productId: 223, categoryId: 23 },
      { productId: 224, categoryId: 12 },
      { productId: 225, categoryId: 2 },
      { productId: 225, categoryId: 3 },
      { productId: 226, categoryId: 2 },
      { productId: 226, categoryId: 3 },
      { productId: 227, categoryId: 2 },
      { productId: 227, categoryId: 3 },
      { productId: 228, categoryId: 2 },
      { productId: 228, categoryId: 5 },
      { productId: 229, categoryId: 8 },
      { productId: 230, categoryId: 1 },
      { productId: 230, categoryId: 6 },
      { productId: 231, categoryId: 2 },
      { productId: 231, categoryId: 14 },
      { productId: 232, categoryId: 4 },
      { productId: 232, categoryId: 10 },
      { productId: 233, categoryId: 2 },
      { productId: 233, categoryId: 5 },
      { productId: 234, categoryId: 6 },
      { productId: 234, categoryId: 22 },
      { productId: 235, categoryId: 6 },
      { productId: 235, categoryId: 11 },
      { productId: 235, categoryId: 16 },
      { productId: 236, categoryId: 6 },
      { productId: 236, categoryId: 22 },
      { productId: 237, categoryId: 16 },
      { productId: 237, categoryId: 21 },
      { productId: 238, categoryId: 16 },
      { productId: 238, categoryId: 21 },
      { productId: 239, categoryId: 4 },
      { productId: 240, categoryId: 1 },
      { productId: 240, categoryId: 13 },
      { productId: 241, categoryId: 14 },
      { productId: 241, categoryId: 16 },
      { productId: 241, categoryId: 17 },
      { productId: 242, categoryId: 14 },
      { productId: 242, categoryId: 17 },
      { productId: 243, categoryId: 1 },
      { productId: 243, categoryId: 6 },
      { productId: 244, categoryId: 1 },
      { productId: 244, categoryId: 13 },
      { productId: 245, categoryId: 8 },
      { productId: 245, categoryId: 14 },
      { productId: 246, categoryId: 1 },
      { productId: 246, categoryId: 16 },
      { productId: 246, categoryId: 19 },
      { productId: 247, categoryId: 2 },
      { productId: 247, categoryId: 14 },
      { productId: 248, categoryId: 19 },
      { productId: 249, categoryId: 14 },
      { productId: 250, categoryId: 20 }
          ]
        });
    // Seed Product_Allergen relationships
    const productAllerData =  await prisma.productAllergen.createMany({
            data: [
        {
              productId: 1,
              allergenId: 3
            },
        {
              productId: 2,
              allergenId: 3
            },
        {
              productId: 3,
              allergenId: 3
            },
        {
              productId: 5,
              allergenId: 4
            },
        {
              productId: 6,
              allergenId: 3
            },
        {
              productId: 7,
              allergenId: 4
            },
        {
              productId: 8,
              allergenId: 3
            },
        {
              productId: 10,
              allergenId: 3
            },
        {
              productId: 11,
              allergenId: 4
            },
        {
              productId: 12,
              allergenId: 4
            },
        {
              productId: 13,
              allergenId: 4
            },
        {
              productId: 14,
              allergenId: 4
            },
        {
              productId: 15,
              allergenId: 4
            },
        {
              productId: 17,
              allergenId: 3
            },
        {
              productId: 19,
              allergenId: 5
            },
        {
              productId: 20,
              allergenId: 3
            },
        {
              productId: 21,
              allergenId: 3
            },
        {
              productId: 22,
              allergenId: 3
            },
        {
              productId: 23,
              allergenId: 1
            },
        {
              productId: 25,
              allergenId: 1
            },
        {
              productId: 27,
              allergenId: 1
            },
        {
              productId: 28,
              allergenId: 4
            },
        {
              productId: 29,
              allergenId: 3
            },
        {
              productId: 31,
              allergenId: 1
            },
        {
              productId: 32,
              allergenId: 1
            },
        {
              productId: 33,
              allergenId: 2
            },
        {
              productId: 34,
              allergenId: 2
            },
        {
              productId: 35,
              allergenId: 3
            },
        {
              productId: 40,
              allergenId: 1
            },
        {
              productId: 41,
              allergenId: 1
            },
        {
              productId: 43,
              allergenId: 1
            },
        {
              productId: 44,
              allergenId: 1
            },
        {
              productId: 46,
              allergenId: 1
            },
        {
              productId: 47,
              allergenId: 5
            },
        {
              productId: 48,
              allergenId: 5
            },
        {
              productId: 51,
              allergenId: 1
            },
        {
              productId: 52,
              allergenId: 2
            },
        {
              productId: 53,
              allergenId: 2
            },
        {
              productId: 54,
              allergenId: 3
            },
        {
              productId: 55,
              allergenId: 3
            },
        {
              productId: 57,
              allergenId: 1
            },
        {
              productId: 58,
              allergenId: 4
            },
        {
              productId: 59,
              allergenId: 3
            },
        {
              productId: 62,
              allergenId: 4
            },
        {
              productId: 64,
              allergenId: 4
            },
        {
              productId: 66,
              allergenId: 4
            },
        {
              productId: 68,
              allergenId: 4
            },
        {
              productId: 69,
              allergenId: 3
            },
        {
              productId: 70,
              allergenId: 2
            },
        {
              productId: 72,
              allergenId: 1
            },
        {
              productId: 73,
              allergenId: 5
            },
        {
              productId: 74,
              allergenId: 5
            },
        {
              productId: 77,
              allergenId: 4
            },
        {
              productId: 78,
              allergenId: 3
            },
        {
              productId: 79,
              allergenId: 2
            },
        {
              productId: 80,
              allergenId: 4
            },
        {
              productId: 81,
              allergenId: 3
            },
        {
              productId: 83,
              allergenId: 1
            },
        {
              productId: 84,
              allergenId: 4
            },
        {
              productId: 85,
              allergenId: 3
            },
        {
              productId: 86,
              allergenId: 1
            },
        {
              productId: 87,
              allergenId: 4
            },
        {
              productId: 88,
              allergenId: 3
            },
        {
              productId: 90,
              allergenId: 1
            },
        {
              productId: 92,
              allergenId: 4
            },
        {
              productId: 94,
              allergenId: 4
            },
        {
              productId: 96,
              allergenId: 4
            },
        {
              productId: 98,
              allergenId: 4
            },
        {
              productId: 99,
              allergenId: 3
            },
        {
              productId: 100,
              allergenId: 4
            },
        {
              productId: 101,
              allergenId: 6
            },
        {
              productId: 102,
              allergenId: 5
            },
        {
              productId: 103,
              allergenId: 5
            },
        {
              productId: 107,
              allergenId: 4
            },
        {
              productId: 109,
              allergenId: 4
            },
        {
              productId: 110,
              allergenId: 3
            },
        {
              productId: 111,
              allergenId: 4
            },
        {
              productId: 112,
              allergenId: 2
            },
        {
              productId: 113,
              allergenId: 4
            },
        {
              productId: 114,
              allergenId: 4
            },
        {
              productId: 115,
              allergenId: 4
            },
        {
              productId: 120,
              allergenId: 1
            },
        {
              productId: 121,
              allergenId: 5
            },
        {
              productId: 122,
              allergenId: 5
            },
        {
              productId: 123,
              allergenId: 6
            },
        {
              productId: 125,
              allergenId: 1
            },
        {
              productId: 126,
              allergenId: 1
            },
        {
              productId: 128,
              allergenId: 1
            },
        {
              productId: 129,
              allergenId: 1
            },
        {
              productId: 131,
              allergenId: 1
            },
        {
              productId: 132,
              allergenId: 1
            },
        {
              productId: 133,
              allergenId: 2
            },
        {
              productId: 134,
              allergenId: 2
            },
        {
              productId: 135,
              allergenId: 3
            },
        {
              productId: 136,
              allergenId: 3
            },
        {
              productId: 137,
              allergenId: 5
            },
        {
              productId: 139,
              allergenId: 1
            },
        {
              productId: 140,
              allergenId: 4
            },
        {
              productId: 142,
              allergenId: 3
            },
        {
              productId: 144,
              allergenId: 1
            },
        {
              productId: 145,
              allergenId: 1
            },
        {
              productId: 148,
              allergenId: 4
            },
        {
              productId: 150,
              allergenId: 4
            },
        {
              productId: 152,
              allergenId: 3
            },
        {
              productId: 154,
              allergenId: 1
            },
        {
              productId: 155,
              allergenId: 1
            },
        {
              productId: 156,
              allergenId: 3
            },
        {
              productId: 157,
              allergenId: 5
            },
        {
              productId: 159,
              allergenId: 1
            },
        {
              productId: 160,
              allergenId: 4
            },
        {
              productId: 161,
              allergenId: 1
            },
        {
              productId: 162,
              allergenId: 1
            },
        {
              productId: 163,
              allergenId: 2
            },
        {
              productId: 164,
              allergenId: 2
            },
        {
              productId: 165,
              allergenId: 3
            },
        {
              productId: 166,
              allergenId: 1
            },
        {
              productId: 168,
              allergenId: 1
            },
        {
              productId: 169,
              allergenId: 1
            },
        {
              productId: 171,
              allergenId: 5
            },
        {
              productId: 172,
              allergenId: 5
            },
        {
              productId: 175,
              allergenId: 1
            },
        {
              productId: 180,
              allergenId: 1
            },
        {
              productId: 181,
              allergenId: 4
            },
        {
              productId: 182,
              allergenId: 2
            },
        {
              productId: 183,
              allergenId: 4
            },
        {
              productId: 184,
              allergenId: 4
            },
        {
              productId: 185,
              allergenId: 4
            },
        {
              productId: 187,
              allergenId: 4
            },
        {
              productId: 189,
              allergenId: 4
            },
        {
              productId: 190,
              allergenId: 3
            },
        {
              productId: 194,
              allergenId: 4
            },
        {
              productId: 196,
              allergenId: 4
            },
        {
              productId: 197,
              allergenId: 6
            },
        {
              productId: 198,
              allergenId: 5
            },
        {
              productId: 199,
              allergenId: 5
            },
        {
              productId: 201,
              allergenId: 3
            },
        {
              productId: 203,
              allergenId: 4
            },
        {
              productId: 205,
              allergenId: 5
            },
        {
              productId: 206,
              allergenId: 5
            },
        {
              productId: 207,
              allergenId: 3
            },
        {
              productId: 210,
              allergenId: 3
            },
        {
              productId: 211,
              allergenId: 5
            },
        {
              productId: 212,
              allergenId: 1
            },
        {
              productId: 213,
              allergenId: 1
            },
        {
              productId: 214,
              allergenId: 1
            },
        {
              productId: 215,
              allergenId: 1
            },
        {
              productId: 216,
              allergenId: 1
            },
        {
              productId: 217,
              allergenId: 1
            },
        {
              productId: 218,
              allergenId: 4
            },
        {
              productId: 219,
              allergenId: 4
            },
        {
              productId: 220,
              allergenId: 4
            },
        {
              productId: 222,
              allergenId: 4
            },
        {
              productId: 228,
              allergenId: 6
            },
        {
              productId: 230,
              allergenId: 3
            },
        {
              productId: 231,
              allergenId: 5
            },
        {
              productId: 232,
              allergenId: 1
            },
        {
              productId: 234,
              allergenId: 2
            },
        {
              productId: 235,
              allergenId: 4
            },
        {
              productId: 236,
              allergenId: 2
            },
        {
              productId: 237,
              allergenId: 4
            },
        {
              productId: 239,
              allergenId: 1
            },
        {
              productId: 241,
              allergenId: 4
            },
        {
              productId: 243,
              allergenId: 5
            },
        {
              productId: 245,
              allergenId: 2
            },
        {
              productId: 246,
              allergenId: 4
            },
        {
              productId: 250,
              allergenId: 1
            }
            ]
          });
}


main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
