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
    gate: "B6"
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
    gate: "B6"
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
    gate: "B6"
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