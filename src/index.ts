interface Province {
    code: string;
    name: string;
    cities: string[];
}

const provincesList: Province[] = [
    { code: "01", name: "Azuay", cities: ["Cuenca", "Gualaceo", "Paute", "Girón", "Sigsig", "Nabón", "Oña", "Chordeleg", "El Pan", "Sevilla de Oro", "Guachapala", "Pucará"] },
    { code: "02", name: "Bolívar", cities: ["Guaranda", "Chillanes", "Chimbo", "Echeandía", "San Miguel", "Caluma", "Las Naves"] },
    { code: "03", name: "Cañar", cities: ["Azogues", "Biblián", "Cañar", "La Troncal", "El Tambo", "Déleg", "Suscal"] },
    { code: "04", name: "Carchi", cities: ["Tulcán", "Bolívar", "Espejo", "Mira", "Montúfar", "San Pedro de Huaca"] },
    { code: "05", name: "Chimborazo", cities: ["Riobamba", "Alausí", "Colta", "Chambo", "Chunchi", "Guamote", "Guano", "Pallatanga", "Penipe", "Cumandá"] },
    { code: "06", name: "Cotopaxi", cities: ["Latacunga", "La Maná", "Pangua", "Pujilí", "Salcedo", "Saquisilí", "Sigchos"] },
    { code: "07", name: "El Oro", cities: ["Machala", "Arenillas", "Atahualpa", "Balsas", "Chilla", "El Guabo", "Huaquillas", "Las Lajas", "Marcabelí", "Pasaje", "Piñas", "Portovelo", "Santa Rosa", "Zaruma"] },
    { code: "08", name: "Esmeraldas", cities: ["Esmeraldas", "Atacames", "Eloy Alfaro", "Muisne", "Quinindé", "Rioverde", "San Lorenzo"] },
    { code: "09", name: "Galápagos", cities: ["Puerto Baquerizo Moreno", "Puerto Ayora", "Puerto Villamil"] },
    { code: "10", name: "Guayas", cities: ["Guayaquil", "Daule", "Samborondón", "Durán", "Milagro", "Naranjal", "Balao", "Balzar", "Colimes", "El Empalme", "El Triunfo", "General Villamil", "Isidro Ayora", "Lomas de Sargentillo", "Marcelino Maridueña", "Naranjito", "Palestina", "Pedro Carbo", "Playas", "Salitre", "Santa Lucía", "Simón Bolívar", "Yaguachi"] },
    { code: "11", name: "Imbabura", cities: ["Ibarra", "Antonio Ante", "Cotacachi", "Otavalo", "Pimampiro", "San Miguel de Urcuquí"] },
    { code: "12", name: "Loja", cities: ["Loja", "Calvas", "Catamayo", "Celica", "Chaguarpamba", "Espíndola", "Gonzanamá", "Macará", "Olmedo", "Paltas", "Pindal", "Puyango", "Saraguro", "Sozoranga", "Zapotillo"] },
    { code: "13", name: "Los Ríos", cities: ["Babahoyo", "Baba", "Buena Fe", "Montalvo", "Palenque", "Puebloviejo", "Quevedo", "Quinsaloma", "Urdaneta", "Valencia", "Ventanas", "Vinces"] },
    { code: "14", name: "Manabí", cities: ["Portoviejo", "Chone", "El Carmen", "Flavio Alfaro", "Jaramijó", "Jipijapa", "Junín", "Manta", "Montecristi", "Olmedo", "Paján", "Pedernales", "Pichincha", "Puerto López", "Rocafuerte", "Santa Ana", "Sucre", "Tosagua"] },
    { code: "15", name: "Morona Santiago", cities: ["Macas", "Gualaquiza", "Limón Indanza", "Palora", "Santiago", "Sucúa", "Huamboya", "San Juan Bosco", "Taisha"] },
    { code: "16", name: "Napo", cities: ["Tena", "Archidona", "El Chaco", "Quijos", "Carlos Julio Arosemena Tola"] },
    { code: "17", name: "Pastaza", cities: ["Puyo", "Arajuno", "Mera", "Santa Clara"] },
    { code: "18", name: "Pichincha", cities: ["Quito", "Cayambe", "Mejía", "Pedro Moncayo", "Pedro Vicente Maldonado", "Puerto Quito", "Rumiñahui", "San Miguel de los Bancos"] },
    { code: "19", name: "Sucumbíos", cities: ["Nueva Loja", "Cascales", "Cuyabeno", "Gonzalo Pizarro", "Lago Agrio", "Putumayo", "Shushufindi", "Sucumbíos"] },
    { code: "20", name: "Tungurahua", cities: ["Ambato", "Baños", "Cevallos", "Mocha", "Patate", "Pelileo", "Quero", "Tisaleo"] },
    { code: "21", name: "Zamora Chinchipe", cities: ["Zamora", "Centinela del Cóndor", "Chinchipe", "El Pangui", "Nangaritza", "Palanda", "Paquisha", "Yacuambi", "Yantzaza"] },
    { code: "22", name: "Santa Elena", cities: ["Santa Elena", "La Libertad", "Salinas"] },
    { code: "23", name: "Santo Domingo de los Tsáchilas", cities: ["Santo Domingo", "La Concordia"] },
    { code: "24", name: "Orellana", cities: ["Puerto Francisco de Orellana", "Aguarico", "La Joya de los Sachas", "Loreto"] }
];


export const provinces = (): string[] => {
    return provincesList.map((province) => province.name);
};

export const cities = (provinceName?: string): string[] => {
    if (!provinceName) {
        return provincesList.flatMap((province) => province.cities);
    }
    const province = provincesList.find(
        (province) => province.name.toLowerCase() === provinceName.toLowerCase()
    );
    if (province) {
        return province.cities;
    }
    return [];
};

export const validateIdentification = (identification: string): boolean => {
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
