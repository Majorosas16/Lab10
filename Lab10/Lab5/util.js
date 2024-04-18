export const cargaInformacion =async () => {
    const response = await fetch("data.json"); // el fetch para cargar archivos json o apis
    const data = await response.json();
    return data;
}