
export function localStorageSetCity(city: string) {
  localStorage.setItem("city", city);
}

export function localStorageGetCity() {
  return localStorage.getItem("city");
}

export function localStorageSetCountryCode(countryCode: string) {
  localStorage.setItem("countryCode", countryCode);
}

export function localStorageGetCountryCode() {
    return localStorage.getItem("countryCode");
}