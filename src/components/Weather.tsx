import { useEffect, useId, useRef, useState } from 'react'

import '../styles/weather.css'


// Города и их координаты
const cities = [
  {
    name: 'Кокшетау',
    latitude: 53.28,
    longitude: 69.38,
  },
  {
    name: 'Степногорск',
    latitude: 52.35,
    longitude: 71.89,
  },
  {
    name: 'Бурабай',
    latitude: 53.08,
    longitude: 70.31,
  },
]


// Определяем тип погоды по weather_code
function getWeatherType(code: number | null) {
  if (code === 0 || code === 1) return 'sunny'

  if (code === 2) return 'partly-cloudy'

  if (code === 3 || code === 45 || code === 48) {
    return 'cloudy'
  }

  if (
    [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82]
      .includes(code ?? -1)
  ) {
    return 'rainy'
  }

  if ([71, 73, 75, 77, 85, 86].includes(code ?? -1)) {
    return 'snowy'
  }

  if ([95, 96, 99].includes(code ?? -1)) {
    return 'stormy'
  }

  return 'unknown'
}


// Названия погоды
const weatherLabels = {
  sunny: 'Ясно',
  'partly-cloudy': 'Переменная облачность',
  cloudy: 'Облачно или туман',
  rainy: 'Дождь',
  snowy: 'Снег',
  stormy: 'Гроза',
  unknown: 'Данные о погоде уточняются',
}


// Отдельный компонент иконки погоды
function WeatherIcon({
  weatherType,
  weatherLabel,
}: {
  weatherType: string
  weatherLabel: string
}) {
  return (
    <div
      className={`weather-icon weather-icon--${weatherType}`}
      role="img"
      aria-label={weatherLabel}
    >
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
        aria-hidden="true"
      >
        {(weatherType === 'sunny' ||
          weatherType === 'partly-cloudy') && (
          <g className="weather-sun">
            <circle cx="25" cy="25" r="10" />

            <g className="weather-sun-rays">
              <path d="M25 7V3M25 47v-4M7 25H3M47 25h-4M12 12l-3-3M41 9l-3 3M12 38l-3 3M38 38l3 3" />
            </g>
          </g>
        )}

        {weatherType !== 'sunny' && (
          <path
            className="weather-cloud"
            d="M19 40a9 9 0 0 1-1-18 13 13 0 0 1 25 1 8.5 8.5 0 0 1 1 17H19Z"
          />
        )}

        {(weatherType === 'rainy' ||
          weatherType === 'stormy') && (
          <g className="weather-rain">
            <path
              className="weather-drop"
              d="m22 45-2 5"
            />

            <path
              className="weather-drop"
              d="m33 45-2 5"
            />

            <path
              className="weather-drop"
              d="m44 45-2 5"
            />
          </g>
        )}

        {weatherType === 'snowy' && (
          <g
            className="weather-snow"
            fill="currentColor"
            stroke="none"
          >
            <circle cx="22" cy="49" r="2" />
            <circle cx="33" cy="47" r="2" />
            <circle cx="44" cy="49" r="2" />
          </g>
        )}

        {weatherType === 'stormy' && (
          <path d="m34 25-5 8h7l-5 8" />
        )}
      </svg>
    </div>
  )
}


function Weather() {
  const [isCityOpen, setIsCityOpen] = useState(false)
  const cityButtonRef = useRef<HTMLButtonElement>(null)
  const cityOptionsId = useId()

  // Выбранный город
  const [selectedCity, setSelectedCity] =
    useState(cities[0])

  // Температура
  const [temperatura, setTemperatura] =
    useState<number | null>(null)

  // Код погоды от API
  const [weatherCode, setWeatherCode] =
    useState<number | null>(null)

  const weatherType = getWeatherType(weatherCode)

  const weatherLabel = weatherLabels[weatherType]


  // Получаем погоду при изменении города
  useEffect(() => {
    setTemperatura(null)

    fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${selectedCity.latitude}&longitude=${selectedCity.longitude}&current=temperature_2m,weather_code`
    )
      .then((response) => response.json())

      .then((data) => {
        setTemperatura(data.current.temperature_2m)
        setWeatherCode(
          data.current.weather_code ?? null
        )
      })
  }, [selectedCity])


  return (
    <div className="weather-widget">
      <section
        className="weather-card"
        aria-label={`Погода в ${selectedCity.name}`}
      >
        <WeatherIcon
          weatherType={weatherType}
          weatherLabel={weatherLabel}
        />

        <div className="weather-content">
          <div
            className="weather-city-switch"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) setIsCityOpen(false)
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') {
                setIsCityOpen(false)
                cityButtonRef.current?.focus()
              }
            }}
          >
            <button
              className="weather-city-trigger"
              ref={cityButtonRef}
              type="button"
              aria-label={`Выбор города: ${selectedCity.name}`}
              aria-expanded={isCityOpen}
              aria-controls={cityOptionsId}
              onClick={() => setIsCityOpen((open) => !open)}
            >
              {selectedCity.name}
              <span className="weather-city-chevron" aria-hidden="true">▾</span>
            </button>
            {isCityOpen === true && (
              <ul className="weather-city-dropdown" id={cityOptionsId} aria-label="Выбор города">
                {cities.map((city) => (
                  <li key={city.name}>
                    <button
                      className="weather-city-option"
                      type="button"
                      aria-pressed={selectedCity.name === city.name}
                      onClick={() => {
                        setSelectedCity(city)
                        setIsCityOpen(false)
                        cityButtonRef.current?.focus()
                      }}
                    >
                      {city.name}
                      <span aria-hidden="true">{selectedCity.name === city.name ? '✓' : ''}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className="weather-reading"
            role="status"
            aria-live="polite"
            aria-atomic="true"
          >
            {temperatura === null ? (
              <p className="weather-loading">
                Загрузка...
              </p>
            ) : (
              <p className="weather-temperature">
                {temperatura}

                <span className="weather-unit">
                  {' '}
                  °C
                </span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Weather
