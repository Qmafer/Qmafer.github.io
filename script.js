const translations = {
    en: {
        title: "Smartphone Selector",
        description: "Click on one of the options to select features for your smartphone.",
        labels: {
            budget: "Budget",
            memory: "Memory",
            screen: "Screen",
            camera: "Camera",
            processor: "Processor",
            weight: "Weight",
            battery: "Battery",
            Gsupport: "5G support",
            RAM: "RAM"
        },
        button: "Show Result",
        noResults: "No smartphones found with these specifications.",
        resultTitle: "Your Smartphone",
        resultBuyTitle: "You can buy:"
    },
    ru: {
        title: "Выбор смартфона",
        description: "Нажмите на параметры, чтобы выбрать характеристики смартфона.",
        labels: {
            budget: "Бюджет",
            memory: "Память",
            screen: "Экран",
            camera: "Камера",
            processor: "Процессор",
            weight: "Вес",
            battery: "Аккумулятор",
            Gsupport: "Поддержка 5G",
            RAM: "Оперативная память"
        },
        button: "Показать результат",
        noResults: "По данным характеристикам смартфон не найден.",
        resultTitle: "Ваш смартфон",
        resultBuyTitle: "Вы можете купить:"
    }
};

// Устанавливаем язык
let currentLanguage = "en"; // Язык по умолчанию

function setLanguage(lang) {
    currentLanguage = lang;

    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("description").textContent = translations[lang].description;
    document.getElementById("label-budget").textContent = translations[lang].labels.budget;
    document.getElementById("label-processor").textContent = translations[lang].labels.processor;
    document.getElementById("label-battery").textContent = translations[lang].labels.battery;
    document.getElementById("label-screen").textContent = translations[lang].labels.screen;
    document.getElementById("label-camera").textContent = translations[lang].labels.camera;
    document.getElementById("label-Gsupport").textContent = translations[lang].labels.Gsupport;
    document.getElementById("label-memory").textContent = translations[lang].labels.memory;
    document.getElementById("label-RAM").textContent = translations[lang].labels.RAM;
    document.getElementById("showResult").textContent = translations[lang].button;
}

// Добавляем обработчики для кнопок переключения языка
document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
document.getElementById("lang-ru").addEventListener("click", () => setLanguage("ru"));

// Устанавливаем язык по умолчанию
setLanguage("en");

// Логика отображения результатов
document.getElementById("showResult").addEventListener("click", function () {
    const budget = document.getElementById("budget").value;
    const processor = document.getElementById("processor").value;
    const battery = document.getElementById("battery").value;
    const screen = document.getElementById("screen").value;
    const camera = document.getElementById("camera").value;
    const Gsupport = document.getElementById("Gsupport").value;
    const memory = document.getElementById("memory").value;
    const RAM = document.getElementById("RAM").value;

    const models = {
        "15-25_1/5_3/5_3/5_2/5_-_128GB_8GB": {
            name: "Xiaomi Redmi Note 13",
            image: "/images/note13.jpg",
            details: {
                en: "Xiaomi Redmi Note 13:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a Qualcomm Snapdragon 685 processor with a clock frequency of 2.8 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Adreno 610 video processor. It has 128 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 108 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором Qualcomm Snapdragon 685 с тактовой частотой 2.8 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Adreno 610. Имеет 128 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 108 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE).А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-256gb-midnight-black-400259093", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/2999a9248dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-cernyj/", class: "orange" }
            ]
        },
        "15-25_1/5_3/5_3/5_2/5_-_256GB_8GB": {
            name: "Xiaomi Redmi Note 13",
            image: "/images/note13.jpg",
            details: {
                en: "Xiaomi Redmi Note 13:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a Qualcomm Snapdragon 685 processor with a clock frequency of 2.8 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Adreno 610 video processor. It has 256 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 108 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором Qualcomm Snapdragon 685 с тактовой частотой 2.8 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Adreno 610. Имеет 256 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 108 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE).А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-256gb-midnight-black-400259093", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/2999a9248dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-cernyj/", class: "orange" }
            ]
        },
        "15-25_1/5_3/5_3/5_2/5_-_512GB_8GB": {
            name: "Xiaomi Redmi Note 13",
            image: "/images/note13.jpg",
            details: {
                en: "Xiaomi Redmi Note 13:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a Qualcomm Snapdragon 685 processor with a clock frequency of 2.8 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Adreno 610 video processor. It has 512 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 108 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором Qualcomm Snapdragon 685 с тактовой частотой 2.8 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Adreno 610. Имеет 512 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 108 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE).А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-8-256gb-midnight-black-400259093", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/2999a9248dcced20/667-smartfon-xiaomi-redmi-note-13-128-gb-cernyj/", class: "orange" }
            ]
        },
        "15-25_2/5_2/5_2/5_2/5_-_128GB_4GB": {
            name: "Samsung A15",
            image: "/images/a15.jpg",
            details: {
                en: "Samsung A15:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a MediaTek Helio G99 processor with a clock speed of 2.2 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G57 MC2 video processor. has 128 GB of internal memory and 4 GB of RAM. The smartphone runs on the Android 14 operating system. There are 3 main cameras on the device, with a resolution of 50 MP, 5 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 13 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The Super AMOLED screen has a diagonal of 6.5 inches, with a resolution of 2340x1080 pixels and a frequency of 90 Hz. At the same time, the pixel density of this screen is 396 PPI. The aspect ratio of the screen is 19.5:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Samsung A15:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором MediaTek Helio G99 с тактовой частотой 2.2 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G57 MC2. имеет 128 ГБ встроенной памяти и 4 ГБ оперативной. Смартфон работает на базе операционной системы Android 14. Основных камер на устройстве 3 шт., разрешением 50 Мп, 5 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 13 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. Super AMOLED экран имеет диагональ 6.5 дюйм, с разрешением 2340x1080 пикселей и частотой 90 Гц. При этом плотность пикселей данного экрана составляет 396 PPI. Соотношение сторон экрана – 19.5:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE). А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a15-lte-4-128gb-light-blue-30069977", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/bfacd245af386452/65-smartfon-samsung-galaxy-a15-4g-128-gb-goluboj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_4/5_2/5_-_128GB_8GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a MediaTek Helio G99 Ultra processor with a clock speed of 2.2 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G57 MC2 video processor. has 128 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 200 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором MediaTek Helio G99 Ultra с тактовой частотой 2.2 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G57 MC2. имеет 128 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 200 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE). А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_4/5_2/5_-_256GB_8GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a MediaTek Helio G99 Ultra processor with a clock speed of 2.2 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G57 MC2 video processor. has 256 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 200 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором MediaTek Helio G99 Ultra с тактовой частотой 2.2 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G57 MC2. имеет 256 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 200 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE). А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "15-25_2/5_2/5_2/5_2/5_-_256GB_4GB": {
            name: "Samsung A15",
            image: "/images/a15.jpg",
            details: {
                en: "Samsung A15:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a MediaTek Helio G99 processor with a clock speed of 2.2 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G57 MC2 video processor. has 256 GB of internal memory and 4 GB of RAM. The smartphone runs on the Android 14 operating system. There are 3 main cameras on the device, with a resolution of 50 MP, 5 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 13 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The Super AMOLED screen has a diagonal of 6.5 inches, with a resolution of 2340x1080 pixels and a frequency of 90 Hz. At the same time, the pixel density of this screen is 396 PPI. The aspect ratio of the screen is 19.5:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Samsung A15:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором MediaTek Helio G99 с тактовой частотой 2.2 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G57 MC2. имеет 256 ГБ встроенной памяти и 4 ГБ оперативной. Смартфон работает на базе операционной системы Android 14. Основных камер на устройстве 3 шт., разрешением 50 Мп, 5 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 13 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. Super AMOLED экран имеет диагональ 6.5 дюйм, с разрешением 2340x1080 пикселей и частотой 90 Гц. При этом плотность пикселей данного экрана составляет 396 PPI. Соотношение сторон экрана – 19.5:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE). А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a15-lte-4-128gb-light-blue-30069977", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/bfacd245af386452/65-smartfon-samsung-galaxy-a15-4g-128-gb-goluboj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_4/5_2/5_-_512GB_12GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a MediaTek Helio G99 Ultra processor with a clock speed of 2.2 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G57 MC2 video processor. has 512 GB of internal memory and 12 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 200 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором MediaTek Helio G99 Ultra с тактовой частотой 2.2 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G57 MC2. имеет 512 ГБ встроенной памяти и 12 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 200 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE). А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_3/5_4/5_+_128GB_8GB": {
            name: "Samsung A25",
            image: "/images/a25jpg.jpg",
            details: {
                en: "Samsung A25:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a Samsung Exynos 1280 processor with a clock speed of 2.4 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G68 video processor. has 128 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 14 operating system. There are 3 main cameras on the device, with a resolution of 50 MP, 8 MP, , 2 MP. The maximum video resolution is 4K. Front cameras - 1 pc., with a resolution of 13 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The Super AMOLED screen has a diagonal of 6.5 inches, with a resolution of 2340x1080 pixels and a frequency of 120 Hz. At the same time, the pixel density of this screen is 396 PPI. The aspect ratio of the screen is 19.5:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 5G. And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Samsung A25:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором Samsung Exynos 1280 с тактовой частотой 2.4 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G68. имеет 128 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 14. Основных камер на устройстве 3 шт., разрешением 50 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - 4K. Фронтальных камер – 1 шт., разрешением 13 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. Super AMOLED экран имеет диагональ 6.5 дюйм, с разрешением 2340x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 396 PPI. Соотношение сторон экрана – 19.5:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 5G. А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a25-5g-6-128gb-blue-black-30070151", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/fa99bfb6700952cb/65-smartfon-samsung-galaxy-a25-128-gb-goluboj/", class: "orange" }
            ]
        },
        "15-25_2/5_3/5_3/5_4/5_+_256GB_8GB": {
            name: "Samsung A25",
            image: "/images/a25jpg.jpg",
            details: {
                en: "Samsung A25:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a Samsung Exynos 1280 processor with a clock speed of 2.4 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G68 video processor. has 256 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 14 operating system. There are 3 main cameras on the device, with a resolution of 50 MP, 8 MP, , 2 MP. The maximum video resolution is 4K. Front cameras - 1 pc., with a resolution of 13 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The Super AMOLED screen has a diagonal of 6.5 inches, with a resolution of 2340x1080 pixels and a frequency of 120 Hz. At the same time, the pixel density of this screen is 396 PPI. The aspect ratio of the screen is 19.5:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 5G. And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Samsung A25:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором Samsung Exynos 1280 с тактовой частотой 2.4 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G68. имеет 256 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 14. Основных камер на устройстве 3 шт., разрешением 50 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - 4K. Фронтальных камер – 1 шт., разрешением 13 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. Super AMOLED экран имеет диагональ 6.5 дюйм, с разрешением 2340x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 396 PPI. Соотношение сторон экрана – 19.5:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 5G. А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a25-5g-6-128gb-blue-black-30070151", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/fa99bfb6700952cb/65-smartfon-samsung-galaxy-a25-128-gb-goluboj/", class: "orange" }
            ]
        },
        "25-50_2/5_3/5_4/5_2/5_+_128GB_8GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤㅤ The smartphone is equipped with a MediaTek Helio G99 Ultra processor with a clock speed of 2.2 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G57 MC2 video processor. has 128 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 200 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором MediaTek Helio G99 Ultra с тактовой частотой 2.2 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G57 MC2. имеет 128 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 200 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE). А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "25-50_2/5_3/5_4/5_2/5_+_256GB_8GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "Xiaomi Redmi Note 13:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a MediaTek Helio G99 Ultra processor with a clock speed of 2.2 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G57 MC2 video processor. has 256 GB of internal memory and 8 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 200 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором MediaTek Helio G99 Ultra с тактовой частотой 2.2 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G57 MC2. имеет 256 ГБ встроенной памяти и 8 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 200 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE). А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "25-50_2/5_3/5_4/5_2/5_+_512GB_12GB": {
            name: "Xiaomi Redmi Note 13 pro",
            image: "/images/note13pro.webp",
            details: {
                en: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The smartphone is equipped with a MediaTek Helio G99 Ultra processor with a clock speed of 2.2 GHz. The total number of CPUs is 8 pcs. The graphics on the device are based on the Mali-G57 MC2 video processor. has 512 GB of internal memory and 12 GB of RAM. The smartphone runs on the Android 13 operating system. There are 3 main cameras on the device, with a resolution of 200 MP, 8 MP, , 2 MP. The maximum video resolution is FullHD. Front cameras - 1 pc., with a resolution of 16 MP. The battery is 5000 mAh, non-removable. A USB Type-C connector is used for charging. Fast charging function - yes, wireless charging - no. The AMOLED screen has a diagonal of 6.67 inches, with a resolution of 2400x1080 pixels and a frequency of 120 Hz. The pixel density of this screen is 395 PPI. The aspect ratio of the screen is 20:9. The device can work with 2 SIM cards (NanoSIM). The smartphone supports all modern mobile communication standards, namely 4G (LTE). And also all modern satellite navigation standards - GLONASS. There is Wi-Fi support. There is NFC Yes (contactless payment system).",
                ru: "Xiaomi Redmi Note 13 pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон оснащен процессором MediaTek Helio G99 Ultra с тактовой частотой 2.2 ГГц. При этом общее количество CPU – 8 шт. Графика на устройстве работает на базе видеопроцессора Mali-G57 MC2. имеет 512 ГБ встроенной памяти и 12 ГБ оперативной. Смартфон работает на базе операционной системы Android 13. Основных камер на устройстве 3 шт., разрешением 200 Мп, 8 Мп, , 2 Мп. Максимальное разрешение видео - FullHD. Фронтальных камер – 1 шт., разрешением 16 Мп Аккумулятор объемом 5000 мАч, несъемный. Для зарядки используется разъем USB Type-C. Функция быстрой зарядки – есть, беспроводная зарядка – нет. AMOLED экран имеет диагональ 6.67 дюйм, с разрешением 2400x1080 пикселей и частотой 120 Гц. При этом плотность пикселей данного экрана составляет 395 PPI. Соотношение сторон экрана – 20:9. Устройство может работать с 2 шт SIM-картами (NanoSIM). Смартфон поддерживает все современные стандарты мобильной связи, а именно 4G(LTE). А также все современные стандарты спутниковой навигации — ГЛОНАСС. Есть поддержка Wi-Fi. Есть NFC Есть (система бесконтактных платежей)."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-redmi-note-13-pro-8-256gb-midnight-black-400257981", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/807d7b389028ed20/667-smartfon-xiaomi-redmi-note-13-pro-4g-128-gb-zelenyj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_256GB_8GB": {
            name: "Samsung A35",
            image: "/images/a35.jpg",
            details: {
                en: "Samsung A35:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The Samsung Galaxy A35 5G 128GB smartphone in a yellow plastic case with a glass back panel has a 6.6” display with a built-in fingerprint scanner and scratch protection. The AMOLED display shows a clear and bright picture in a resolution of 2340x1080 dpi without graininess and visible pixels. You can work with 2 SIM cards in standby mode and use 5G mobile communications. Thanks to the 8-core Samsung Exynos 1380 processor and 8 GB RAM, the Samsung Galaxy A35 5G does not freeze when running games and heavy applications. A universal slot for a SIM card or microSD allows you to expand 128 GB of internal memory by 1 TB. The smartphone is equipped with a triple ultra-wide-angle camera with different photo and video shooting modes and 4K support.",
                ru: "Samsung A35:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон Samsung Galaxy A35 5G 128 ГБ в желтом пластиковом корпусе со стеклянной задней панелью оснащен дисплеем 6.6” со встроенным сканером отпечатков пальцев и защитой от царапин. AMOLED-дисплей показывает четкую и яркую картинку в разрешении 2340x1080 dpi без зернистости и видимых пикселей. Вы можете работать с 2 SIM-картами в режиме ожидания и использовать мобильную связь 5G. Благодаря 8-ядерному процессору Samsung Exynos 1380 и ОЗУ 8 ГБ Samsung Galaxy A35 5G не зависает при запуске игр и тяжеловесных приложений. Универсальный слот для SIM-карты или microSD позволяет расширять 128 ГБ собственной памяти на 1 ТБ. Смартфон оснащен тройной сверхширокоугольной камерой с разными режимами фото- и видеосъемки и поддержкой 4K."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a35-5g-8-128gb-blue-black-30070624", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/efcf0dcb1903ae4b/66-smartfon-samsung-galaxy-a35-128-gb-zeltyj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_512GB_12GB": {
            name: "Samsung A35",
            image: "/images/a35.jpg",
            details: {
                en: "Samsung A35:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The Samsung Galaxy A35 5G 128GB smartphone in a yellow plastic case with a glass back panel has a 6.6” display with a built-in fingerprint scanner and scratch protection. The AMOLED display shows a clear and bright picture in a resolution of 2340x1080 dpi without graininess and visible pixels. You can work with 2 SIM cards in standby mode and use 5G mobile communications. Thanks to the 8-core Samsung Exynos 1380 processor and 8 GB RAM, the Samsung Galaxy A35 5G does not freeze when running games and heavy applications. A universal slot for a SIM card or microSD allows you to expand 128 GB of internal memory by 1 TB. The smartphone is equipped with a triple ultra-wide-angle camera with different photo and video shooting modes and 4K support.",
                ru: "Samsung A35:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон Samsung Galaxy A35 5G 128 ГБ в желтом пластиковом корпусе со стеклянной задней панелью оснащен дисплеем 6.6” со встроенным сканером отпечатков пальцев и защитой от царапин. AMOLED-дисплей показывает четкую и яркую картинку в разрешении 2340x1080 dpi без зернистости и видимых пикселей. Вы можете работать с 2 SIM-картами в режиме ожидания и использовать мобильную связь 5G. Благодаря 8-ядерному процессору Samsung Exynos 1380 и ОЗУ 8 ГБ Samsung Galaxy A35 5G не зависает при запуске игр и тяжеловесных приложений. Универсальный слот для SIM-карты или microSD позволяет расширять 128 ГБ собственной памяти на 1 ТБ. Смартфон оснащен тройной сверхширокоугольной камерой с разными режимами фото- и видеосъемки и поддержкой 4K."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a35-5g-8-128gb-blue-black-30070624", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/efcf0dcb1903ae4b/66-smartfon-samsung-galaxy-a35-128-gb-zeltyj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_128GB_8GB": {
            name: "Samsung A55",
            image: "/images/a55.png",
            details: {
                en: "Samsung A55:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤThe Samsung Galaxy A55 5G smartphone operates on a single charge for 79 hours in track listening mode. The computing power consists of an 8-core processor and 8 GB of RAM. Files are stored in the built-in memory of 128 GB with the possibility of subsequent expansion using microSD, microSDHC, microSDXC cards. The Samsung Galaxy A55 5G smartphone is equipped with a 3-module camera with 10x digital zoom, bringing objects closer without losing sharpness. The LED flash enhances the brightness of the frame in low light. Stereo speakers allow you to fill the videos with multidimensional sound. The content is broadcast on a 6.6-inch display, which is designed on the basis of a Super AMOLED matrix. It guarantees the display of a rich black shade and a timely change of frames when demonstrating dynamic episodes.",
                ru: "Samsung A55:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон Samsung Galaxy A55 5G работает от одного заряда на протяжении 79 ч в режиме прослушивания треков. Вычислительная мощность состоит из 8-ядерного процессора и 8 ГБ оперативной памяти. Хранение файлов производится во встроенной памяти объемом 128 ГБ с возможность последующего расширения при помощи карт microSD, microSDHC, microSDXC. Смартфон Samsung Galaxy A55 5G оснащен 3-модульной камерой с 10-кратным цифровым зумом, приближающим объекты без потери резкости. Светодиодная вспышка усиливает яркость кадра при недостаточном освещении. Наполнить ролики многомерным звуком позволяют стереодинамики. Контент транслируется на 6.6-дюймовом дисплее, который сконструирован на основе Super AMOLED-матрицы. Она гарантирует отображение насыщенного черного оттенка и своевременную смену кадров при демонстрации динамичных эпизодов."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a55-5g-8-128gb-blue-black-30070642", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/02d8e584daec4713/66-smartfon-samsung-galaxy-a55-128-gb-goluboj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_256GB_8GB": {
            name: "Samsung A55",
            image: "/images/a55.png",
            details: {
                en: "Samsung A55:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤThe Samsung Galaxy A55 5G smartphone operates on a single charge for 79 hours in track listening mode. The computing power consists of an 8-core processor and 8 GB of RAM. Files are stored in the built-in memory of 128 GB with the possibility of subsequent expansion using microSD, microSDHC, microSDXC cards. The Samsung Galaxy A55 5G smartphone is equipped with a 3-module camera with 10x digital zoom, bringing objects closer without losing sharpness. The LED flash enhances the brightness of the frame in low light. Stereo speakers allow you to fill the videos with multidimensional sound. The content is broadcast on a 6.6-inch display, which is designed on the basis of a Super AMOLED matrix. It guarantees the display of a rich black shade and a timely change of frames when demonstrating dynamic episodes.",
                ru: "Samsung A55:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон Samsung Galaxy A55 5G работает от одного заряда на протяжении 79 ч в режиме прослушивания треков. Вычислительная мощность состоит из 8-ядерного процессора и 8 ГБ оперативной памяти. Хранение файлов производится во встроенной памяти объемом 128 ГБ с возможность последующего расширения при помощи карт microSD, microSDHC, microSDXC. Смартфон Samsung Galaxy A55 5G оснащен 3-модульной камерой с 10-кратным цифровым зумом, приближающим объекты без потери резкости. Светодиодная вспышка усиливает яркость кадра при недостаточном освещении. Наполнить ролики многомерным звуком позволяют стереодинамики. Контент транслируется на 6.6-дюймовом дисплее, который сконструирован на основе Super AMOLED-матрицы. Она гарантирует отображение насыщенного черного оттенка и своевременную смену кадров при демонстрации динамичных эпизодов."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a55-5g-8-128gb-blue-black-30070642", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/02d8e584daec4713/66-smartfon-samsung-galaxy-a55-128-gb-goluboj/", class: "orange" }
            ]
        },
        "25-50_3/5_3/5_3/5_4/5_+_256GB_12GB": {
            name: "Samsung A55",
            image: "/images/a55.png",
            details: {
                en: "Samsung A55:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤThe Samsung Galaxy A55 5G smartphone operates on a single charge for 79 hours in track listening mode. The computing power consists of an 8-core processor and 8 GB of RAM. Files are stored in the built-in memory of 128 GB with the possibility of subsequent expansion using microSD, microSDHC, microSDXC cards. The Samsung Galaxy A55 5G smartphone is equipped with a 3-module camera with 10x digital zoom, bringing objects closer without losing sharpness. The LED flash enhances the brightness of the frame in low light. Stereo speakers allow you to fill the videos with multidimensional sound. The content is broadcast on a 6.6-inch display, which is designed on the basis of a Super AMOLED matrix. It guarantees the display of a rich black shade and a timely change of frames when demonstrating dynamic episodes.",
                ru: "Samsung A55:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон Samsung Galaxy A55 5G работает от одного заряда на протяжении 79 ч в режиме прослушивания треков. Вычислительная мощность состоит из 8-ядерного процессора и 8 ГБ оперативной памяти. Хранение файлов производится во встроенной памяти объемом 128 ГБ с возможность последующего расширения при помощи карт microSD, microSDHC, microSDXC. Смартфон Samsung Galaxy A55 5G оснащен 3-модульной камерой с 10-кратным цифровым зумом, приближающим объекты без потери резкости. Светодиодная вспышка усиливает яркость кадра при недостаточном освещении. Наполнить ролики многомерным звуком позволяют стереодинамики. Контент транслируется на 6.6-дюймовом дисплее, который сконструирован на основе Super AMOLED-матрицы. Она гарантирует отображение насыщенного черного оттенка и своевременную смену кадров при демонстрации динамичных эпизодов."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-a55-5g-8-128gb-blue-black-30070642", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/02d8e584daec4713/66-smartfon-samsung-galaxy-a55-128-gb-goluboj/", class: "orange" }
            ]
        },
        "25-50_4/5_4/5_4/5_5/5_+_128GB_12GB": {
            name: "Samsung galaxy S21 FE",
            image: "/images/s21fe.jpg",
            details: {
                en: "Samsung galaxy S21 FE:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The Samsung Galaxy S21 FE smartphone has a thin case with a classic color scheme and offers wide functionality of the flagship level. It has a frameless 6.4-inch display based on the Dynamic AMOLED 2X panel (2340x1080 pixels), which displays a detailed and colorful picture. The hardware platform led by the Exynos 2100 processor guarantees system performance. The 12 + 12 + 8 MP camera with flash, autofocus and optical stabilization allows you to create realistic photos with natural background blur and video. On the front side, there is a 32 MP camera. Stereo speakers reproduce clear sound. The phone has two slots for installing SIM cards and popular interfaces. The 4500 mAh battery guarantees long battery life of the Samsung Galaxy S21 FE and supports wireless charging.",
                ru: "Samsung galaxy S21 FE:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон Samsung Galaxy S21 FE выполнен в тонком корпусе с классической расцветкой и предлагает широкие функциональные возможности флагманского уровня. В нем установлен безрамочный дисплей 6.4 дюйма на основе панели Dynamic AMOLED 2X (2340x1080 пикселей), на котором отображается детализированная и красочная картинка. Аппаратная платформа во главе с процессором Exynos 2100 гарантирует быстродействие системы. Камера 12+12+8 Мп со вспышкой, автофокусом и оптической стабилизацией позволяет создавать реалистичные фотографии с естественным размытием заднего фона и видео. На передней стороне предлагается камера 32 Мп. Стереодинамики воспроизводят четкий звук. В телефоне реализованы два слота под установку карт SIM и востребованные интерфейсы. Аккумулятор 4500 мА*ч гарантирует длительную автономность Samsung Galaxy S21 FE и поддерживает беспроводную зарядку."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-s21fe-128gb-gray-sm-g990b-30061119", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/eaa2674ac73c20b9/64-smartfon-samsung-galaxy-s21-fe-256-gb-seryj/", class: "orange" }
            ]
        },
        "25-50_5/5_4/5_4/5_4/5_+_256GB_8GB": {
            name: "Xiaomi POCO X6 Pro",
            image: "/images/poco6pro.jpg",
            details: {
                en: "Xiaomi POCO X6 Pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The POCO X6 Pro smartphone is made in a black plastic case. The IP54 protection class guarantees the device's resistance to dust, moisture and splashes of water. The front side has Corning Gorilla Glass 5 against scratches. The 6.67 screen with an AMOLED matrix provides a bright, clear and colorful image. For detailed shots, the smartphone offers a main triple camera 64 + 8 + 2 MP and a front camera 16 MP. A dual LED flash illuminates the space in low light conditions.",
                ru: "Xiaomi POCO X6 Pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон POCO X6 Pro выполнен в пластиковом черном корпусе. Класс защиты IP54 гарантирует устойчивость устройства к пыли, влаге и брызгам воды. На передней стороне установлено стекло Corning Gorilla Glass 5 против царапин. Экран диагональю 6.67 с матрицей AMOLED обеспечивает яркое, четкое и красочное изображение. Для детализированных снимков в смартфоне предлагаются основная тройная камера 64+8+2 Мп и фронтальная камера 16 Мп. Двойная LED-вспышка освещает пространство в условиях недостаточной освещенности."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "25-50_5/5_4/5_4/5_4/5_+_512GB_12GB": {
            name: "Xiaomi POCO X6 Pro",
            image: "/images/poco6pro.jpg",
            details: {
                en: "Xiaomi POCO X6 Pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ The POCO X6 Pro smartphone is made in a black plastic case. The IP54 protection class guarantees the device's resistance to dust, moisture and splashes of water. The front side has Corning Gorilla Glass 5 against scratches. The 6.67 screen with an AMOLED matrix provides a bright, clear and colorful image. For detailed shots, the smartphone offers a main triple camera 64 + 8 + 2 MP and a front camera 16 MP. A dual LED flash illuminates the space in low light conditions.",
                ru: "Xiaomi POCO X6 Pro:ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤСмартфон POCO X6 Pro выполнен в пластиковом черном корпусе. Класс защиты IP54 гарантирует устойчивость устройства к пыли, влаге и брызгам воды. На передней стороне установлено стекло Corning Gorilla Glass 5 против царапин. Экран диагональю 6.67 с матрицей AMOLED обеспечивает яркое, четкое и красочное изображение. Для детализированных снимков в смартфоне предлагаются основная тройная камера 64+8+2 Мп и фронтальная камера 16 Мп. Двойная LED-вспышка освещает пространство в условиях недостаточной освещенности."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "100-125_5/5_5/5_4/5_5/5_+_512GB_16GB": {
            name: "Xiaomi 14 Ultra",
            image: "/images/xiaomi14ultra.jpg",
            details: {
                en: "The Xiaomi 14 Ultra smartphone in a metal and leather case is equipped with a 4-module camera with a matrix resolution of 50 MP. Night mode and dual LED flash fill the frames with brightness in low light conditions. The content is broadcast on a 6.73-inch frameless display with a resolution of 3200x1440 pixels. The refresh rate of 120 Hz does not allow delays when changing dynamic scenes. The computing power of the Xiaomi 14 Ultra consists of an 8-core Qualcomm Snapdragon 8 Gen 3 processor and 16 GB of RAM. The 5000 mAh battery supports wireless reverse charging to replenish the energy of various devices. Hi-Res Audio and Dolby Atmos guarantee surround sound playback. Data is stored in the built-in memory of 512 GB.",
                ru: "Смартфон Xiaomi 14 Ultra в корпусе из металла и кожи оснащен 4-модульной камерой с разрешением матрицы 50 Мп. Ночной режим и двойная светодиодная вспышка наполняют кадры яркостью в условиях недостаточного освещения. Контент транслируется на 6.73-дюймовый безрамочный дисплей в разрешении 3200x1440 пикселей. Частота обновления 120 Гц не допускает задержек при смене динамичных сцен. Вычислительная мощность Xiaomi 14 Ultra состоит из 8-ядерного процессора Qualcomm Snapdragon 8 Gen 3 и 16 ГБ оперативной памяти. Аккумулятор емкостью 5000 мАч поддерживает беспроводную реверсивную зарядку для восполнения энергии различных устройств. Hi-Res Audio и Dolby Atmos гарантируют воспроизведение объемного звука. Хранение данных производится во встроенной памяти объемом 512 ГБ."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-14-ultra-16-512gb-black-400283602?utm_source=google&utm_medium=organic&utm_campaign=google&utm_referrer=google", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5c83fb95d123ed20/673-smartfon-xiaomi-14-ultra-512-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_5/5_4/5_5/5_+_512GB_12GB": {
            name: "Xiaomi 14 Ultra",
            image: "/images/xiaomi14ultra.jpg",
            details: {
                en: "The Xiaomi 14 Ultra smartphone in a metal and leather case is equipped with a 4-module camera with a matrix resolution of 50 MP. Night mode and dual LED flash fill the frames with brightness in low light conditions. The content is broadcast on a 6.73-inch frameless display with a resolution of 3200x1440 pixels. The refresh rate of 120 Hz does not allow delays when changing dynamic scenes. The computing power of the Xiaomi 14 Ultra consists of an 8-core Qualcomm Snapdragon 8 Gen 3 processor and 16 GB of RAM. The 5000 mAh battery supports wireless reverse charging to replenish the energy of various devices. Hi-Res Audio and Dolby Atmos guarantee surround sound playback. Data is stored in the built-in memory of 512 GB.",
                ru: "Смартфон Xiaomi 14 Ultra в металлическом и кожаном корпусе оснащен 4-модульной камерой с разрешением матрицы 50 МП. Ночной режим и двойная светодиодная вспышка наполняют кадры яркостью в условиях недостаточной освещенности. Контент транслируется на 6,73-дюймовый безрамочный дисплей с разрешением 3200x1440 пикселей. Частота обновления 120 Гц не допускает задержек при смене динамичных сцен. Вычислительная мощность Xiaomi 14 Ultra состоит из 8-ядерного процессора Qualcomm Snapdragon 8 Gen 3 и 16 ГБ оперативной памяти. Аккумулятор емкостью 5000 мАч поддерживает беспроводную обратную зарядку для восполнения энергии различных устройств. Hi-Res Audio и Dolby Atmos гарантируют воспроизведение объемного звука. Данные хранятся во встроенной памяти объемом 512 ГБ."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-xiaomi-14-ultra-16-512gb-black-400283602?utm_source=google&utm_medium=organic&utm_campaign=google&utm_referrer=google", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5c83fb95d123ed20/673-smartfon-xiaomi-14-ultra-512-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_4/5_4/5_4/5_4/5_+_128GB_8GB": {
            name: "Samsung Galaxy S24 FE",
            image: "/images/s24fe.jpg",
            details: {
                en: "Galaxy S24 FE with enhanced performance for smooth multitasking. Enjoy immersive, realistic gaming with the Samsung Exynos 2400e processor. Immerse yourself in engaging content that’s brighter and more colorful than ever with the improved Dynamic AMOLED 2X display. Enjoy a larger, more immersive viewing experience with narrow bezels.",
                ru: "Galaxy S24 FE с повышенной производительностью, обеспечивающей плавную работу в режиме многозадачности. Наслаждайтесь увлекательной и реалистичной игрой благодаря процессору Samsung Exynos 2400e. Погрузитесь в увлекательный контент, который теперь ярче и красочнее, чем когда-либо, благодаря улучшенному дисплею Dynamic AMOLED 2X. Оцените удобство просмотра контента на экране большего размера с тонкими рамками."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-s24-fe-8-128gb-grafitovyi-30075194", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/74eb0fa77981d582/67-smartfon-samsung-galaxy-s24-fe-256-gb-seryj/", class: "orange" }
            ]
        },
        "50-75_4/5_4/5_4/5_4/5_+_256GB_8GB": {
            name: "Samsung Galaxy S24 FE",
            image: "/images/s24fe.jpg",
            details: {
                en: "Galaxy S24 FE with enhanced performance for smooth multitasking. Enjoy immersive, realistic gaming with the Samsung Exynos 2400e processor. Immerse yourself in engaging content that’s brighter and more colorful than ever with the improved Dynamic AMOLED 2X display. Enjoy a larger, more immersive viewing experience with narrow bezels.",
                ru: "Galaxy S24 FE с повышенной производительностью, обеспечивающей плавную работу в режиме многозадачности. Наслаждайтесь увлекательной и реалистичной игрой благодаря процессору Samsung Exynos 2400e. Погрузитесь в увлекательный контент, который теперь ярче и красочнее, чем когда-либо, благодаря улучшенному дисплею Dynamic AMOLED 2X. Оцените удобство просмотра контента на экране большего размера с тонкими рамками."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-s24-fe-8-128gb-grafitovyi-30075194", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/74eb0fa77981d582/67-smartfon-samsung-galaxy-s24-fe-256-gb-seryj/", class: "orange" }
            ]
        },
        "50-75_4/5_4/5_4/5_4/5_+_512GB_8GB": {
            name: "Samsung Galaxy S24 FE",
            image: "/images/s24fe.jpg",
            details: {
                en: "Galaxy S24 FE with enhanced performance for smooth multitasking. Enjoy immersive, realistic gaming with the Samsung Exynos 2400e processor. Immerse yourself in engaging content that’s brighter and more colorful than ever with the improved Dynamic AMOLED 2X display. Enjoy a larger, more immersive viewing experience with narrow bezels.",
                ru: "Galaxy S24 FE с повышенной производительностью, обеспечивающей плавную работу в режиме многозадачности. Наслаждайтесь увлекательной и реалистичной игрой благодаря процессору Samsung Exynos 2400e. Погрузитесь в увлекательный контент, который теперь ярче и красочнее, чем когда-либо, благодаря улучшенному дисплею Dynamic AMOLED 2X. Оцените удобство просмотра контента на экране большего размера с тонкими рамками."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-samsung-galaxy-s24-fe-8-128gb-grafitovyi-30075194", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/74eb0fa77981d582/67-smartfon-samsung-galaxy-s24-fe-256-gb-seryj/", class: "orange" }
            ]
        },
        "25-50_2/5_3/5_3/5_3/5_+_128GB_8GB": {
            name: "Google Pixel 7a",
            image: "/images/pixel7a.jpg",
            details: {
                en: "The Google Pixel 7a smartphone with the 8-core flagship Google Tensor G2 processor pleasantly surprises even sophisticated users with its performance. Its 6.1-inch screen is protected by Gorilla Glass 3 from scratches. The OLED display resolution is 2400x1080 pixels. The plastic charcoal-gray case is protected from moisture and dust according to the IP67 standard. For contactless payment, the Google Pixel 7a was equipped with an NFC module, and for clear voice sound during calls and video calls - a dual microphone with noise reduction. To store applications and many files, the smartphone received 128 GB of internal memory.",
                ru: "Смартфон Google Pixel 7a с 8-ядерным флагманским процессором Google Tensor G2 приятно удивляет своей производительностью даже искушенных пользователей. Его 6.1-дюймовый экран защищен покрытием Gorilla Glass 3 от царапин. Разрешение OLED-дисплея составляет 2400x1080 пикс. Пластиковый угольно-серый корпус защищен от влаги и пыли по стандарту IP67. Для бесконтактной оплаты Google Pixel 7a был оснащен модулем NFC, а для чистого звучания голоса во время звонков и видеосвязи – двойной микрофон с шумоподавлением. Для хранения приложений и множества файлов смартфон получил 128 ГБ встроенной памяти."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-7a-8-128gb-charcoal-400180228", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/38ad56c70e8ced20/61-smartfon-google-pixel-7a-128-gb-seryj/", class: "orange" }
            ]
        },
        "25-50_3/5_4/5_4/5_4/5_+_128GB_8GB": {
            name: "Google Pixel 8a",
            image: "/images/pixel8a.webp",
            details: {
                en: "The Google Pixel 8 smartphone is equipped with a 6.2-inch display with a Corning Gorilla Glass Victus coating, which prevents the risk of scratches. The OLED matrix helps display bright colors and timely frame changes in saturated scenes. Capture of distant elements is guaranteed by a dual-module camera with a viewing angle of 125.8. The Astrophotography option allows you to capture the starry sky. The Bokeh effect blurs the background, focusing on the main object. The computing power of the Google Pixel 8 smartphone consists of a 9-core processor and 8 GB of RAM. Users can quickly launch applications and surf between windows. Stereo speakers are responsible for the multidimensionality of the sound. The battery capacity of 4575 mAh is designed for 72 hours of standby time. Data is stored in the built-in memory of 128 GB.",
                ru: "Смартфон Google Pixel 8 оборудован 6.2-дюймовым дисплеем с покрытием Corning Gorilla Glass Victus, которое предупреждает риск появления царапин. Отображению ярких цветов и своевременной смене кадров при насыщенных сценах способствует OLED-матрица. Захват удаленных элементов гарантирует двухмодульная камера с углом обзора 125.8. Опция «Астрофотография» позволяет запечатлеть звездное небо. Эффект Боке размывает задний фон, фокусируя внимание на главном объекте. Вычислительная мощность смартфона Google Pixel 8 состоит из 9-ядерного процессора и 8 ГБ оперативной памяти. Пользователи могут быстро запускать приложения и серфить между окнами. За многомерность звучания несут ответственность стереодинамики. Энергия аккумулятора емкостью 4575 мАч рассчитана на 72 ч работы в режиме ожидания. Хранение данных производится во встроенной памяти объемом 128 ГБ."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-8a-8-128gb-obsidian-400365931", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/b9d5402272f25565/62-smartfon-google-pixel-8-128-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_3/5_4/5_4/5_4/5_+_256GB_8GB": {
            name: "Google Pixel 8a",
            image: "/images/pixel8a.webp",
            details: {
                en: "The Google Pixel 8 smartphone is equipped with a 6.2-inch display with a Corning Gorilla Glass Victus coating, which prevents the risk of scratches. The OLED matrix helps display bright colors and timely frame changes in saturated scenes. Capture of distant elements is guaranteed by a dual-module camera with a viewing angle of 125.8. The Astrophotography option allows you to capture the starry sky. The Bokeh effect blurs the background, focusing on the main object. The computing power of the Google Pixel 8 smartphone consists of a 9-core processor and 8 GB of RAM. Users can quickly launch applications and surf between windows. Stereo speakers are responsible for the multidimensionality of the sound. The battery capacity of 4575 mAh is designed for 72 hours of standby time. Data is stored in the built-in memory of 128 GB.",
                ru: "Смартфон Google Pixel 8 оборудован 6.2-дюймовым дисплеем с покрытием Corning Gorilla Glass Victus, которое предупреждает риск появления царапин. Отображению ярких цветов и своевременной смене кадров при насыщенных сценах способствует OLED-матрица. Захват удаленных элементов гарантирует двухмодульная камера с углом обзора 125.8. Опция «Астрофотография» позволяет запечатлеть звездное небо. Эффект Боке размывает задний фон, фокусируя внимание на главном объекте. Вычислительная мощность смартфона Google Pixel 8 состоит из 9-ядерного процессора и 8 ГБ оперативной памяти. Пользователи могут быстро запускать приложения и серфить между окнами. За многомерность звучания несут ответственность стереодинамики. Энергия аккумулятора емкостью 4575 мАч рассчитана на 72 ч работы в режиме ожидания. Хранение данных производится во встроенной памяти объемом 128 ГБ."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-8a-8-128gb-obsidian-400365931", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/b9d5402272f25565/62-smartfon-google-pixel-8-128-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_5/5_4/5_4/5_5/5_+_128GB_12GB": {
            name: "Google Pixel 9",
            image: "/images/pixel9.jpg",
            details: {
                en: "Google Pixel 9. Take clear, bright photos in low light with Night Sight and the 50MP wide-angle camera. The 6.3-inch display is brighter than ever. It runs at up to 120Hz for smooth gaming, scrolling, and app switching. Google’s Tensor G4 is the most powerful chip ever in a Pixel, designed to power Google’s advanced AI. And with 12GB of RAM, the Pixel 9 feels fast and fluid. The Pixel 9’s battery lasts more than 24 hours, and up to 100 hours in Extreme Battery Saver mode. And it can charge up to 55% in about 30 minutes.",
                ru: "Google Pixel 9.Получайте четкие и яркие фотографии при слабом освещении с помощью функции Night Sight и широкоугольной камеры с разрешением 50 МП.6,3-дюймовый дисплей стал ярче, чем когда-либо. Он работает на частоте до 120 Гц для плавной игры, прокрутки и переключения приложений.Google Tensor G4 — самый мощный чип Pixel, разработанный для работы с передовым ИИ Google. А благодаря 12 ГБ оперативной памяти Pixel 9 работает быстро и плавно. Аккумулятор Pixel 9 может работать более 24 часов и до 100 часов в режиме энергосбережения Extreme Battery Saver. И он может заряжаться до 55% примерно за 30 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-9-12-256gb-g-400391988", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/f06665ed7009d9cb/63-smartfon-google-pixel-9-128-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_5/5_4/5_4/5_5/5_+_256GB_12GB": {
            name: "Google Pixel 9",
            image: "/images/pixel9.jpg",
            details: {
                en: "Google Pixel 9. Take clear, bright photos in low light with Night Sight and the 50MP wide-angle camera. The 6.3-inch display is brighter than ever. It runs at up to 120Hz for smooth gaming, scrolling, and app switching. Google’s Tensor G4 is the most powerful chip ever in a Pixel, designed to power Google’s advanced AI. And with 12GB of RAM, the Pixel 9 feels fast and fluid. The Pixel 9’s battery lasts more than 24 hours, and up to 100 hours in Extreme Battery Saver mode. And it can charge up to 55% in about 30 minutes.",
                ru: "Google Pixel 9.Получайте четкие и яркие фотографии при слабом освещении с помощью функции Night Sight и широкоугольной камеры с разрешением 50 МП.6,3-дюймовый дисплей стал ярче, чем когда-либо. Он работает на частоте до 120 Гц для плавной игры, прокрутки и переключения приложений.Google Tensor G4 — самый мощный чип Pixel, разработанный для работы с передовым ИИ Google. А благодаря 12 ГБ оперативной памяти Pixel 9 работает быстро и плавно. Аккумулятор Pixel 9 может работать более 24 часов и до 100 часов в режиме энергосбережения Extreme Battery Saver. И он может заряжаться до 55% примерно за 30 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-9-12-256gb-g-400391988", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/f06665ed7009d9cb/63-smartfon-google-pixel-9-128-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_4/5_4/5_5/5_+_256GB_16GB": {
            name: "Google Pixel 9 pro",
            image: "/images/pixel9pro.webp",
            details: {
                en: "Google Pixel 9 pro. Get clear, bright photos in low light with Night Sight and the 50MP wide-angle camera. The 6.3-inch display is brighter than ever, and runs at up to 120Hz for smooth gaming, scrolling, and app switching. Google Tensor G4 is the most powerful chip ever in a Pixel, designed to power Google’s advanced AI. And with 12GB of RAM, Pixel 9 runs fast and smoothly. The Pixel 9’s battery lasts more than 24 hours, and up to 100 hours in Extreme Battery Saver mode. And it can charge up to 55% in about 30 minutes.",
                ru: "Google Pixel 9 pro. Получайте четкие и яркие фотографии при слабом освещении с помощью функции Night Sight и широкоугольной камеры с разрешением 50 МП.6,3-дюймовый дисплей стал ярче, чем когда-либо. Он работает на частоте до 120 Гц для плавной игры, прокрутки и переключения приложений.Google Tensor G4 — самый мощный чип Pixel, разработанный для работы с передовым ИИ Google. А благодаря 12 ГБ оперативной памяти Pixel 9 работает быстро и плавно. Аккумулятор Pixel 9 может работать более 24 часов и до 100 часов в режиме энергосбережения Extreme Battery Saver. И он может заряжаться до 55% примерно за 30 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-9-pro-16-256gb-obsidian-400408044/overview", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/b23c1a2baad0d582/68-smartfon-google-pixel-9-pro-xl-256-gb-cernyj/", class: "orange" }
            ]
        },
        "100-125_5/5_4/5_4/5_5/5_+_256GB_16GB": {
            name: "Google Pixel 9 pro",
            image: "/images/pixel9pro.webp",
            details: {
                en: "Google Pixel 9 pro. Get clear, bright photos in low light with Night Sight and the 50MP wide-angle camera. The 6.3-inch display is brighter than ever, and runs at up to 120Hz for smooth gaming, scrolling, and app switching. Google Tensor G4 is the most powerful chip ever in a Pixel, designed to power Google’s advanced AI. And with 12GB of RAM, Pixel 9 runs fast and smoothly. The Pixel 9’s battery lasts more than 24 hours, and up to 100 hours in Extreme Battery Saver mode. And it can charge up to 55% in about 30 minutes.",
                ru: "Google Pixel 9 pro. Получайте четкие и яркие фотографии при слабом освещении с помощью функции Night Sight и широкоугольной камеры с разрешением 50 МП.6,3-дюймовый дисплей стал ярче, чем когда-либо. Он работает на частоте до 120 Гц для плавной игры, прокрутки и переключения приложений.Google Tensor G4 — самый мощный чип Pixel, разработанный для работы с передовым ИИ Google. А благодаря 12 ГБ оперативной памяти Pixel 9 работает быстро и плавно. Аккумулятор Pixel 9 может работать более 24 часов и до 100 часов в режиме энергосбережения Extreme Battery Saver. И он может заряжаться до 55% примерно за 30 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-google-pixel-9-pro-16-256gb-obsidian-400408044/overview", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/b23c1a2baad0d582/68-smartfon-google-pixel-9-pro-xl-256-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_5/5_5/5_4/5_+_512GB_12GB": {
            name: "Oneplus 13",
            image: "/images/oneplus13.jpg",
            details: {
                en: "The OnePlus 13 flagship smartphone is billed as one of the best devices on the market, combining impressive specifications with cutting-edge technology. With this model, OnePlus continues its tradition of creating powerful and stylish smartphones that are ideal for demanding users.",
                ru: "Флагманский смартфон OnePlus 13 объявлен как одно из лучших устройств на рынке, объединяющее в себе впечатляющие характеристики и передовые технологии. В этой модели компания OnePlus продолжает традицию создания мощных и стильных смартфонов, которые идеально подходят для требовательных пользователей."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "blue" },
                { name: "Quke", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_5/5_5/5_4/5_+_512GB_16GB": {
            name: "Oneplus 13",
            image: "/images/oneplus13.jpg",
            details: {
                en: "The OnePlus 13 flagship smartphone is billed as one of the best devices on the market, combining impressive specifications with cutting-edge technology. With this model, OnePlus continues its tradition of creating powerful and stylish smartphones that are ideal for demanding users.",
                ru: "Флагманский смартфон OnePlus 13 объявлен как одно из лучших устройств на рынке, объединяющее в себе впечатляющие характеристики и передовые технологии. В этой модели компания OnePlus продолжает традицию создания мощных и стильных смартфонов, которые идеально подходят для требовательных пользователей."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "blue" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "75-100_5/5_5/5_5/5_4/5_+_1024GB_24GB": {
            name: "Oneplus 13",
            image: "/images/oneplus13.jpg",
            details: {
                en: "The OnePlus 13 flagship smartphone is billed as one of the best devices on the market, combining impressive specifications with cutting-edge technology. With this model, OnePlus continues its tradition of creating powerful and stylish smartphones that are ideal for demanding users.",
                ru: "Флагманский смартфон OnePlus 13 объявлен как одно из лучших устройств на рынке, объединяющее в себе впечатляющие характеристики и передовые технологии. В этой модели компания OnePlus продолжает традицию создания мощных и стильных смартфонов, которые идеально подходят для требовательных пользователей."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-poco-x6-pro-5g-12-512gb-black-400285733", class: "blue" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/d54b3faa997fed20/667-smartfon-poco-x6-pro-256-gb-cernyj/", class: "orange" }
            ]
        },
        "50-75_5/5_5/5_4/5_4/5_+_256GB_8GB": {
            name: "Oneplus 12R Ace 3",
            image: "/images/oneplus12r.jpg",
            details: {
                en: "The OnePlus Ace 3 smartphone is equipped with a 6.78-inch 10-bit AMOLED BOE X1 display with a resolution of 2780 × 1264 pixels (450 ppi). The dynamic refresh rate is from 1 to 120 Hz. The typical display brightness is 1600 nits, the peak is 4500 nits. There is also support for HDR10+ and Dolby Vision. Corning Gorilla Glass Victus 2 protects the screen from mechanical damage.",
                ru: "Смартфон OnePlus Ace 3 оснастили 6,78-дюймовым десятибитным AMOLED-экраном BOE X1 с разрешением 2780 × 1264 пикселя (450 ppi). Динамическая частота обновления составляет от 1 до 120 Гц. Типичная яркость дисплея равняется 1600 нит, пиковая — 4500 нит. Также есть поддержка HDR10+ и Dolby Vision. От механических повреждений экран защищает стекло Corning Gorilla Glass Victus 2."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_135487_oneplus_12r_ace_3_16512gb_blue.html?srsltid=AfmBOooIzABW7nfN4gLdZPH3YMTKOwh68S4Q_HS3XYKUfpto6L1gp_U-", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9473c651df84ed20/smartfon-oneplus-ace-3-12256gb-black/", class: "orange" }
            ]
        },
        "50-75_5/5_5/5_4/5_4/5_+_256GB_12GB": {
            name: "Oneplus 12R Ace 3",
            image: "/images/oneplus12r.jpg",
            details: {
                en: "The OnePlus Ace 3 smartphone is equipped with a 6.78-inch 10-bit AMOLED BOE X1 display with a resolution of 2780 × 1264 pixels (450 ppi). The dynamic refresh rate is from 1 to 120 Hz. The typical display brightness is 1600 nits, the peak is 4500 nits. There is also support for HDR10+ and Dolby Vision. Corning Gorilla Glass Victus 2 protects the screen from mechanical damage.",
                ru: "Смартфон OnePlus Ace 3 оснастили 6,78-дюймовым десятибитным AMOLED-экраном BOE X1 с разрешением 2780 × 1264 пикселя (450 ppi). Динамическая частота обновления составляет от 1 до 120 Гц. Типичная яркость дисплея равняется 1600 нит, пиковая — 4500 нит. Также есть поддержка HDR10+ и Dolby Vision. От механических повреждений экран защищает стекло Corning Gorilla Glass Victus 2."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_135487_oneplus_12r_ace_3_16512gb_blue.html?srsltid=AfmBOooIzABW7nfN4gLdZPH3YMTKOwh68S4Q_HS3XYKUfpto6L1gp_U-", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9473c651df84ed20/smartfon-oneplus-ace-3-12256gb-black/", class: "orange" }
            ]
        },
        "50-75_5/5_5/5_4/5_4/5_+_512GB_16GB": {
            name: "Oneplus 12R Ace 3",
            image: "/images/oneplus12r.jpg",
            details: {
                en: "The OnePlus Ace 3 smartphone is equipped with a 6.78-inch 10-bit AMOLED BOE X1 display with a resolution of 2780 × 1264 pixels (450 ppi). The dynamic refresh rate is from 1 to 120 Hz. The typical display brightness is 1600 nits, the peak is 4500 nits. There is also support for HDR10+ and Dolby Vision. Corning Gorilla Glass Victus 2 protects the screen from mechanical damage.",
                ru: "Смартфон OnePlus Ace 3 оснастили 6,78-дюймовым десятибитным AMOLED-экраном BOE X1 с разрешением 2780 × 1264 пикселя (450 ppi). Динамическая частота обновления составляет от 1 до 120 Гц. Типичная яркость дисплея равняется 1600 нит, пиковая — 4500 нит. Также есть поддержка HDR10+ и Dolby Vision. От механических повреждений экран защищает стекло Corning Gorilla Glass Victus 2."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_135487_oneplus_12r_ace_3_16512gb_blue.html?srsltid=AfmBOooIzABW7nfN4gLdZPH3YMTKOwh68S4Q_HS3XYKUfpto6L1gp_U-", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9473c651df84ed20/smartfon-oneplus-ace-3-12256gb-black/", class: "orange" }
            ]
        },
        "50-75_5/5_5/5_4/5_4/5_+_1024GB_16GB": {
            name: "Oneplus 12R Ace 3",
            image: "/images/oneplus12r.jpg",
            details: {
                en: "The OnePlus Ace 3 smartphone is equipped with a 6.78-inch 10-bit AMOLED BOE X1 display with a resolution of 2780 × 1264 pixels (450 ppi). The dynamic refresh rate is from 1 to 120 Hz. The typical display brightness is 1600 nits, the peak is 4500 nits. There is also support for HDR10+ and Dolby Vision. Corning Gorilla Glass Victus 2 protects the screen from mechanical damage.",
                ru: "Смартфон OnePlus Ace 3 оснастили 6,78-дюймовым десятибитным AMOLED-экраном BOE X1 с разрешением 2780 × 1264 пикселя (450 ppi). Динамическая частота обновления составляет от 1 до 120 Гц. Типичная яркость дисплея равняется 1600 нит, пиковая — 4500 нит. Также есть поддержка HDR10+ и Dolby Vision. От механических повреждений экран защищает стекло Corning Gorilla Glass Victus 2."
            },
            links: [
                { name: "Quke", url: "https://quke.ru/shop/UID_135487_oneplus_12r_ace_3_16512gb_blue.html?srsltid=AfmBOooIzABW7nfN4gLdZPH3YMTKOwh68S4Q_HS3XYKUfpto6L1gp_U-", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/9473c651df84ed20/smartfon-oneplus-ace-3-12256gb-black/", class: "orange" }
            ]
        },
        "25-50_2/5_4/5_3/5_3/5_+_256GB_8GB": {
            name: "realme 13+",
            image: "/images/realme13+.jpg",
            details: {
                en: "With realme 13+ 5G, you don't have to worry about lack of performance or battery life. The smartphone is powered by a high-performance and energy-efficient MediaTek Dimensity 7300 processor based on a 4 nm process technology, it scores more than 750,000 points in the AnTuTu performance test. A capacious 5000 mAh battery allows you to use the maximum functionality of the smartphone throughout the day. The duration of 1 gaming session can be up to 9 hours without recharging. If the smartphone unexpectedly runs out of battery, then a fast SuperDart 80 W charge for 5 minutes will be enough for another hour of play. The battery charges to 50% in just 19 minutes, and fully in 47 minutes.",
                ru: "С realme 13+ 5G вам не страшна нехватка производительности или автономности. В основе смартфона используется высокопроизводительный и энергоэффективный процессор MediaTek Dimensity 7300, основанный на техпроцессе 4 нм, он набирает больше 750000 баллов в тесте производительности AnTuTu. Емкий аккумулятор 5000 мАч позволяет вам использовать максимальный функционал смартфона в течение всего дня. Длительность 1 игровой сессии может составлять до 9 часов без подзарядки. Если смартфон неожиданно разрядится, то быстрой зарядки SuperDart 80 Вт в течение 5 минут хватит еще на час игры. На 50% аккумулятор заряжается всего за 19 минут, а полностью за 47 минут."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "125+_5/5_5/5_5/5_5/5_+_128GB_8GB": {
            name: "Apple iPhone 16 Pro",
            image: "/images/iphone-16-pro-black-titanium-2-1000x1000.jpg",
            details: {
                en: "The Apple iPhone 16 Pro 128 GB smartphone in black has a 6.3-inch screen with a resolution of 2622x1206 pixels and an AMOLED matrix, the display maintains comfortable color rendering in bright sunlight and maintains ultra-low brightness so as not to blind at night. The screen has an oleophobic coating that is resistant to scratches and abrasions. The model has a Li-Ion battery, it provides up to 85 hours of battery life in talk mode. The device supports fast charging technology, which allows you to charge the phone from 0 to 50% in half an hour.",
                ru: "Смартфон Apple iPhone 16 Pro 128 ГБ в черном цвете оснащен экраном 6.3 дюйма с разрешением 2622x1206 точек и AMOLED-матрицей, дисплей сохраняет комфортную цветопередачу под ярким солнцем и поддерживает сверхнизкую яркость, чтобы не слепить ночью. Экран имеет олеофобное покрытие, которое устойчиво к царапинам и потертостям. В модели установлен Li-Ion-аккумулятор, он обеспечивает до 85 часов автономной работы в режиме разговора. Устройство поддерживает технологию быстрой зарядки, которая позволяет подзарядить телефон с 0 до 50% за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "125+_5/5_5/5_5/5_5/5_+_256GB_8GB": {
            name: "Apple iPhone 16 Pro",
            image: "/images/iphone-16-pro-black-titanium-2-1000x1000.jpg",
            details: {
                en: "The Apple iPhone 16 Pro 128 GB smartphone in black has a 6.3-inch screen with a resolution of 2622x1206 pixels and an AMOLED matrix, the display maintains comfortable color rendering in bright sunlight and maintains ultra-low brightness so as not to blind at night. The screen has an oleophobic coating that is resistant to scratches and abrasions. The model has a Li-Ion battery, it provides up to 85 hours of battery life in talk mode. The device supports fast charging technology, which allows you to charge the phone from 0 to 50% in half an hour.",
                ru: "Смартфон Apple iPhone 16 Pro 128 ГБ в черном цвете оснащен экраном 6.3 дюйма с разрешением 2622x1206 точек и AMOLED-матрицей, дисплей сохраняет комфортную цветопередачу под ярким солнцем и поддерживает сверхнизкую яркость, чтобы не слепить ночью. Экран имеет олеофобное покрытие, которое устойчиво к царапинам и потертостям. В модели установлен Li-Ion-аккумулятор, он обеспечивает до 85 часов автономной работы в режиме разговора. Устройство поддерживает технологию быстрой зарядки, которая позволяет подзарядить телефон с 0 до 50% за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "125+_5/5_5/5_5/5_5/5_+_512GB_8GB": {
            name: "Apple iPhone 16 Pro",
            image: "/images/iphone-16-pro-black-titanium-2-1000x1000.jpg",
            details: {
                en: "The Apple iPhone 16 Pro 128 GB smartphone in black has a 6.3-inch screen with a resolution of 2622x1206 pixels and an AMOLED matrix, the display maintains comfortable color rendering in bright sunlight and maintains ultra-low brightness so as not to blind at night. The screen has an oleophobic coating that is resistant to scratches and abrasions. The model has a Li-Ion battery, it provides up to 85 hours of battery life in talk mode. The device supports fast charging technology, which allows you to charge the phone from 0 to 50% in half an hour.",
                ru: "Смартфон Apple iPhone 16 Pro 128 ГБ в черном цвете оснащен экраном 6.3 дюйма с разрешением 2622x1206 точек и AMOLED-матрицей, дисплей сохраняет комфортную цветопередачу под ярким солнцем и поддерживает сверхнизкую яркость, чтобы не слепить ночью. Экран имеет олеофобное покрытие, которое устойчиво к царапинам и потертостям. В модели установлен Li-Ion-аккумулятор, он обеспечивает до 85 часов автономной работы в режиме разговора. Устройство поддерживает технологию быстрой зарядки, которая позволяет подзарядить телефон с 0 до 50% за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },
        "125+_5/5_5/5_5/5_5/5_+_1024GB_8GB": {
            name: "Apple iPhone 16 Pro",
            image: "/images/iphone-16-pro-black-titanium-2-1000x1000.jpg",
            details: {
                en: "The Apple iPhone 16 Pro 128 GB smartphone in black has a 6.3-inch screen with a resolution of 2622x1206 pixels and an AMOLED matrix, the display maintains comfortable color rendering in bright sunlight and maintains ultra-low brightness so as not to blind at night. The screen has an oleophobic coating that is resistant to scratches and abrasions. The model has a Li-Ion battery, it provides up to 85 hours of battery life in talk mode. The device supports fast charging technology, which allows you to charge the phone from 0 to 50% in half an hour.",
                ru: "Смартфон Apple iPhone 16 Pro 128 ГБ в черном цвете оснащен экраном 6.3 дюйма с разрешением 2622x1206 точек и AMOLED-матрицей, дисплей сохраняет комфортную цветопередачу под ярким солнцем и поддерживает сверхнизкую яркость, чтобы не слепить ночью. Экран имеет олеофобное покрытие, которое устойчиво к царапинам и потертостям. В модели установлен Li-Ion-аккумулятор, он обеспечивает до 85 часов автономной работы в режиме разговора. Устройство поддерживает технологию быстрой зарядки, которая позволяет подзарядить телефон с 0 до 50% за полчаса."
            },
            links: [
                { name: "M.Video", url: "https://www.mvideo.ru/products/smartfon-realme-13--5g-12-256gb-purple-400377191", class: "red" },
                { name: "DNS", url: "https://www.dns-shop.ru/product/5d7de0797fc8d582/667-smartfon-realme-13-5g-256-gb-fioletovyj/", class: "orange" }
            ]
        },

    };

    const key = `${budget}_${processor}_${battery}_${screen}_${camera}_${Gsupport}_${memory}_${RAM}`;
    const model = models[key];

    if (model) {
        document.getElementById("smartphone-title").textContent = translations[currentLanguage].resultTitle;
        document.getElementById("smartphone-image").src = model.image;
        document.getElementById("smartphone-specs").textContent = model.details[currentLanguage];

        const linksContainer = document.getElementById("store-links");
        linksContainer.innerHTML = ""; // Очищаем контейнер перед добавлением кнопок
        document.getElementById("result-container").querySelector("h3").textContent = translations[currentLanguage].resultBuyTitle;

        model.links.forEach(link => {
            const button = document.createElement("a");
            button.textContent = link.name;
            button.href = link.url;
            button.target = "_blank"; // Открытие ссылки в новой вкладке
            button.className = `store-button ${link.class}`; // Применение стилей с индивидуальным цветом
            linksContainer.appendChild(button);
        });
    } else {
        alert(translations[currentLanguage].noResults);
    }
});
