/**
 * @typedef Hours
 * @property {string} day
 * @property {string} openingTime
 * @property {string} closingTime
 */

/**
 * @typedef Shop
 * @property {string} name
 * @property {Array<Hours>} hours
 * @property {string} gate
 * @property {string} description
 */

// FIXME: any reason this is unused? should we use it somewhere?
/** @type {Shop} */
const HUSON_NEWS_AND_GIFTS = {
    name: "Hudson News and Gifts",
    hours: [
        { day: "Monday", openingTime: "5:30am", closingTime: "8pm" },
        { day: "Tuesday", openingTime: "5:30am", closingTime: "8pm" },
        { day: "Wednesday", openingTime: "5:30am", closingTime: "8pm" },
        { day: "Thursday", openingTime: "5:30am", closingTime: "8pm" },
        { day: "Friday", openingTime: "5:30am", closingTime: "8pm" },
        { day: "Saturday", openingTime: "5:30am", closingTime: "8pm" },
        { day: "Sunday", openingTime: "5:30am", closingTime: "8pm" },
    ],
};

/** @type {Shop} */
const HOYPOLOI = {
    name: "Hoypoloi An Uncommon Gallery",
    hours: [
        { day: "Monday", openingTime: "6am", closingTime: "5pm" },
        { day: "Tuesday", openingTime: "6am", closingTime: "5pm" },
        { day: "Wednesday", openingTime: "6am", closingTime: "5pm" },
        { day: "Thursday", openingTime: "6am", closingTime: "5pm" },
        { day: "Friday", openingTime: "6am", closingTime: "5pm" },
        { day: "Saturday", openingTime: "6am", closingTime: "5pm" },
        { day: "Sunday", openingTime: "6am", closingTime: "5pm" },
    ],
    gate: "B6",
    description:
        "Hoypoloi An Uncommon Gallery(R) will inspire and amaze you. Art and artistry by Frogman, Dr. Suess, Todd White, Fabio Napoleoni, Pamela Sukham, Eyvind Earle, Todd Warner, Milon Townsend. You will find eclectic art, gifts, jewelry, accessories, toys, including work by our wonderful local Chicago talent.",
};

/**@type {Shop} */
const JOHNSTON_AND_MURPHY = {
    name: "Johnston & Murphy",
    hours: [
        { day: "Monday", openingTime: "6am", closingTime: "6pm" },
        { day: "Tuesday", openingTime: "6am", closingTime: "6pm" },
        { day: "Wednesday", openingTime: "6am", closingTime: "6pm" },
        { day: "Thursday", openingTime: "6am", closingTime: "6pm" },
        { day: "Friday", openingTime: "6am", closingTime: "6pm" },
        { day: "Saturday", openingTime: "6am", closingTime: "6pm" },
        { day: "Sunday", openingTime: "6am", closingTime: "6pm" },
    ],
    gate: "B6",
    description:
        "Johnston & Murphy offers classic men's apparel, accessories and their well-known high quality shoes. The store also offers a selection of women's apparel and women's shoes.",
};

/**@type {Shop} */
const VOSGES_HAUT_CHOCOLAT = {
    name: "Vosges Haut-Chocolat",
    hours: [
        { day: "Monday", openingTime: "10am", closingTime: "5pm" },
        { day: "Tuesday", openingTime: "10am", closingTime: "5pm" },
        { day: "Wednesday", openingTime: "10am", closingTime: "5pm" },
        { day: "Thursday", openingTime: "10am", closingTime: "5pm" },
        { day: "Friday", openingTime: "10am", closingTime: "5pm" },
        { day: "Saturday", openingTime: "10am", closingTime: "5pm" },
        { day: "Sunday", openingTime: "10am", closingTime: "5pm" },
    ],
    gate: "B6",
    description:
        "Chocolate creation with a purpose. Katrina Markoff has always created chocolate collections rooted in her own experience that tells a story and opens minds to new ideas, let our flavors taunt both your spirit and palate.",
};

/**@type {Shop} */
const INMOTION = {
    name: "InMotion",
    hours: [
        { day: "Monday", openingTime: "6am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "6am", closingTime: "9pm" },
        { day: "Friday", openingTime: "6am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "6am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "6am", closingTime: "9pm" },
    ],
    gate: "B7",
    description:
        "InMotion is the largest airport-based electronics retailer in the country, presenting the latest, most cutting-edge and diverse premium electronics, including noise-canceling and wireless headphones, speakers, tablets, digital video cameras, fitness bands and relevant mobile accessories. Global brands such as Apple, Beats by Dr. Dre, B&O Play, BOSE, GoPro, JBL, mophie, Samsung and Sony, often launch their coveted products with InMotion.",
};

/** @type {Shop} */
const FIELD_MUSEUM = {
    name: "Field Museum",
    hours: [
        { day: "Monday", openingTime: "8am", closingTime: "7pm" },
        { day: "Tuesday", openingTime: "8am", closingTime: "7pm" },
        { day: "Wednesday", openingTime: "8am", closingTime: "7pm" },
        { day: "Thursday", openingTime: "8am", closingTime: "7pm" },
        { day: "Friday", openingTime: "8am", closingTime: "7pm" },
        { day: "Saturday", openingTime: "8am", closingTime: "7pm" },
        { day: "Sunday", openingTime: "8am", closingTime: "7pm" },
    ],
    gate: "B8",
    description:
        "Our original Field Museum Store at O'Hare complements the towering skeleton of a Brachiosaur in United Airlines Terminal One. The store is a perfect place for gifts-on-the-go, featuring merchandise representing Field Museum icons such as Sue, the world's most complete T.rex as well as books, toys, jewelry and world-wise travel needs.",
};

/**@type {Shop} */
const OAKLEY = {
    name: "Oakley",
    hours: [
        { day: "Monday", openingTime: "6am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "6am", closingTime: "9pm" },
        { day: "Friday", openingTime: "6am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "6am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "6am", closingTime: "9pm" },
    ],
    gate: "B8",
    description: "Oakley O-Store: sunglasses, apparel and accessories",
};

/**@type {Shop} */
const CNN_NEWSTAND_CHICAGO = {
    name: "CNN Newsstand Chicago",
    hours: [
        { day: "Monday", openingTime: "6am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "6am", closingTime: "9pm" },
        { day: "Friday", openingTime: "6am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "6am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "6am", closingTime: "9pm" },
    ],
    gate: "B9",
    description:
        "Chicago-themed gifts and souvenir apparel and other core convenience travel merchandise is what you will find at Hudson News. Wide aisles and entrances accommodate the disabled, as well as customers with luggage and baby strollers. Hudson delivers a wide selection of desired products, fully stocked shelves, reasonable prices, quick, friendly service and customer satisfaction.",
};

/**@type {Shop} */
const DUTY_FREE_STORE = {
    name: "Duty Free Store",
    hours: [
        { day: "Monday", openingTime: "6am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "6am", closingTime: "9pm" },
        { day: "Friday", openingTime: "6am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "6am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "6am", closingTime: "9pm" },
    ],
    gate: "B9",
    description:
        "Discover the top brands at duty free prices. Gucci, Dior, Chanel, Estee Lauder, Johnnie Walker, Grey Goose, Godiva just to name a few. Find a superior selection of international cosmetics, fragrances, liquor, tobacco, international confectionary and fashion accessories - all at tax and duty free prices.",
};

/**
 * @typedef Shops
 * @type {Object.<string, Array<Shop>}
 *
 */

/** @type {Shops} */
const SHOPS = {
    B1: [],
    B2: [],
    B3: [],
    B4: [],
    B5: [],
    B6: [HOYPOLOI, JOHNSTON_AND_MURPHY, VOSGES_HAUT_CHOCOLAT],
    B7: [INMOTION],
    B8: [FIELD_MUSEUM, OAKLEY],
    B9: [CNN_NEWSTAND_CHICAGO, DUTY_FREE_STORE],
};

export { SHOPS };
