/**
 * @typedef Flight
 * @property {string} number
 * @property {string} departure
 * @property {string} arrival
 * @property {string} time
 * @property {string} airline
 * @property {string} gate
 */

// To avoid having to implement actual searching, it may be better to create lists of flights on certain days
// and use conditionals to see if it should be displayed (map function)
// should talk about this on Wednesday's meeting


/** @type {Array<Flight>} */
export const FLIGHTS = [
    {
        number: "QR9298",
        airline: "Qatar Airways",
        departure: "ORD",
        arrival: "DFW",
        date: "2022-11-17",
        time: "12:05",
        gate: "B3",

    },
    {
        number: "AA263",
        airline: "American Airlines",
        departure: "ORD",
        arrival: "LAX",
        date: "2022-11-23",
        time: "01:05",
        gate: "B7",

    },
    {
        number: "UA3141",
        airline: "American Airlines",
        departure: "ORD",
        arrival: "LAX",
        date: "2022-11-23",
        time: "02:20",
        gate: "B4",

    },
    {
        number: "AI126",
        airline: "Air India",
        departure: "ORD",
        arrival: "DEL",
        date: "2022-12-01",
        time: "12:30",
        gate: "B9",

    },
    {
        number: "UA4804",
        airline: "United Airlines",
        departure: "ORD",
        arrival: "PWM",
        date: "2022-12-12",
        time: "12:45",
        gate: "B6",

    },
    {
        number: "AC5781",
        airline: "Air Canada",
        departure: "ORD",
        arrival: "DEN",
        date: "2022-12-19",
        time: "12:50",
        gate: "B4",

    },
    {
        number: "QR3468",
        airline: "Qatar Airways",
        departure: "ORD",
        arrival: "DFW",
        date: "2022-12-20",
        time: "12:55",
        gate: "B3",

    },
    {
        number: "UA1568",
        airline: "United Airlines",
        departure: "ORD",
        arrival: "SEA",
        date: "2022-12-30",
        time: "12:50",
        gate: "B3",
    },
    {
        number: "UA1567",
        airline: "United Airlines",
        departure: "ORD",
        arrival: "SEA",
        date: "2022-12-30",
        time: "12:50",
        gate: "B3",
    },
    {
        number: "UA1566",
        airline: "United Airlines",
        departure: "ORD",
        arrival: "SEA",
        date: "2022-12-30",
        time: "12:50",
        gate: "B3",
    },
];
