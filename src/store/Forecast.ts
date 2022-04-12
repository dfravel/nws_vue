import { defineStore } from "pinia";
import ForecastService from "@/services/ForecastService";

export const useForecastStore = defineStore({
  id: "forecast",
  state: () => ({
    forecastApiResponse: {},
    forecast: []
  }),

  getters: {
    getForecast(state) {
      return state.forecast;
    }
  },

  actions: {
    async fetchForecast(zipCode: string) {
      localStorage.setItem("nwsZipCode", JSON.stringify(zipCode));
      try {
        const response = await ForecastService.getForecastByZipCode(zipCode);
        this.forecast = response.data.properties.periods;
        console.log(this.forecast);
      } catch (error) {
        alert(error);
        console.log(error);
      }
    }
  }
});
