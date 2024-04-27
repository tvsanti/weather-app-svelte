<script lang="ts">
  import { onMount } from "svelte";
  import { apiData } from "../store";
  import DailyTemperatureSummary from "$lib/DailyTemperatureSummary.svelte";
  import Hourly from "$lib/Hourly.svelte";
  import ThisWeek from "$lib/ThisWeek.svelte";

  onMount(async () => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=36.7202&longitude=-4.4203&current=apparent_temperature,temperature_2m&hourly=apparent_temperature&forecast_days=7&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset"
    )
      .then((response) => response.json())
      .then((data) => {
        apiData.set(data);
      })
      .catch((error) => {
        console.log(error);
        return [];
      });
    });

</script>

<main class="main">
  <div class="header">
    <input class="searcher" type="text" placeholder="Xàbia, Alicante" />
    <svg
      class="settings"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0,0,256,256"
    >
      <g
        fill="#cad6eb"
        fill-rule="nonzero"
        stroke="none"
        stroke-width="1"
        stroke-linecap="butt"
        stroke-linejoin="miter"
        stroke-miterlimit="10"
        stroke-dasharray=""
        stroke-dashoffset="0"
        font-family="none"
        font-weight="none"
        font-size="none"
        text-anchor="none"
        style="mix-blend-mode: normal"
        ><g transform="scale(5.33333,5.33333)"
          ><path
            d="M39.139,26.282c-0.713,-0.523 -1.139,-1.363 -1.139,-2.248c0,-0.885 0.426,-1.725 1.138,-2.247l3.294,-2.415c0.525,-0.386 0.742,-1.065 0.537,-1.684c-0.848,-2.548 -2.189,-4.872 -3.987,-6.909c-0.433,-0.488 -1.131,-0.642 -1.728,-0.38l-3.709,1.631c-0.808,0.356 -1.749,0.305 -2.516,-0.138c-0.766,-0.442 -1.28,-1.23 -1.377,-2.109l-0.446,-4.072c-0.071,-0.648 -0.553,-1.176 -1.191,-1.307c-2.597,-0.531 -5.326,-0.54 -7.969,-0.01c-0.642,0.129 -1.125,0.657 -1.196,1.308l-0.442,4.046c-0.097,0.88 -0.611,1.668 -1.379,2.11c-0.766,0.442 -1.704,0.495 -2.515,0.138l-3.729,-1.64c-0.592,-0.262 -1.292,-0.11 -1.725,0.377c-1.804,2.029 -3.151,4.35 -4.008,6.896c-0.208,0.618 0.008,1.301 0.535,1.688l3.273,2.4c0.714,0.524 1.14,1.364 1.14,2.249c0,0.885 -0.426,1.725 -1.138,2.247l-3.294,2.415c-0.525,0.386 -0.742,1.065 -0.537,1.684c0.848,2.548 2.189,4.872 3.987,6.909c0.433,0.489 1.133,0.644 1.728,0.38l3.709,-1.631c0.808,-0.356 1.748,-0.305 2.516,0.138c0.766,0.442 1.28,1.23 1.377,2.109l0.446,4.072c0.071,0.648 0.553,1.176 1.191,1.307c1.314,0.268 2.664,0.404 4.015,0.404c1.318,0 2.648,-0.133 3.953,-0.395c0.642,-0.129 1.125,-0.657 1.196,-1.308l0.443,-4.046c0.097,-0.88 0.611,-1.668 1.379,-2.11c0.766,-0.441 1.705,-0.493 2.515,-0.138l3.729,1.64c0.594,0.263 1.292,0.111 1.725,-0.377c1.804,-2.029 3.151,-4.35 4.008,-6.896c0.208,-0.618 -0.008,-1.301 -0.535,-1.688zM24,31c-3.866,0 -7,-3.134 -7,-7c0,-3.866 3.134,-7 7,-7c3.866,0 7,3.134 7,7c0,3.866 -3.134,7 -7,7z"
          ></path></g
        ></g
      >
    </svg>
  </div>
  <div class="selected_day">
    <div class="general_info">
      <div class="weather">
        <div class="weather_image_section">
          <svg
            class="weather_image"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0,0,256,256"
          >
            <g
              fill="#fcc419"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              style="mix-blend-mode: normal"
              ><g transform="scale(8.53333,8.53333)"
                ><path
                  d="M14.98438,0.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v3c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-3c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212zM5.79688,4.79883c-0.40657,0.0009 -0.77213,0.24784 -0.92475,0.62467c-0.15262,0.37684 -0.06192,0.80856 0.22944,1.09212l2.12109,2.12109c0.25082,0.26123 0.62326,0.36646 0.9737,0.2751c0.35044,-0.09136 0.62411,-0.36503 0.71546,-0.71546c0.09136,-0.35044 -0.01387,-0.72288 -0.2751,-0.9737l-2.12109,-2.12109c-0.18874,-0.19402 -0.44807,-0.30325 -0.71875,-0.30273zM24.17188,4.79883c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-2.12109,2.12109c-0.26123,0.25082 -0.36645,0.62326 -0.2751,0.9737c0.09136,0.35043 0.36503,0.6241 0.71546,0.71546c0.35043,0.09136 0.72288,-0.01387 0.9737,-0.2751l2.12109,-2.12109c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988zM15,8c-3.86599,0 -7,3.13401 -7,7c0,3.86599 3.13401,7 7,7c3.86599,0 7,-3.13401 7,-7c0,-3.86599 -3.13401,-7 -7,-7zM2,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM25,14c-0.36064,-0.0051 -0.69608,0.18438 -0.87789,0.49587c-0.18181,0.3115 -0.18181,0.69676 0,1.00825c0.18181,0.3115 0.51725,0.50097 0.87789,0.49587h3c0.36064,0.0051 0.69608,-0.18438 0.87789,-0.49587c0.18181,-0.3115 0.18181,-0.69676 0,-1.00825c-0.18181,-0.3115 -0.51725,-0.50097 -0.87789,-0.49587zM7.91016,21.06055c-0.2598,0.00774 -0.50638,0.11632 -0.6875,0.30273l-2.12109,2.12109c-0.26123,0.25082 -0.36646,0.62326 -0.2751,0.9737c0.09136,0.35044 0.36503,0.6241 0.71546,0.71546c0.35044,0.09136 0.72288,-0.01387 0.9737,-0.2751l2.12109,-2.12109c0.29576,-0.28749 0.38469,-0.72707 0.22393,-1.10691c-0.16075,-0.37985 -0.53821,-0.62204 -0.9505,-0.60988zM22.06055,21.06055c-0.40692,0.00011 -0.77321,0.24676 -0.92633,0.62377c-0.15312,0.37701 -0.06255,0.80922 0.22907,1.09303l2.12109,2.12109c0.25082,0.26123 0.62326,0.36645 0.9737,0.27509c0.35043,-0.09136 0.6241,-0.36502 0.71546,-0.71546c0.09136,-0.35043 -0.01386,-0.72288 -0.27509,-0.9737l-2.12109,-2.12109c-0.18827,-0.19353 -0.4468,-0.30272 -0.7168,-0.30273zM14.98438,23.98633c-0.55152,0.00862 -0.99193,0.46214 -0.98437,1.01367v3c-0.0051,0.36064 0.18438,0.69608 0.49587,0.87789c0.3115,0.18181 0.69676,0.18181 1.00825,0c0.3115,-0.18181 0.50097,-0.51725 0.49587,-0.87789v-3c0.0037,-0.2703 -0.10218,-0.53059 -0.29351,-0.72155c-0.19133,-0.19097 -0.45182,-0.29634 -0.72212,-0.29212z"
                ></path></g
              ></g
            >
          </svg>
          <div class="current_weather">
            <span class="temeratureNumber"
              >{$apiData.current.temperature_2m}º</span
            >
          </div>
        </div>
        <div class="min_max_weather">
          <div class="min_max_values">
            <DailyTemperatureSummary
              description={"Max"}
              temerature={$apiData.daily.temperature_2m_max[0]}
            />
            <DailyTemperatureSummary
              description={"Min"}
              temerature={$apiData.daily.temperature_2m_min[0]}
            />
          </div>
        </div>
      </div>
      <div class="descriptions">
        <span class="current_description">Clear skies, possible cyclone</span>
        <span class="min_max_description"
          >Feels like {$apiData.current.apparent_temperature}º</span
        >
      </div>
    </div>
    <div class="detailed_info"></div>
  </div>
  <Hourly hourly={$apiData.hourly} />
  <ThisWeek
  daily={$apiData.daily}
  />
</main>

<style lang="scss">
  * {
    color: #e1e7f1;
    font-family: "Inter", sans-serif;
    font-optical-sizing: auto;
  }
  :global(body) {
    background: #0e3a85;
    background: radial-gradient(at center #0e3a85, #2b519a);
  }

  .main {
    margin: 0 25%;
    .header {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      .searcher {
        width: 100%;
        background-color: #1c489c;
        border: none;
        border-radius: 1rem;
        padding-left: 8px;
        outline: none;
        height: 1.5rem;
      }
      .settings {
        background-color: #1c489c;
        border-radius: 50%;
        padding: 0.4rem;
        height: 0.85rem;
        width: 0.85rem;
        &::placeholder {
          color: #e1e7f1;
        }
      }
    }
    .selected_day {
      .general_info {
        .current_description {
          font-size: 0.8rem;
        }
        .descriptions {
          display: flex;
          justify-content: space-between;
          .min_max_description {
            color: rgb(221, 78, 78);
            font-weight: 500;
            font-size: 0.8rem;
          }
        }
        .weather {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          .weather_image_section {
            display: flex;
            align-items: center;
            .weather_image {
              width: 5rem;
              height: 5rem;
            }
            .current_weather {
              display: flex;
              .temeratureNumber {
                font-size: 3rem;
                font-weight: 700;
              }
            }
          }
        }
        .min_max_weather {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .min_max_values {
            display: flex;
            gap: 2rem;
          }
        }
      }
    }
  }
</style>
