const key = "6fbdb6f51c8de65e4349d5c181037686";

/**
 * Llamada a la api de openweathermap
 * la opción ?q=${city} es para buscar por nombre de ciudad.
 * Se le agrega &units=metric para que la temperatura venga en grados celsius.
 * Se le agrega &lang=es para que la data venga en español.
 * @param {string} city Nombre de la ciudad a buscar
 * @returns {object} Objeto con la data de la ciudad
 */

const requestCity = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${key}`
  );
  const data = await response.json();
  return data;
};
