import axios from "axios";
let API_URL = "http://localhost:8080/api/vehiculos/page";
let API_URL_SAVE = "http://localhost:8080/api/vehiculos";
export const getVehiculos = async (pageNum, size) => {
  const page = {
    page: pageNum,
    size: size,
  };
  console.log(page);
  const response = await axios.post(API_URL, { page });
  return response.data;
};

export const saveVehiculo = async (vehiculo) => {
  console.log("Vehiculo a guardar");
  console.log(vehiculo);
  const response = await axios.post(API_URL_SAVE, vehiculo);
  console.log(response.data);
  return response.data;
};

export default {
  getVehiculos,
  saveVehiculo,
};
