/**
 * @typedef Restroom
 * @property {string} name
 * @property {string} gate
 * @property {boolean} hasBabyStation
 */

/** @type {Object.<string, Array<Restroom>} */
export const RESTROOMS = {
    B1: [{ name: "Restroom at B1", gate: "B1", hasBabyStation: true }],
    B2: [],
    B3: [],
    B4: [{ name: "Restroom at B4", gate: "B4", hasBabyStation: false }],
    B5: [],
    B6: [],
    B7: [{ name: "Restroom at B7", gate: "B7", hasBabyStation: true }],
    B8: [],
    B9: [{ name: "Restroom at B9", gate: "B9", hasBabyStation: true }],
};
