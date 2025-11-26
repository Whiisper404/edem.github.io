// Данные для магазина
const products = [
    {
        id: 1,
        name: "Помада Flower Knows Swan Ballet",
        skinType: "all",
        brand: "Flower Knows",
        category: "makeup",
        price: 2690,
        oldPrice: 3000,
        image: "https://optim.tildacdn.com/stor3362-3865-4664-b265-356635373863/-/format/webp/46118817.png.webp",
        colors: [
            {
                code: "#cd7d6f",
                name: "B01 Little Star",
                images: [
                    "https://optim.tildacdn.com/stor3763-6334-4163-b237-353061333637/-/format/webp/18590374.png.webp",
                ]
            },
            {
                code: "#c1706e",
                name: "B02 Mary Jane",
                images: [
                    "https://optim.tildacdn.com/stor3365-3265-4331-b931-623838366432/-/format/webp/19224479.png.webp"
                ]
            },
            {
                code: "#a24341",
                name: "B07 Ballet Dream",
                images: [
                    "https://optim.tildacdn.com/stor3633-6665-4464-b934-303864633535/-/format/webp/72610384.png.webp",
                ]
            },
            {
                code: "#8b443e",
                name: "B09 Midsummer Night",
                images: [
                    "https://optim.tildacdn.com/stor3232-3930-4664-b266-653464313963/-/format/webp/89121194.png.webp",
                ]
            }
        ],
        rating: 4.5,
        reviews: 24,
        description: "Дизайн помады Flower Knows Swan Ballet вдохновлен классической балетной пачкой, корсетом, лентами, кружевом и французским классическим тисненым узором и гальваническим серебром, создавая чистое чувство благородства и элегантности, как у лебедя.",
        fullDescription: "Дизайн помады Flower Knows Swan Ballet вдохновлен классической балетной пачкой, корсетом, лентами, кружевом и французским классическим тисненым узором и гальваническим серебром, создавая чистое чувство благородства и элегантности, как у лебедя. Попробуйте помаду Swan Ballet Shine, ее свежая, похожая на бальзам текстура легко ложится на губы и великолепно сочетает в себе качества помады-блеска и сатиновой помады, идеального спутника для увлажненного, долговечного цвета и невероятного блеска, который держится часами. Блестящая формула с насыщенным пигментом обеспечивает стойкость и комфорт в течение всего дня.",
        inStock: true
    },
    {
        id: 2,
        name: "Тени для глаз Flower Knows Swan Ballet Six-Color",
        skinType: "all",
        brand: "Flower Knows",
        category: "makeup",
        price: 4200,
        oldPrice: 4980,
        image: "https://optim.tildacdn.com/stor3361-3665-4266-b066-363530363963/-/format/webp/61094456.png.webp",

        colors: [
            {
                code: "#cd7d6f",
                name: "01 White Swan",
                images: [
                    "https://optim.tildacdn.com/stor3361-3665-4266-b066-363530363963/-/format/webp/61094456.png.webp",
                    "https://optim.tildacdn.com/stor3865-3236-4362-a233-613161343636/-/contain/738x923/center/center/-/format/webp/83543392.jpg.webp"
                ]
            },
            {
                code: "#141217",
                name: "02 Black Swan",
                images: [
                    "https://optim.tildacdn.com/stor3964-3330-4366-b438-613565626536/-/format/webp/32136465.png.webp",
                    "https://optim.tildacdn.com/stor3237-6633-4662-a535-316336383564/-/contain/738x923/center/center/-/format/webp/27748309.jpg.webp"
                ]
            },
            {
                code: "#dcc5c1",
                name: "03 Pink Swan",
                images: [
                    "https://optim.tildacdn.com/stor3634-6339-4532-a565-653338376533/-/contain/923x923/center/center/-/format/webp/97308064.png.webp",
                    "https://optim.tildacdn.com/stor3730-3164-4731-a366-613064366563/-/format/webp/25349574.jpg.webp"
                ]
            },
        ],
        rating: 4.5,
        reviews: 24,
        description: "Коллекция, вдохновленная балетом и красотой лебедей, представлена оттенками «Белый лебедь», «Розовый лебедь» и «Черный лебедь».",
        fullDescription: "Тени для глаз Flower Knows имеют палитру из 6 палеток. Коллекция, вдохновленная балетом и красотой лебедей, представлена оттенками «Белый лебедь», «Розовый лебедь» и «Черный лебедь». Набор состоит из 4 кремовых матовых и 2 мерцающих металлических блесков, а также гладкой пудры, которая легко ложится на веки и равномерно распределяется. Добейтесь идеального мягкого сияния Вашеко макияжа с Flower Knows Swan Ballet! Идеально подходит для повседневного макияжа.",
        inStock: true
    },
    {
        id: 3,
        name: "Парфюм Flower Knows Swan Ballet",
        skinType: "all",
        brand: "Flower Knows",
        category: "perfume",
        price: 9490,
        oldPrice: 9900,
        image: "https://optim.tildacdn.com/stor3632-3130-4536-b338-356435636334/-/format/webp/38309327.png.webp",

        colors: [
            {
                code: "#cdebea",
                name: "01 Ribbon Ballet",
                images: [
                    "https://optim.tildacdn.com/stor3632-3130-4536-b338-356435636334/-/format/webp/38309327.png.webp",
                    "https://optim.tildacdn.com/stor3436-6461-4131-b432-353136383435/-/contain/738x923/center/center/-/format/webp/92739718.jpg.webp",
                    "https://optim.tildacdn.com/stor6664-3666-4730-b165-636535633339/-/contain/738x923/center/center/-/format/webp/83291759.jpg.webp",
                    "https://optim.tildacdn.com/stor3736-6562-4933-b064-313961663563/-/contain/738x923/center/center/-/format/webp/26384529.jpg.webp",
                    "https://optim.tildacdn.com/stor3934-3963-4138-b733-356438353138/-/format/webp/21200072.jpg.webp",
                ]
            },
            {
                code: "#f0adad",
                name: "02 Swan Soloist ",
                images: [
                    "https://optim.tildacdn.com/stor3761-6138-4132-a130-366134306332/-/format/webp/75869067.png.webp",
                    "https://optim.tildacdn.com/stor6433-3961-4263-a564-343839393831/-/contain/738x923/center/center/-/format/webp/86737192.jpg.webp",
                    "https://optim.tildacdn.com/stor6435-6262-4663-b730-336631623231/-/contain/738x923/center/center/-/format/webp/52749080.jpg.webp",
                ]
            },
        ],
        rating: 4.5,
        reviews: 24,
        description: "01 Ribbon Ballet - Сливочно-фруктовый. 02 Swan Soloist - Древесно-цветочный. Полностью стеклянный флакон с посеребренной статуэткой лебедя сочетает в себе римские колонны и другие архитектурные элементы, подобно скульптуре фонтана в саду, создавая уникальный классический дизайн парфюмерного флакона.",
        fullDescription: "01 Ribbon Ballet - Сливочно-фруктовый. 02 Swan Soloist - Древесно-цветочный. Полностью стеклянный флакон с посеребренной статуэткой лебедя сочетает в себе римские колонны и другие архитектурные элементы, подобно скульптуре фонтана в саду, создавая уникальный классический дизайн парфюмерного флакона. Ribbon Ballet — Сливочно-фруктовый аромат с начальными нотами свежих фруктов манго и сладкого апельсина с насыщенным кокосовым молоком переходит в мягкость Polianthes tuberosa и кедра для свежего летнего аромата. Wood Florals — Древесно-цветочный аромат с начальными нотами бергамота и горького апельсина, затем средней нотой розы и свежестью можжевеловых ягод, которые переходят в мягкость пихты и мускуса, весь аромат богато слоистый, чистый и приятный, приносящий ощущение таинственности и мечтательности.",
        inStock: true
    },
    {
        id: 4,
        name: "Парфюм Little Angel",
        skinType: "all",
        brand: "Flower Knows",
        category: "perfume",
        price: 8900,
        oldPrice: 9100,
        image: "https://optim.tildacdn.com/stor3564-3335-4631-b930-353965356663/-/format/webp/84414495.png.webp",

        colors: [
            {
                code: "#f0adad",
                name: "Little Angel Marias Anthem Perfume",
                images: [
                    "https://optim.tildacdn.com/stor3564-3335-4631-b930-353965356663/-/format/webp/84414495.png.webp",
                    "https://optim.tildacdn.com/stor3734-3464-4032-b530-343161396565/-/format/webp/14475678.jpg.webp",
                ]
            },
            {
                code: "#cdebea",
                name: "Little Angel Choir Girl Perfume",
                images: [
                    "https://optim.tildacdn.com/stor3137-6238-4262-a133-653436353437/-/format/webp/26091087.png.webp",
                    "https://optim.tildacdn.com/stor3034-3931-4366-b835-356362363066/-/format/webp/64433065.jpg.webp",
                ]
            },
        ],
        rating: 4.5,
        reviews: 24,
        description: "Отправляйтесь в фантастическое путешествие с нашим последним выпуском аромата, вдохновленного средневековой архитектурой. Маленькая скульптура ангела, украшенная короной и держащая горящее «Священное сердце», элегантно украшает верхушку сферического флакона духов, похожего на храм. Этот визуально поразительный дизайн перенесет вас в романтическую фантазию, органично сочетая артистизм с чарующим ароматом.",
        fullDescription: "Парфюм Little Angel Marias Anthem Perfume. Погрузитесь в наш восточно-древесный аромат с верхними нотами черной смородины и манго, сердцем из ландыша, жасмина и свежести розового дерева, а мягкое послевкусие из амбры, мускуса и травы ветивера создает теплое и восхитительное ощущение. Парфюм Little Angel Choir Girl Perfume. Насладитесь очаровательным цветочным букетом с верхними нотами розы, личи и фрезии. Сердце аромата раскрывается восхитительной смесью меда и груши, прекрасно сбалансированной пионом и ландышем. В результате получается свежий, чистый аромат, в котором гармонично сочетаются фруктовые и цветочные ноты, обеспечивая утонченную, монотонную сладость без приторности.",
        inStock: true
    },
    {
        id: 5,
        name: "Увлажняющий гель для умывания с березовым соком Round Lab Birch Juice Moisturizing Cleanser",
        skinType: "normal,dry,oily,combination,sensitive",
        brand: "Round Lab",
        category: "face",
        price: 1318,
        oldPrice: 1550 ,
        image: "https://hollyshop.ru/upload/iblock/fd9/f8387ilr7ut0yojw44g5lu6druky2lad/Round-Lab-Birch-Juice-Moisturizing-Cleanser.jpg",

         colors: [
            {
                code: "#82c296",
                name: "150ml",
                images: [
                    "https://hollyshop.ru/upload/iblock/dae/1fe13eg398kbsvtbgh3etpf1lbd8370y/Round-Lab-Birch-Juice-Moisturizing-Cleanser_.jpg",
                    "https://hollyshop.ru/upload/iblock/e43/r89mc6yz2ig29jd5w1o0cw3e6g3ebn2f/Round-Lab-Birch-Juice-Moisturizing-Cleanser_.jpg",
                ]
            },
        ],
        rating: 4.2,
        reviews: 15,
        description: "Увлажняющий гель для умывания с березовым соком Round Lab Birch Juice Moisturizing Cleanser очищает кожу, удаляет загрязнения из пор и избавляет от излишков себума и ороговевших клеток, не пересушивая и не провоцируя ощущения стянутости. Средство увлажняет, выравнивает тон, сглаживает микрорельеф. Содержит берёзовый сок, гиалуроновую кислоту, витамин C и масло ромашки.",
        fullDescription: "Увлажняющий гель для умывания с березовым соком Round Lab Birch Juice Moisturizing Cleanser очищает кожу, удаляет загрязнения из пор и избавляет от излишков себума и ороговевших клеток, не пересушивая и не провоцируя ощущения стянутости. Средство увлажняет, выравнивает тон, сглаживает микрорельеф. Содержит берёзовый сок, гиалуроновую кислоту, витамин C и масло ромашки.",
        inStock: true,
        volume: ["150ml"],
        specifications: {
            "Производитель": "ROUND LAB",
            "Объем": "150 мл",
            "Страна": "Южная Корея",
            "Тип кожи": "для нормальной кожи, для комбинированной кожи, для жирной кожи, для сухой кожи, для чувствительной кожи",
            "Активные компоненты": "Берёзовый сок, Гиалуроновая кислота, Витамин С, Ромашка, Полынь",
        }
    },
    {
        id: 6,
        name: "Солнцезащитный крем для проблемной кожи Round Lab Pine Calming Cica Sunscreen SPF50+ PA++++",
        skinType: "normal,combination,oily,problematic",
        brand: "Round Lab",
        category: "face",
        price: 1400,
        oldPrice: 1750,
        image: "https://hollyshop.ru/upload/iblock/266/wvsy7pscnwpalhhoi0z9voz68l4qf0y5/hollyshop-_46_upscayl_1x_upscayl_standard_4x-_1_.jpg",

         colors: [
            {
                code: "#82c296",
                name: "150ml",
                images: [
                    "https://hollyshop.ru/upload/iblock/266/wvsy7pscnwpalhhoi0z9voz68l4qf0y5/hollyshop-_46_upscayl_1x_upscayl_standard_4x-_1_.jpg",
                    "https://hollyshop.ru/upload/iblock/4bc/f5abp7n5h99242ng46tpk5t7tj4zuosg/image-7-_44_-_1_.jpg",
                ]
            },
        ],
        rating: 4.2,
        reviews: 15,
        description: "Солнцезащитный крем для проблемной кожи Round Lab Pine Calming Cica Sunscreen SPF50+ PA++++ на стабильных химических фильтрах нового поколения обеспечивает фотопротекторное действие и препятствует образованию пигментных пятен. Успокаивает раздражённую кожу и снижает риск возникновения акне. Содержит комплекс Aczero™, экстракты сосны, артишока, центеллы и коры белой ивы, гидролат зелёного чая.",
        fullDescription: "Солнцезащитный крем для проблемной кожи Round Lab Pine Calming Cica Sunscreen SPF50+ PA++++ на стабильных химических фильтрах нового поколения обеспечивает фотопротекторное действие и препятствует образованию пигментных пятен. Успокаивает раздражённую кожу и снижает риск возникновения акне. Содержит комплекс Aczero™, экстракты сосны, артишока, центеллы и коры белой ивы, гидролат зелёного чая.",
        inStock: true,
        volume: ["150ml"],
        specifications: {
            "Производитель": "ROUND LAB",
            "Объем": "40 мл",
            "Страна": "Южная Корея",
            "Тип кожи": "для нормальной кожи, для комбинированной кожи, для жирной кожи, для проблемной кожи",
            "Активные компоненты": "Химические фильтры, Сосна, Артишок, Кора ивы, Зелёный чай",
        }
    },
    {
        id: 7,
        name: "Clio Crystal glam balm",
        skinType: "all",
        brand: "Clio",
        category: "makeup",
        price: 1240,
        oldPrice: 1477,
        image: "https://pcdn.goldapple.ru/p/p/19000292290/web/696d674d61696e5064708ddc591b99f50edfullhd.webp",
        colors: [
            {
                code: "#ea5f5e",
                name: "01. Honey Peach",
                images: [
                    "https://pcdn.goldapple.ru/p/p/19000292290/web/696d674d61696e5064708ddc591b99f50edfullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292290/web/696d67416464315064708ddc591b99f5cd2fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292290/web/696d67416464325064708ddc591b9aa5c63fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292290/web/696d6167654d6f64656c5064708ddc591ba148a6cfullhd.webp"
                ]
            },
            {
                code: "#e33f34",
                name: "02. Honey Apricot",
                images: [
                    "https://pcdn.goldapple.ru/p/p/19000292291/web/696d674d61696e5064708ddc5a064cfe4e3fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292291/web/696d67416464325064708ddc5a064e23df7fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292291/web/696d67416464335064708ddc5a064d6423efullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292291/web/696d6167654d6f64656c5064708ddc5a064deb273fullhd.webp"
                ]
            },
            {
                code: "#cc2a3a",
                name: "03. Honey Cherry",
                images: [
                    "https://pcdn.goldapple.ru/p/p/19000292292/web/696d674d61696e5064708ddc591bddf4aecfullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292292/web/696d67416464325064708ddc591bdda5371fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292292/web/696d67416464335064708ddc591bdd8754cfullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292292/web/696d6167654d6f64656c5064708ddc591be13fff2fullhd.webp"
                ]
            },
            {
                code: "#b01f2b",
                name: "04. Honey Apple",
                images: [
                    "https://pcdn.goldapple.ru/p/p/19000292293/web/696d674d61696e5064708ddc591ba560b7afullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292293/web/696d67416464325064708ddc591ba55bb94fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292293/web/696d67416464335064708ddc591ba5e3524fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000292293/web/696d6167654d6f64656c5064708ddc591ba65458ffullhd.webp"
                ]
            }

        ],
        rating: 4.5,
        reviews: 24,
        description: "Бальзам CLIO придает губам чарующий медовый блеск и нежный фруктово-ягодный оттенок, делая кожу мягкой и визуально увеличивая объем губ.",
        fullDescription: "Бальзам CLIO придает губам чарующий медовый блеск и нежный фруктово-ягодный оттенок, делая кожу мягкой и визуально увеличивая объем губ. Бальзам-блеск тает на губах, создавая гладкое покрытие и невесомый барьер, помогающий сохранять кожу губ увлажненной. Освежающий цвет и насыщенное сияние подчеркивают естественную красоту губ. В состав средства входит масло абрикосовых косточек, которое укрепляет естественный защитный барьер и защищает нежную кожу губ от сухости и шелушений.",
        inStock: true
    },
    {
        id: 8,
        name: "Карандаш для глаз Clio Extreme gelpresso",
        skinType: "all",
        brand: "Clio",
        category: "makeup",
        price: 729,
        oldPrice: 810,
        image: "https://pcdn.goldapple.ru/p/p/19000123113/web/696d674d61696e5064708ddc51ea67c1245fullhd.webp",
        colors: [
            {
                code: "#422e27",
                name: "01. BLACK BROWN",
                images: [
                    "https://pcdn.goldapple.ru/p/p/19000123112/web/696d674d61696e5064708ddc51ea66839bafullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123112/web/696d67416464315064708ddc51ea65d668dfullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123112/web/696d67416464325064708ddc51ea6965388fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123112/web/696d6167654d6f64656c5064708ddc51ea6a634dafullhd.webp"
                ]
            },
            {
                code: "#482720",
                name: "02. DEEP BROWN",
                images: [
                    "https://pcdn.goldapple.ru/p/p/19000123113/web/696d674d61696e5064708ddc51ea67c1245fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123113/web/696d67416464315064708ddc51ea66d90ecfullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123113/web/696d67416464325064708ddc51ea664303dfullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123113/web/696d6167654d6f64656c5064708ddc51ea69fed6ffullhd.webp"
                ]
            },
            {
                code: "#503429",
                name: "04. GRAY BROWN",
                images: [
                    "https://pcdn.goldapple.ru/p/p/19000123112/web/696d674d61696e5064708ddc51ea66839bafullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123112/web/696d67416464315064708ddc51ea65d668dfullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123112/web/696d67416464325064708ddc51ea6965388fullhd.webp",
                    "https://pcdn.goldapple.ru/p/p/19000123112/web/696d6167654d6f64656c5064708ddc51ea6a634dafullhd.webp"
                ]
            },

        ],
        rating: 4.5,
        reviews: 24,
        description: "Карандаш CLIO гладко скользит по коже век, создавая насыщенные, аккуратные и очень стойкие линии и стрелки, которые не размазываются даже в экстремальных условиях. Цвет сохраняет свою яркость в течение всего дня. Палитра оттенков позволяет подобрать оптимально подходящий под тон кожи и цвет волос карандаш.",
        fullDescription: "Карандаш CLIO гладко скользит по коже век, создавая насыщенные, аккуратные и очень стойкие линии и стрелки, которые не размазываются даже в экстремальных условиях. Цвет сохраняет свою яркость в течение всего дня. Палитра оттенков позволяет подобрать оптимально подходящий под тон кожи и цвет волос карандаш.",
        inStock: true
    },

];

const reviewsData = {
    1: [
        { 
            id: 1, 
            user: "Анна", 
            rating: 5, 
            date: "2025-10-15", 
            text: "Отличная помада! Цвет насыщенный, не сушит губы. Дизайн упаковки просто шикарный!" 
        },
        { 
            id: 2, 
            user: "Мария", 
            rating: 4, 
            date: "2025-10-10", 
            text: "Красивый оттенок, но немного мажется. В целом очень довольна покупкой." 
        },
        { 
            id: 3, 
            user: "София", 
            rating: 5, 
            date: "2025-10-08", 
            text: "Помада просто волшебная! Цвет держится весь день, не скатывается." 
        }
    ],
    2: [
        { 
            id: 1, 
            user: "Елена", 
            rating: 5, 
            date: "2025-10-12", 
            text: "Тени просто волшебные! Отлично ложатся и держатся весь день. Пигментация супер." 
        },
        { 
            id: 2, 
            user: "Ирина", 
            rating: 4, 
            date: "2025-10-05", 
            text: "Очень нежные тени, красивые оттенки. Немного осыпаются, но это мелочь." 
        }
    ],
    3: [
        { 
            id: 1, 
            user: "Ольга", 
            rating: 5, 
            date: "2025-10-18", 
            text: "Аромат божественный! Держится очень долго, все спрашивают что за парфюм." 
        }
    ],
    4: [
        { 
            id: 1, 
            user: "Виктория", 
            rating: 5, 
            date: "2025-10-14", 
            text: "Нежный цветочный аромат, идеально для весны. Флакон просто произведение искусства!" 
        }
    ],
    5: [
        { 
            id: 1, 
            user: "Дарья", 
            rating: 4, 
            date: "2025-10-11", 
            text: "Хороший гель для умывания, не сушит кожу. Запах приятный, мягкий." 
        }
    ],
    6: [
        { 
            id: 1, 
            user: "Алиса", 
            rating: 5, 
            date: "2025-10-09", 
            text: "Отличный солнцезащитный крем! Не жирный, не белит, подходит под макияж." 
        }
    ],
    7: [
        { 
            id: 1, 
            user: "Ксения", 
            rating: 4, 
            date: "2025-10-16", 
            text: "Бальзам очень нежный, приятный на губах. Цвет естественный, подходит для ежедневного использования." 
        }
    ],
    8: [
        { 
            id: 1, 
            user: "Наталья", 
            rating: 5, 
            date: "2025-10-13", 
            text: "Карандаш просто супер! Не размазывается, рисует тонкие четкие линии." 
        }
    ]
};

function renderReviews(productId) {
    const reviewsList = document.getElementById('reviews-list');
    const productReviews = reviewsData[productId] || [];
    
    if (productReviews.length === 0) {
        reviewsList.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 40px 0;">Пока нет отзывов о этом товаре. Будьте первым!</p>';
        return;
    }
    
    reviewsList.innerHTML = productReviews.map(review => `
        <div class="review-item">
            <div class="review-header">
                <span class="review-user">${review.user}</span>
                <div class="review-rating">${renderStars(review.rating)}</div>
                <span class="review-date">${review.date}</span>
            </div>
            <div class="review-text">${review.text}</div>
        </div>
    `).join('');
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];
let user = JSON.parse(localStorage.getItem('user')) || null;
if (user && !user.hasOwnProperty('skinType')) {
    user.skinType = null;
    localStorage.setItem('user', JSON.stringify(user));
}

let currentSlide = 0;
let slideInterval;

document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    updateCartCount();
    checkAuthStatus();
    updateFavoriteIcons();
    
    console.log('Текущий пользователь:', user);
    console.log('Тип кожи пользователя:', user ? user.skinType : 'не авторизован');
    
    const path = window.location.pathname;
    const page = path.split('/').pop();
    
    switch(page) {
        case 'index.html':
        case '':
            initHomePage();
            break;
        case 'catalog.html':
            initCatalogPage();
            break;
        case 'product.html':
            initProductPage();
            break;
        case 'cart.html':
            initCartPage();
            break;
        case 'auth.html':
            initAuthPage();
            break;
        case 'profile.html':
            initProfilePage();
            break;
    }
}


function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

function checkAuthStatus() {
    const authLink = document.getElementById('auth-link');
    const profileLink = document.getElementById('profile-link');
    
    if (user) {
        if (authLink) authLink.style.display = 'none';
        if (profileLink) profileLink.style.display = 'block';
    } else {
        if (authLink) authLink.style.display = 'block';
        if (profileLink) profileLink.style.display = 'none';
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price) + ' р.';
}

function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHtml = '';
    
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHtml += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            starsHtml += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHtml += '<i class="far fa-star"></i>';
        }
    }
    
    return starsHtml;
}

function renderProductCard(product) {
    const discountPercent = product.oldPrice ? 
        Math.round((1 - product.price/product.oldPrice)*100) : 0;
    
    const isFavorite = favorites.includes(product.id);
    
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" id="product-image-${product.id}">
                ${product.oldPrice ? `<span class="discount-badge">-${discountPercent}%</span>` : ''}
                <button class="favorite-btn ${isFavorite ? 'favorited' : ''}" data-id="${product.id}">
                    <i class="${isFavorite ? 'fas' : 'far'} fa-heart"></i>
                </button>
                <button class="quick-view" data-id="${product.id}">Быстрый просмотр</button>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-brand">${product.brand}</p>
                <p class="product-sku">Артикул: ${product.id.toString().padStart(2, '0')}</p>
                <div class="product-rating">
                    <div class="stars">${renderStars(product.rating)}</div>
                    <span class="reviews">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.oldPrice ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` : ''}
                </div>
                ${product.colors ? `
                <div class="product-options">
                    <label>Доступные цвета</label>
                    <div class="color-options" id="color-options-${product.id}">
                        ${product.colors.map((color, index) => `
                            <div class="color-option ${index === 0 ? 'active' : ''}" 
                                 style="background-color: ${color.code}" 
                                 data-color-index="${index}"
                                 data-product-id="${product.id}"
                                 title="${color.name}"></div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-id="${product.id}">Добавить в корзину</button>
                    <button class="details-btn" data-id="${product.id}">Подробнее</button>
                </div>
            </div>
        </div>
    `;
}

function renderFavorites() {
    const favoritesContainer = document.getElementById('favorites-list');
    if (!favoritesContainer) return;
    
    const favoriteProducts = products.filter(product => favorites.includes(product.id));
    
    if (favoriteProducts.length === 0) {
        favoritesContainer.innerHTML = `
            <div class="empty-favorites">
                <i class="far fa-heart" style="font-size: 3rem; margin-bottom: 15px; color: var(--border);"></i>
                <p>В избранном пока нет товаров</p>
                <a href="catalog.html" class="btn">Перейти к покупкам</a>
            </div>
        `;
        return;
    }
    
    favoritesContainer.innerHTML = favoriteProducts.map(product => 
        renderProductCard(product)
    ).join('');
}

function initHomePage() {
    initSlider();
    renderFeaturedProducts();
    renderPersonalRecommendations();
    setupColorSelectionHome();
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
        
        if (e.target.classList.contains('details-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            window.location.href = `product.html?id=${productId}`;
        }
        
        if (e.target.classList.contains('quick-view')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            window.location.href = `product.html?id=${productId}`;
        }
        
        if (e.target.classList.contains('slider-prev')) {
            prevSlide();
        }
        
        if (e.target.classList.contains('slider-next')) {
            nextSlide();
        }
        
        if (e.target.classList.contains('dot')) {
            const slideIndex = parseInt(e.target.getAttribute('data-slide'));
            goToSlide(slideIndex);
        }
    });
}

function initSlider() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    startSlider();
    
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', pauseSlider);
        sliderContainer.addEventListener('mouseleave', startSlider);
    }
}

function startSlider() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
}

function pauseSlider() {
    clearInterval(slideInterval);
}

function nextSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide + 1) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function prevSlide() {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function goToSlide(slideIndex) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = slideIndex;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function renderFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return;
    
    const featuredProducts = products.slice(0, 4);
    featuredContainer.innerHTML = featuredProducts.map(product => 
        renderProductCard(product)
    ).join('');
}

function changeProductImageByColor(productId, colorIndex) {
    const product = products.find(p => p.id === productId);
    if (!product || !product.colors || !product.colors[colorIndex]) return;
    
    const productImage = document.getElementById(`product-image-${productId}`);
    const selectedColor = product.colors[colorIndex];
    
    if (productImage && selectedColor.images && selectedColor.images[0]) {
        productImage.src = selectedColor.images[0];
        productImage.alt = `${product.name} - ${selectedColor.name}`;
        
        productImage.style.opacity = '0';
        setTimeout(() => {
            productImage.style.opacity = '1';
        }, 200);
    }
}

function setupColorSelectionHome() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('color-option')) {
            const productId = parseInt(e.target.getAttribute('data-product-id'));
            const colorIndex = parseInt(e.target.getAttribute('data-color-index'));
            
            const colorOptions = document.querySelectorAll(`#color-options-${productId} .color-option`);
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            e.target.classList.add('active');
            

            changeProductImageByColor(productId, colorIndex);
        }
    });
}
function setupCatalogInteractions() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
        
        if (e.target.classList.contains('details-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            window.location.href = `product.html?id=${productId}`;
        }
        
        if (e.target.classList.contains('quick-view')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            window.location.href = `product.html?id=${productId}`;
        }
        
        if (e.target.classList.contains('color-option')) {
            const productId = parseInt(e.target.getAttribute('data-product-id'));
            const colorIndex = parseInt(e.target.getAttribute('data-color-index'));
            
            const colorOptions = document.querySelectorAll(`#color-options-${productId} .color-option`);
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            e.target.classList.add('active');
            
            changeProductImageByColor(productId, colorIndex);
        }

        if (e.target.closest('.favorite-btn')) {
            const btn = e.target.closest('.favorite-btn');
            const productId = parseInt(btn.getAttribute('data-id'));
            toggleFavorite(productId);
        }
    });
}

function initCatalogPage() {
    renderCatalogProducts();
    setupFilters();
    setupSorting();
    setupCatalogInteractions();
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });
}

function renderCatalogProducts(filteredProducts = products) {
    const catalogContainer = document.getElementById('catalog-products');
    const productsCount = document.getElementById('products-count');
    
    if (!catalogContainer) return;
    
    catalogContainer.innerHTML = filteredProducts.map(product => 
        renderProductCard(product)
    ).join('');
    
    if (productsCount) {
        productsCount.textContent = filteredProducts.length;
    }
}

function setupFilters() {
    const applyFiltersBtn = document.querySelector('.apply-filters');
    const resetFiltersBtn = document.querySelector('.reset-filters');
    
    if (applyFiltersBtn) {
        applyFiltersBtn.addEventListener('click', applyFilters);
    }
    
    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }
}

function applyFilters() {
    const categoryFilters = Array.from(document.querySelectorAll('input[value="perfume"], input[value="face"], input[value="makeup"]'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    const brandFilters = Array.from(document.querySelectorAll('input[value="Flower Knows"], input[value="Round Lab"], input[value="Clio"]'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);

    const skinTypeFilters = Array.from(document.querySelectorAll('input[value="normal"], input[value="dry"], input[value="oily"], input[value="combination"], input[value="sensitive"], input[value="problematic"], input[value="all"]'))
        .filter(checkbox => checkbox.checked)
        .map(checkbox => checkbox.value);
    
    const minPrice = parseInt(document.getElementById('min-price').value) || 0;
    const maxPrice = parseInt(document.getElementById('max-price').value) || Infinity;
    
    let filteredProducts = products.filter(product => {
        const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(product.category);
        const matchesBrand = brandFilters.length === 0 || brandFilters.includes(product.brand);

        const matchesSkinType = skinTypeFilters.length === 0 || 
            skinTypeFilters.some(skinType => product.skinType.includes(skinType));
        
        const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
        
        return matchesCategory && matchesBrand && matchesSkinType && matchesPrice;
    });
    
    renderCatalogProducts(filteredProducts);
}

function resetFilters() {
    document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    
    renderCatalogProducts(products);
}

function setupSorting() {
    const sortSelect = document.getElementById('sort');
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            let sortedProducts = [...products];
            
            switch(this.value) {
                case 'price-asc':
                    sortedProducts.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    sortedProducts.sort((a, b) => b.price - a.price);
                    break;
                case 'name':
                    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                default:
                    break;
            }
            
            renderCatalogProducts(sortedProducts);
        });
    }
}

function initProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    
    const product = products.find(p => p.id === productId) || products[0];
    renderProductPage(product);
    
    renderReviews(productId);
    
    document.getElementById('add-to-cart').addEventListener('click', function() {
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(productId, quantity);
    });
    
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            switchTab(tabId);
        });
    });
    
    document.querySelector('.quantity-btn.minus').addEventListener('click', function() {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput.value > 1) {
            quantityInput.value = parseInt(quantityInput.value) - 1;
        }
    });
    
    document.querySelector('.quantity-btn.plus').addEventListener('click', function() {
        const quantityInput = document.getElementById('quantity');
        if (quantityInput.value < 10) {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        }
    });
    
    document.getElementById('add-review-btn').addEventListener('click', function() {
        const urlParams = new URLSearchParams(window.location.search);
        const productId = parseInt(urlParams.get('id')) || 1;
        showReviewModal(productId);
    });
}

function renderProductPage(product) {
    document.getElementById('product-title').textContent = product.name;
    document.getElementById('product-brand').textContent = product.brand;
    document.getElementById('product-price').textContent = formatPrice(product.price);
    
    if (product.oldPrice) {
        document.getElementById('product-old-price').textContent = formatPrice(product.oldPrice);
    } else {
        document.getElementById('product-old-price').style.display = 'none';
    }
    
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('full-description').textContent = product.fullDescription;
    
const firstColor = product.colors ? product.colors[0] : null;
if (firstColor) {
    initializeProductGallery(product, firstColor, 0);
    
    const thumbnailsContainer = document.querySelector('.thumbnail-images');
    if (thumbnailsContainer && firstColor.images && firstColor.images.length <= 1) {
        thumbnailsContainer.style.display = 'none';
    }
}
    
    const starsContainer = document.querySelector('.product-rating .stars');
    if (starsContainer) {
        starsContainer.innerHTML = renderStars(product.rating);
    }
    
    document.getElementById('reviews-count').textContent = `${product.reviews} отзывов`;

    const optionGroup = document.querySelector('.option-group');
    if (optionGroup && product.colors) {
        optionGroup.innerHTML = `
            <label for="product-color">Цвет:</label>
            <div class="color-options" id="color-options-detail">
                ${product.colors.map((color, index) => `
                    <div class="color-option ${index === 0 ? 'active' : ''}" 
                         style="background-color: ${color.code}" 
                         data-color-index="${index}"
                         data-product-id="${product.id}"
                         title="${color.name}"></div>
                `).join('')}
            </div>
            <div class="selected-color-info" id="selected-color-info" style="margin-top: 8px;">
                <span class="selected-color-name" style="font-weight: 500; color: var(--text);">${product.colors[0].name}</span>
            </div>
        `;
    }
    
    document.getElementById('detail-brand').textContent = product.brand;
    document.getElementById('detail-category').textContent = getCategoryName(product.category);
    document.getElementById('detail-sku').textContent = `AB${product.id.toString().padStart(3, '0')}`;
    document.getElementById('detail-stock').textContent = product.inStock ? 'В наличии' : 'Нет в наличии';

    const specsTable = document.getElementById('specs-table');
    if (specsTable && product.specifications) {
        specsTable.innerHTML = Object.entries(product.specifications).map(([key, value]) => `
            <div class="spec-row">
                <span class="spec-name">${key}</span>
                <span class="spec-value">${value}</span>
            </div>
        `).join('');
    }
    
    renderRelatedProducts(product);

    setupColorSelectionDetail(product);
}

function initializeProductGallery(product, selectedColor, colorIndex) {
    const mainImage = document.getElementById('main-product-image');
    const thumbnailsContainer = document.querySelector('.thumbnail-images');
    
    if (thumbnailsContainer) {
        thumbnailsContainer.innerHTML = '';
    }
    
    if (thumbnailsContainer && product.colors) {
        product.colors.forEach((color, colorIdx) => {
            if (color.images) {
                color.images.forEach((img, imgIndex) => {
                    const thumbnail = document.createElement('img');
                    thumbnail.src = img;
                    thumbnail.alt = `${product.name} - ${color.name} ${imgIndex + 1}`;
                    thumbnail.className = (colorIdx === colorIndex && imgIndex === 0) ? 'active' : '';
                    thumbnail.setAttribute('data-color-index', colorIdx);
                    thumbnail.setAttribute('data-img-index', imgIndex);
                    thumbnail.onclick = function() {
                        const thumbColorIndex = parseInt(this.getAttribute('data-color-index'));
                        const thumbImgIndex = parseInt(this.getAttribute('data-img-index'));
                        const thumbColor = product.colors[thumbColorIndex];
                        
                        changeMainImage(thumbColor.images[thumbImgIndex], this);
                        
                        updateSelectedColor(product, thumbColorIndex);
                    };
                    thumbnailsContainer.appendChild(thumbnail);
                });
            }
        });
    }
    
    if (selectedColor.images && selectedColor.images[0]) {
        mainImage.src = selectedColor.images[0];
        mainImage.alt = `${product.name} - ${selectedColor.name}`;
    }
}

function updateSelectedColor(product, colorIndex) {
    const selectedColor = product.colors[colorIndex];
    
    const colorOptions = document.querySelectorAll('#color-options-detail .color-option');
    colorOptions.forEach((opt, idx) => {
        opt.classList.toggle('active', idx === colorIndex);
    });
    
    const selectedColorName = document.querySelector('.selected-color-name');
    if (selectedColorName) {
        selectedColorName.textContent = selectedColor.name;
        selectedColorName.style.color = selectedColor.code;
    }
}

function setupColorSelectionDetail(product) {
    const colorOptions = document.querySelectorAll('#color-options-detail .color-option');
        if (!colorOptions.length) return;

    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            const colorIndex = parseInt(this.getAttribute('data-color-index'));
            const selectedColor = product.colors[colorIndex];
            
            updateSelectedColor(product, colorIndex);
            
            if (selectedColor.images && selectedColor.images[0]) {
                const mainImage = document.getElementById('main-product-image');
                mainImage.src = selectedColor.images[0];
                mainImage.alt = `${product.name} - ${selectedColor.name}`;
                
                mainImage.style.opacity = '0';
                setTimeout(() => {
                    mainImage.style.opacity = '1';
                }, 200);
            }
            
            document.querySelectorAll('.thumbnail-images img').forEach(thumb => {
                const thumbColorIndex = parseInt(thumb.getAttribute('data-color-index'));
                thumb.classList.toggle('active', thumbColorIndex === colorIndex && 
                    parseInt(thumb.getAttribute('data-img-index')) === 0);
            });
        });
    });
}

function changeMainImage(imageSrc, thumbnail) {
    const mainImage = document.getElementById('main-product-image');
    
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
        mainImage.src = imageSrc;
        
        setTimeout(() => {
            mainImage.style.opacity = '1';
        }, 50);
    }, 200);
    
    document.querySelectorAll('.thumbnail-images img').forEach(img => {
        img.classList.remove('active');
    });
    thumbnail.classList.add('active');
    
    const colorIndex = parseInt(thumbnail.getAttribute('data-color-index'));
    const product = products.find(p => p.id === parseInt(new URLSearchParams(window.location.search).get('id')));
    if (product) {
        updateSelectedColor(product, colorIndex);
    }
}

function setupColorSelection() {
    const colorOptions = document.querySelectorAll('.color-option');
    
    colorOptions.forEach(option => {
        option.addEventListener('click', function() {
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            this.classList.add('active');
            
            const colorName = this.getAttribute('title');
            const selectedColorName = document.getElementById('selected-color-name');
            if (selectedColorName) {
                selectedColorName.textContent = colorName;
            }
            
            const selectedColor = this.getAttribute('data-color');
            console.log('Выбран цвет:', selectedColor, colorName);

        });
    });
}

function getCategoryName(category) {
    const categories = {
        'perfume': 'Парфюмерия',
        'face': 'Уход за лицом',
        'makeup': 'Декоративная косметика',
        'body': 'Уход за телом'
    };
    return categories[category] || category;
}

function renderRelatedProducts(product) {
    const relatedContainer = document.getElementById('related-products');
    if (!relatedContainer) return;
    
    const relatedProducts = products
        .filter(p => p.id !== product.id && p.category === product.category)
        .slice(0, 4);
    
    relatedContainer.innerHTML = relatedProducts.map(p => 
        renderProductCard(p)
    ).join('');
    
    setTimeout(() => {
        setupCatalogInteractions();
    }, 100);
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    
    document.querySelector(`.tab-btn[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

function initCartPage() {
    renderCartItems();
    updateCartSummary();
    renderRecommendedProducts();
    
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-item')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
        
        if (e.target.classList.contains('quantity-btn')) {
            const productId = parseInt(e.target.parentElement.getAttribute('data-id'));
            const isIncrease = e.target.classList.contains('plus');
            updateCartQuantity(productId, isIncrease);
        }
        
        if (e.target.id === 'checkout-btn') {
            checkout();
        }
        
        if (e.target.id === 'apply-promo') {
            applyPromoCode();
        }
    });
}

function renderCartItems() {
    const cartContainer = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    
    if (!cartContainer) return;
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        return;
    }
    
    emptyCart.style.display = 'none';
    
    cartContainer.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        return `
            <div class="cart-item">
                <div class="item-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="item-details">
                    <h3>${product.name}</h3>
                    <p class="item-brand">${product.brand}</p>
                    <div class="item-price">${formatPrice(product.price)}</div>
                </div>
                <div class="item-quantity" data-id="${product.id}">
                    <button class="quantity-btn minus">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn plus">+</button>
                </div>
                <div class="item-total">
                    ${formatPrice(product.price * item.quantity)}
                </div>
                <button class="remove-item" data-id="${product.id}">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
    }).join('');
}

function updateCartSummary() {
    const itemsCount = document.getElementById('items-count');
    const subtotal = document.getElementById('subtotal');
    const shippingCost = document.getElementById('shipping-cost');
    const totalCost = document.getElementById('total-cost');
    const checkoutBtn = document.getElementById('checkout-btn');
    
    if (cart.length === 0) {
        if (itemsCount) itemsCount.textContent = '0';
        if (subtotal) subtotal.textContent = '0 руб.';
        if (shippingCost) shippingCost.textContent = '0 руб.';
        if (totalCost) totalCost.textContent = '0 руб.';
        if (checkoutBtn) checkoutBtn.disabled = true;
        return;
    }
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotalAmount = cart.reduce((sum, item) => {
        const product = products.find(p => p.id === item.id);
        return sum + (product.price * item.quantity);
    }, 0);
    
    const shipping = subtotalAmount > 2000 ? 0 : 300;
    const totalAmount = subtotalAmount + shipping;
    
    if (itemsCount) itemsCount.textContent = totalItems;
    if (subtotal) subtotal.textContent = formatPrice(subtotalAmount);
    if (shippingCost) shippingCost.textContent = shipping === 0 ? 'Бесплатно' : formatPrice(shipping);
    if (totalCost) totalCost.textContent = formatPrice(totalAmount);
    if (checkoutBtn) checkoutBtn.disabled = false;
}

function renderRecommendedProducts() {
    const recommendedContainer = document.getElementById('recommended-products');
    if (!recommendedContainer) return;
    
    const cartProductIds = cart.map(item => item.id);
    const recommendedProducts = products
        .filter(p => !cartProductIds.includes(p.id))
        .slice(0, 4);
    
    recommendedContainer.innerHTML = recommendedProducts.map(product => 
        renderProductCard(product)
    ).join('');
}

function applyPromoCode() {
    const promoInput = document.getElementById('promo-code');
    const promoCode = promoInput.value.trim();
    
    if (promoCode === 'EDEM10') {
        alert('Промокод применен! Скидка 10%');
    } else if (promoCode) {
        alert('Промокод недействителен');
    }
    
    promoInput.value = '';
}

function checkout() {
    if (!user) {
        alert('Для оформления заказа необходимо авторизоваться');
        window.location.href = 'auth.html';
        return;
    }
    
    if (cart.length === 0) {
        alert('Корзина пуста');
        return;
    }
    
    alert('Заказ успешно оформлен! Спасибо за покупку!');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    updateCartSummary();
}

function addToCart(productId, quantity = 1) {
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: productId,
            quantity: quantity
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    if (window.location.pathname.includes('cart.html')) {
        renderCartItems();
        updateCartSummary();
    }
    
    showNotification('Товар добавлен в корзину');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    renderCartItems();
    updateCartSummary();
}

function updateCartQuantity(productId, isIncrease) {
    const item = cart.find(item => item.id === productId);
    
    if (item) {
        if (isIncrease) {
            item.quantity += 1;
        } else {
            item.quantity -= 1;
            if (item.quantity === 0) {
                removeFromCart(productId);
                return;
            }
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        renderCartItems();
        updateCartSummary();
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--success);
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideIn 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOut {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);

function initAuthPage() {
    const authTabs = document.querySelectorAll('.auth-tab');
    const authForms = document.querySelectorAll('.auth-form');
    
    authTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');

            authTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            authForms.forEach(form => {
                form.classList.remove('active');
                if (form.id === `${tabId}-form`) {
                    form.classList.add('active');
                }
            });
        });
    });

    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        loginUser();
    });

    document.getElementById('register-form').addEventListener('submit', function(e) {
        e.preventDefault();
        registerUser();
    });
}

function loginUser() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (email && password) {
        user = {
            id: 1,
            name: 'Иван Иванов',
            email: email,
            phone: '+7 (999) 123-45-67',
            skinType: null
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        checkAuthStatus();
        alert('Вы успешно вошли в систему!');
        window.location.href = 'index.html';
    } else {
        alert('Пожалуйста, заполните все поля');
    }
}

function registerUser() {
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const phone = document.getElementById('register-phone').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
        return;
    }
    
    if (name && email && phone && password) {
        user = {
            id: Date.now(),
            name: name,
            email: email,
            phone: phone,
            skinType: null
        };
        
        localStorage.setItem('user', JSON.stringify(user));
        checkAuthStatus();
        alert('Регистрация прошла успешно!');
        window.location.href = 'index.html';
    } else {
        alert('Пожалуйста, заполните все поля');
    }
}

function initProfilePage() {
    if (!user) {
        window.location.href = 'auth.html';
        return;
    }
    
    renderUserProfile();
    setupProfileTabs();
    setupSkinTypeSelection();
    renderFavorites();
    
    document.querySelectorAll('.profile-nav a').forEach(link => {
        if (link.getAttribute('data-tab') === 'favorites') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                setTimeout(() => {
                    renderFavorites();
                    setupFavoritesInteractions();
                }, 100);
            });
        }
    });
    
    document.getElementById('logout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        logoutUser();
    });
    
    document.querySelector('.profile-form').addEventListener('submit', function(e) {
        e.preventDefault();
        user.name = document.getElementById('profile-name').value + ' ' + document.getElementById('profile-lastname').value;
        user.email = document.getElementById('profile-email').value;
        user.phone = document.getElementById('profile-phone').value;
        
        localStorage.setItem('user', JSON.stringify(user));
        showNotification('Профиль успешно обновлен!');
    });
}

function renderUserProfile() {
    document.getElementById('user-name').textContent = user.name;
    document.getElementById('user-email').textContent = user.email;
    
    document.getElementById('profile-name').value = user.name.split(' ')[0] || '';
    document.getElementById('profile-lastname').value = user.name.split(' ')[1] || '';
    document.getElementById('profile-email').value = user.email;
    document.getElementById('profile-phone').value = user.phone;

    renderSkinTypeSelection();
}

function setupProfileTabs() {
    const navLinks = document.querySelectorAll('.profile-nav a');
    const tabs = document.querySelectorAll('.profile-tab');
    
    navLinks.forEach(link => {
        if (link.id !== 'logout-btn') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const tabId = this.getAttribute('data-tab');
                
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                tabs.forEach(tab => {
                    tab.classList.remove('active');
                    if (tab.id === `${tabId}-tab`) {
                        tab.classList.add('active');
                    }
                });
            });
        }
    });
}

function logoutUser() {
    user = null;
    localStorage.removeItem('user');
    checkAuthStatus();
    window.location.href = 'index.html';
}
function getPersonalRecommendations() {

    const shuffled = [...products].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
}

function renderPersonalRecommendations() {
    const recommendationsContainer = document.getElementById('personal-recommendations');
    if (!recommendationsContainer) return;
    
    const recommendedProducts = getPersonalRecommendations();
    recommendationsContainer.innerHTML = recommendedProducts.map(product => 
        renderProductCard(product)
    ).join('');
    
    setupColorSelectionHome();
}

function renderSkinTypeSelection() {
    const skinTypeCards = document.querySelectorAll('.skin-type-card');
    const currentSkinTypeElement = document.getElementById('current-skin-type');

    skinTypeCards.forEach(card => {
        card.classList.remove('active');
    });

    if (user.skinType) {
        const selectedCard = document.querySelector(`.skin-type-card[data-type="${user.skinType}"]`);
        if (selectedCard) {
            selectedCard.classList.add('active');
        }

        const skinTypeNames = {
            'normal': 'Нормальная',
            'dry': 'Сухая', 
            'oily': 'Жирная',
            'combination': 'Комбинированная',
            'sensitive': 'Чувствительная',
            'problematic': 'Проблемная',
            'all': 'Для всех типов'
        };
        
        currentSkinTypeElement.textContent = skinTypeNames[user.skinType] || user.skinType;
    } else {
        currentSkinTypeElement.textContent = 'Не выбран';
    }
}

function setupSkinTypeSelection() {
    const skinTypeCards = document.querySelectorAll('.skin-type-card');
    
    skinTypeCards.forEach(card => {
        card.addEventListener('click', function() {
            const skinType = this.getAttribute('data-type');
            user.skinType = skinType;
            
            localStorage.setItem('user', JSON.stringify(user));
            
            renderSkinTypeSelection();

            showNotification('Тип кожи сохранен! Рекомендации обновлены.');
        });
    });
}

function getPersonalRecommendations() {
    if (!user || !user.skinType) {
        const shuffled = [...products].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 4);
    }

    let recommendedProducts = products.filter(product => {
        return product.skinType.includes(user.skinType);
    });

    if (recommendedProducts.length < 4) {
        const additionalProducts = products
            .filter(p => !recommendedProducts.includes(p))
            .sort(() => 0.5 - Math.random())
            .slice(0, 4 - recommendedProducts.length);
        
        recommendedProducts = [...recommendedProducts, ...additionalProducts];
    }
    
    return recommendedProducts.slice(0, 4);
}

function renderPersonalRecommendations() {
    const recommendationsContainer = document.getElementById('personal-recommendations');
    if (!recommendationsContainer) return;
    
    const recommendedProducts = getPersonalRecommendations();
    
    if (recommendedProducts.length === 0) {
        recommendationsContainer.innerHTML = `
            <div class="empty-recommendations" style="text-align: center; padding: 40px; color: var(--text-light);">
                <i class="fas fa-heart" style="font-size: 3rem; margin-bottom: 15px; color: var(--border);"></i>
                <h3>Пока нет рекомендаций</h3>
                <p>Укажите ваш тип кожи в личном кабинете для персонализированных рекомендаций</p>
                <a href="profile.html" class="btn" style="margin-top: 15px;">Перейти в профиль</a>
            </div>
        `;
        return;
    }
    
    recommendationsContainer.innerHTML = recommendedProducts.map(product => 
        renderProductCard(product)
    ).join('');
    

    setTimeout(() => {
        setupCatalogInteractions();
    }, 100);
}
function setupSkinTypeSelection() {
    const skinTypeCards = document.querySelectorAll('.skin-type-card');
    
    skinTypeCards.forEach(card => {
        card.addEventListener('click', function() {
            const skinType = this.getAttribute('data-type');
            console.log('Выбран тип кожи:', skinType); 
            
            user.skinType = skinType;

            localStorage.setItem('user', JSON.stringify(user));
            console.log('Пользователь сохранен:', user); 

            renderSkinTypeSelection();

            showNotification('Тип кожи сохранен! Рекомендации обновлены.');
        });
    });
}

let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

function toggleFavorite(productId) {
    const index = favorites.indexOf(productId);
    
    if (index === -1) {
        favorites.push(productId);
        showNotification('Товар добавлен в избранное');
    } else {
        favorites.splice(index, 1);
        showNotification('Товар удален из избранного');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteIcons();
    if (window.location.pathname.includes('profile.html')) {
        renderFavorites();
    }
}

function updateFavoriteIcons() {
    document.querySelectorAll('.favorite-btn').forEach(btn => {
        const productId = parseInt(btn.getAttribute('data-id'));
        const icon = btn.querySelector('i');
        
        if (favorites.includes(productId)) {
            icon.className = 'fas fa-heart';
            btn.classList.add('favorited');
        } else {
            icon.className = 'far fa-heart';
            btn.classList.remove('favorited');
        }
    });
}

function addReview(productId, rating, text) {
    if (!reviewsData[productId]) {
        reviewsData[productId] = [];
    }
    
    const newReview = {
        id: reviewsData[productId].length + 1,
        user: user ? user.name.split(' ')[0] : 'Аноним',
        rating: rating,
        date: new Date().toISOString().split('T')[0],
        text: text
    };
    
    reviewsData[productId].unshift(newReview);
    
    const product = products.find(p => p.id === productId);
    if (product) {
        product.reviews += 1;

        const totalRating = reviewsData[productId].reduce((sum, review) => sum + review.rating, 0);
        product.rating = (totalRating / reviewsData[productId].length).toFixed(1);
    }
    
    renderReviews(productId);
    
    showNotification('Отзыв успешно добавлен!');
}

function showReviewModal(productId) {
    if (!user) {
        alert('Чтобы оставить отзыв, необходимо авторизоваться');
        window.location.href = 'auth.html';
        return;
    }
    
    const existingModal = document.getElementById('review-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modalHtml = `
        <div class="modal-overlay" id="review-modal">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Оставить отзыв</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="rating-selector">
                        <label>Ваша оценка:</label>
                        <div class="stars-input">
                            ${[1,2,3,4,5].map(star => `
                                <span class="star" data-rating="${star}">★</span>
                            `).join('')}
                        </div>
                        <span class="rating-text" id="rating-text">Выберите оценку</span>
                    </div>
                    <div class="review-form-group">
                        <label for="review-text">Ваш отзыв:</label>
                        <textarea id="review-text" placeholder="Поделитесь вашим мнением о товаре..." rows="5"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-outline" id="cancel-review">Отмена</button>
                    <button class="btn" id="submit-review" disabled>Опубликовать отзыв</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    let selectedRating = 0;
    const stars = document.querySelectorAll('.star');
    const ratingText = document.getElementById('rating-text');
    const submitBtn = document.getElementById('submit-review');
    const reviewText = document.getElementById('review-text');
    
    function closeReviewModal() {
        const modal = document.getElementById('review-modal');
        if (modal) {
            modal.style.animation = 'fadeOut 0.3s ease-in';
            setTimeout(() => modal.remove(), 300);
        }
    }

    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-rating'));
            
            stars.forEach(s => {
                const sRating = parseInt(s.getAttribute('data-rating'));
                s.classList.toggle('active', sRating <= selectedRating);
            });
            
            ratingText.textContent = getRatingText(selectedRating);
            submitBtn.disabled = selectedRating === 0 || !reviewText.value.trim();
        });
        
        star.addEventListener('mouseover', function() {
            const hoverRating = parseInt(this.getAttribute('data-rating'));
            stars.forEach(s => {
                const sRating = parseInt(s.getAttribute('data-rating'));
                s.classList.toggle('hover', sRating <= hoverRating);
            });
        });
        
        star.addEventListener('mouseout', function() {
            stars.forEach(s => s.classList.remove('hover'));
        });
    });
    
    reviewText.addEventListener('input', function() {
        submitBtn.disabled = selectedRating === 0 || this.value.trim().length === 0;
    });

    document.getElementById('submit-review').addEventListener('click', function() {
        const reviewTextValue = reviewText.value.trim();
        if (selectedRating > 0 && reviewTextValue) {
            addReview(productId, selectedRating, reviewTextValue);
            closeReviewModal();
        }
    });
    
    document.getElementById('cancel-review').addEventListener('click', closeReviewModal);
    document.querySelector('.modal-close').addEventListener('click', closeReviewModal);

    document.getElementById('review-modal').addEventListener('click', function(e) {
        if (e.target === this) closeReviewModal();
    });
    
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeReviewModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

function closeReviewModal() {
    const modal = document.getElementById('review-modal');
    if (modal) modal.remove();
}

function getRatingText(rating) {
    const texts = {
        1: 'Ужасно',
        2: 'Плохо',
        3: 'Нормально',
        4: 'Хорошо',
        5: 'Отлично'
    };
    return texts[rating] || 'Выберите оценку';
}

document.addEventListener('DOMContentLoaded', function() {
    
    document.addEventListener('click', function(e) {
        if (e.target.id === 'add-review-btn') {
            const urlParams = new URLSearchParams(window.location.search);
            const productId = parseInt(urlParams.get('id')) || 1;
            showReviewModal(productId);
        }
    });
});

function initFavoritesPage() {
    renderFavorites();
    setupFavoritesInteractions();
}

function setupFavoritesInteractions() {
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
        
        if (e.target.classList.contains('details-btn')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            window.location.href = `product.html?id=${productId}`;
        }
        
        if (e.target.classList.contains('quick-view')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            window.location.href = `product.html?id=${productId}`;
        }
        
        if (e.target.classList.contains('color-option')) {
            const productId = parseInt(e.target.getAttribute('data-product-id'));
            const colorIndex = parseInt(e.target.getAttribute('data-color-index'));
            
            const colorOptions = document.querySelectorAll(`#color-options-${productId} .color-option`);
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            e.target.classList.add('active');
            
            changeProductImageByColor(productId, colorIndex);
        }
        
        if (e.target.closest('.favorite-btn')) {
            const btn = e.target.closest('.favorite-btn');
            const productId = parseInt(btn.getAttribute('data-id'));
            toggleFavorite(productId);
        }
    });
}