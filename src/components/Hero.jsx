import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Фоновое изображение */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1920&q=80"
          alt="Контейнерный порт"
          loading="eager"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <span className="hero__badge">🇨🇳 Прямые поставки из Китая</span>
          <h1 className="hero__title">
            Доставим <span className="accent-text">любые товары</span> и комплектующие из Китая в Россию
          </h1>
          <p className="hero__subtitle">
            Берём на себя полный цикл: поиск поставщика, переговоры, выкуп, логистика и таможня.
            Вам остаётся только получить товар и развивать бизнес.
          </p>
          <div className="hero__cta">
            <button
              className="btn btn--primary"
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Оставить заявку
            </button>
            <button
              className="btn btn--outline"
              onClick={() =>
                document.getElementById('catalog').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Смотреть каталог
            </button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">компаний-клиентов</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">12 000+</span>
              <span className="hero__stat-label">тонн доставлено</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-number">7 лет</span>
              <span className="hero__stat-label">на рынке</span>
            </div>
          </div>
        </div>

        {/* Видео-вставки */}
        <div className="hero__videos">
          <div className="hero__video-card">
            <div className="hero__video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/LgT3YFn8nQY?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0"
                title="Как мы работаем с поставщиками в Китае"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <div className="hero__video-label">
              <span className="hero__video-dot"></span>
              Как мы работаем
            </div>
          </div>
          <div className="hero__video-card">
            <div className="hero__video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&mute=1&controls=1&modestbranding=1&rel=0"
                title="Обзор логистики из Китая"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                frameBorder="0"
              ></iframe>
            </div>
            <div className="hero__video-label">
              <span className="hero__video-dot hero__video-dot--live"></span>
              Процесс доставки
            </div>
          </div>
        </div>
      </div>

      {/* Волна-разделитель */}
      <div className="hero__wave">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0,60 C360,120 720,0 1440,60 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}

export default Hero;