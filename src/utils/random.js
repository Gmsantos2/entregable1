
const getRandomElement = (elements) => {
    //lógica apra devolver un elemento aleatorio
    const indexRandom = Math.floor(Math.random() * elements.length);
    return elements[indexRandom];
};
export {getRandomElement};