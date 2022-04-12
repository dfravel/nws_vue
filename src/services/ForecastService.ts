import apiClient from "@/utils/Axios";

class ForecastService {
  async getForecastByZipCode(params) {
    return await apiClient.get("/api/v1/forecast/hourly/" + params);
  }
}

export default new ForecastService();
