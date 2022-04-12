<script setup lang="ts">
import { onMounted, computed, reactive } from "vue";
import filters from "@/utils/Filters";
import BaseTextbox from "@/components/BaseTextbox.vue";
import BaseButton from "@/components/BaseButton.vue";
import { useForecastStore } from "@/store/Forecast";

const forecastStore = useForecastStore();
// page level variable
const state = reactive({
  zipCode: ""
});

// check local storage to see if we already have a zipCode saved
onMounted(() => {
  state.zipCode = JSON.parse(localStorage.getItem("nwsZipCode"));
});

const getForecast = () => {
  forecastStore.fetchForecast(state.zipCode);
};

const forecastData = computed(() => forecastStore.getForecast);
</script>

<template>
  <base-layout title="National Weather Service API">
    <div class="mx-auto max-w-lg">
      <div>
        <div class="text-center">
          <fa :icon="['fal', 'cloud-sun']" class="h-16 w-16 text-lg text-gray-700" />
          <h2 class="mt-2 text-lg font-medium text-gray-900">Hourly Weather Forecast</h2>
          <p class="mt-1 text-sm text-gray-500">Please enter a US Zip Code to see the hourly weather forecast.</p>
        </div>

        <div class="my-10 flex flex-row">
          <base-textbox
            label-text="US Zip Code "
            :show-label="false"
            label-class="required"
            :required="false"
            field-id="zipCode"
            field-name="zipCode"
            placeholder="Enter US Zip Code"
            v-model="state.zipCode"
          />

          <base-button
            :show-icon="true"
            button-type="button"
            button-class="primary ml-2"
            button-text="Get Forecast"
            @click="getForecast"
          >
            <template v-slot:icon>
              <fa :icon="['fal', 'cloud-sun']" class="h-6 w-6 text-lg text-white" />
            </template>
          </base-button>
        </div>
      </div>
    </div>

    <div class="mx-auto max-w-lg" v-if="forecastData.length">
      <ul>
        <li
          v-for="(forecast, index) in forecastData"
          :key="index"
          class="border-t border-b border-t-transparent border-b-transparent py-2 pl-2 pr-5 hover:cursor-pointer hover:bg-blue-50"
          :class="[index % 2 == 0 ? 'bg-stripeOdd' : 'bg-stripeEven']"
        >
          <div class="flex w-full flex-row">
            <div class="mr-6 w-14">
              <img :src="forecast.icon" alt="{{ forecast.shortForecast  }}" />
            </div>
            <div class="flex w-2/3 flex-col">
              <div class="text-xl text-gray-700">{{ filters.timeFormat(forecast.startTime) }}</div>
              <div class="text-sm text-gray-500">{{ forecast.shortForecast }}</div>
            </div>
            <div class="align-right text-2xl text-gray-600">
              {{ forecast.temperature }}{{ forecast.temperatureUnit }}
            </div>
          </div>
        </li>
      </ul>
      {{ forecastData }}
    </div>
  </base-layout>
</template>

<style scoped></style>
