import { create } from "apisauce";
import { URL } from "../../app/config";

const API_PORT = "4001";

export const api = create({
  baseURL: `${URL}:${API_PORT}/`,
  headers: { Accept: "application/json" }
});
