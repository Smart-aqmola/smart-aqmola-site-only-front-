import { useEffect, useState } from 'react'
import type { Language } from '../content'

import '../styles/weather.css'


// Fixed location: Kokshetau, Kazakhstan. No geolocation is used.
const weatherUrl = 'https://api.open-meteo.com/v1/forecast?latitude=53.28&longitude=69.38&current=temperature_2m,weather_code&temperature_unit=celsius'
const refreshInterval = 15 * 60 * 1000


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


const weatherText = {
  RU: {
    city: 'Кокшетау', location: 'Кокшетау, Казахстан', label: 'Погода: Кокшетау, Казахстан', loading: 'Загрузка...', error: 'Погода недоступна',
    conditions: { sunny: 'Ясно', 'partly-cloudy': 'Переменная облачность', cloudy: 'Облачно или туман', rainy: 'Дождь', snowy: 'Снег', stormy: 'Гроза', unknown: 'Данные о погоде уточняются' },
  },
  KZ: {
    city: 'Көкшетау', location: 'Көкшетау, Қазақстан', label: 'Ауа райы: Көкшетау, Қазақстан', loading: 'Жүктелуде...', error: 'Ауа райы қолжетімсіз',
    conditions: { sunny: 'Ашық', 'partly-cloudy': 'Ауыспалы бұлтты', cloudy: 'Бұлтты немесе тұман', rainy: 'Жаңбыр', snowy: 'Қар', stormy: 'Найзағай', unknown: 'Ауа райы деректері нақтылануда' },
  },
  EN: {
    city: 'Kokshetau', location: 'Kokshetau, Kazakhstan', label: 'Weather: Kokshetau, Kazakhstan', loading: 'Loading...', error: 'Weather unavailable',
    conditions: { sunny: 'Clear', 'partly-cloudy': 'Partly cloudy', cloudy: 'Cloudy or foggy', rainy: 'Rain', snowy: 'Snow', stormy: 'Thunderstorm', unknown: 'Weather data pending' },
  },
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


function Weather({ language }: { language: Language }) {
  const [temperatura, setTemperatura] = useState<number | null>(null)
  const [weatherCode, setWeatherCode] = useState<number | null>(null)
  const [hasError, setHasError] = useState(false)
  const text = weatherText[language]
  const weatherType = getWeatherType(weatherCode)

  useEffect(() => {
    const controller = new AbortController()
    const loadWeather = async () => {
      try {
        const response = await fetch(weatherUrl, { signal: controller.signal, cache: 'no-store' })
        if (!response.ok) throw new Error('Weather request failed')
        const data = await response.json()
        if (!Number.isFinite(data.current?.temperature_2m) || !Number.isFinite(data.current?.weather_code)) {
          throw new Error('Invalid weather data')
        }
        if (controller.signal.aborted) return
        setTemperatura(data.current.temperature_2m)
        setWeatherCode(data.current.weather_code)
        setHasError(false)
      } catch {
        if (controller.signal.aborted) return
        setTemperatura(null)
        setWeatherCode(null)
        setHasError(true)
      }
    }
    void loadWeather()
    const interval = window.setInterval(() => { void loadWeather() }, refreshInterval)
    return () => {
      controller.abort()
      window.clearInterval(interval)
    }
  }, [])

  return (
    <div className="weather-widget">
      <section className="weather-card" aria-label={text.label}>
        <WeatherIcon weatherType={weatherType} weatherLabel={text.conditions[weatherType]} />
        <div className="weather-content">
          <span className="weather-city-name" title={text.location}>{text.city}</span>
          <div className="weather-reading" role="status" aria-live="polite" aria-atomic="true">
            {temperatura === null ? (
              <p className="weather-loading">{hasError ? text.error : text.loading}</p>
            ) : (
              <p className="weather-temperature">
                {temperatura}<span className="weather-unit">{' '}°C</span>
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Weather
