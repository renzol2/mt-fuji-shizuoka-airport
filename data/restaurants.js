/**
 * @typedef Hours
 * @property {string} day
 * @property {string} openingTime
 * @property {string} closingTime
 */

/**
 * @typedef Restaurant
 * @property {string} name
 * @property {Array<Hours>} hours
 * @property {string} priceRange
 */

/** @type {Restaurant} */
const GOOSE_ISLAND_RESTAURANT = {
    name: "Goose Island Beer Company",
    hours: [
        { day: "Monday", openingTime: "6am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "6am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "6am", closingTime: "9pm" },
        { day: "Friday", openingTime: "6am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "6am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "6am", closingTime: "9pm" },
    ],
    priceRange: "$$",
};

/** @type {Restaurant} */
const LA_TAPENADE_MEDITERRANEAN_CAFE_RESTAURANT = {
    name: "La Tapenade Mediterranean Cafe",
    hours: [
        { day: "Monday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "5:30am", closingTime: "9pm" },
        {
            day: "Wednesday",
            openingTime: "5:30am",
            closingTime: "9pm",
        },
        { day: "Thursday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Friday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "5:30am", closingTime: "9pm" },
    ],
};

/** @type {Restaurant} */
const STARBUCKS_A = {
    name: "Starbucks Coffee",
    hours: [
        { day: "Monday", openingTime: "5am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "5am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "5am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "5am", closingTime: "9pm" },
        { day: "Friday", openingTime: "5am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "5am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "5am", closingTime: "9pm" },
    ],
    priceRange: "$$",
};

/** @type {Restaurant} */
const SMOOTHIE_KING_THE_GROVE = {
    name: "Smoothie King / The Grove",
    hours: [
        { day: "Monday", openingTime: "7am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "7am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "7am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "7am", closingTime: "9pm" },
        { day: "Friday", openingTime: "7am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "7am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "7am", closingTime: "9pm" },
    ],
    priceRange: "$",
};

/** @type {Restaurant} */
const GARRETT_POPCORN_SHOPS = {
    name: "Garrett Popcorn Shops",
    hours: [
        { day: "Monday", openingTime: "7am", closingTime: "8pm" },
        { day: "Tuesday", openingTime: "7am", closingTime: "8pm" },
        { day: "Wednesday", openingTime: "7am", closingTime: "8pm" },
        { day: "Thursday", openingTime: "7am", closingTime: "8pm" },
        { day: "Friday", openingTime: "7am", closingTime: "8pm" },
        { day: "Saturday", openingTime: "7am", closingTime: "8pm" },
        { day: "Sunday", openingTime: "7am", closingTime: "8pm" },
    ],
    priceRange: "$",
};

/** @type {Restaurant} */
const JAMBA_JUICE = {
    name: "Jamba Juice",
    hours: [
        { day: "Monday", openingTime: "7am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "7am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "7am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "7am", closingTime: "9pm" },
        { day: "Friday", openingTime: "7am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "7am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "7am", closingTime: "9pm" },
    ],
    priceRange: "$",
};

/** @type {Restaurant} */
const WOLFGANG_EXPRESS = {
    name: "Wolfgang Express",
    hours: [
        { day: "Monday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Friday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "5:30am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "5:30am", closingTime: "9pm" },
    ],
    priceRange: "$",
};

/** @type {Restaurant} */
const ELIS_CHEESECAKE = {
    name: "Eli's Cheesecake",
    hours: [
        { day: "Monday", openingTime: "9am", closingTime: "6pm" },
        { day: "Tuesday", openingTime: "9am", closingTime: "6pm" },
        { day: "Wednesday", openingTime: "9am", closingTime: "6pm" },
        { day: "Thursday", openingTime: "9am", closingTime: "6pm" },
        { day: "Friday", openingTime: "9am", closingTime: "6pm" },
        { day: "Saturday", openingTime: "9am", closingTime: "6pm" },
        { day: "Sunday", openingTime: "9am", closingTime: "6pm" },
    ],
    priceRange: "$",
};

/** @type {Restaurant} */
const STARBUCKS_B = {
    name: "Starbucks Coffee",
    hours: [
        { day: "Monday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Tuesday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Wednesday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Thursday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Friday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Saturday", openingTime: "4:30am", closingTime: "9pm" },
        { day: "Sunday", openingTime: "4:30am", closingTime: "9pm" },
    ],
    priceRange: "$",
};

/**
 * @typedef Restaurants
 * @type {Object.<string, Array<Restaurant>}
 */

/** @type {Restaurants} */
const RESTAURANTS = {
    B1: [GOOSE_ISLAND_RESTAURANT],
    B2: [GOOSE_ISLAND_RESTAURANT],
    B3: [GOOSE_ISLAND_RESTAURANT],
    B4: [GOOSE_ISLAND_RESTAURANT, LA_TAPENADE_MEDITERRANEAN_CAFE_RESTAURANT],
    B5: [STARBUCKS_A],
    B6: [SMOOTHIE_KING_THE_GROVE],
    B7: [JAMBA_JUICE, GARRETT_POPCORN_SHOPS, WOLFGANG_EXPRESS],
    B8: [],
    B9: [ELIS_CHEESECAKE, STARBUCKS_B],
};

export { RESTAURANTS };
