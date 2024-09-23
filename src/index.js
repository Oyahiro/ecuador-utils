"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateIdentification = exports.cities = exports.provinces = void 0;
const provincesList = [
    { name: "Azuay", cities: ["Cuenca", "Gualaceo", "Paute"] },
    { name: "Pichincha", cities: ["Quito", "Cayambe", "Machachi"] },
    { name: "Guayas", cities: ["Guayaquil", "Daule", "Samborondón"] },
    // Agrega más provincias y ciudades aquí
];
const provinces = () => {
    return provincesList.map((province) => province.name);
};
exports.provinces = provinces;
const cities = (provinceName) => {
    if (!provinceName) {
        // Si no se pasa provincia, devolver todas las ciudades del país.
        return provincesList.flatMap((province) => province.cities);
    }
    const province = provincesList.find((province) => province.name.toLowerCase() === provinceName.toLowerCase());
    if (province) {
        return province.cities;
    }
    return [];
};
exports.cities = cities;
const validateIdentification = (identification) => {
    if (identification.length !== 10) {
        return false;
    }
    const regionCode = parseInt(identification.slice(0, 2));
    if (regionCode < 1 || regionCode > 24) {
        return false;
    }
    const lastDigit = parseInt(identification.charAt(9));
    const coefficients = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    let total = 0;
    for (let i = 0; i < coefficients.length; i++) {
        let value = parseInt(identification.charAt(i)) * coefficients[i];
        if (value > 9) {
            value -= 9;
        }
        total += value;
    }
    const calculatedCheckDigit = total % 10 === 0 ? 0 : 10 - (total % 10);
    return calculatedCheckDigit === lastDigit;
};
exports.validateIdentification = validateIdentification;
