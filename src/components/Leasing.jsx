import './Leasing.css';

function Leasing() {
  return (
    <section className="leasing" id="leasing">
      <div className="container">
        <div className="leasing__grid">
          <div className="leasing__text">
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              <span className="accent-text">Лизинг</span> для вашего бизнеса
            </h2>
            <p className="leasing__subtitle">
              Являясь лизинговым агентством, мы помогаем предприятиям получить необходимое
              оборудование, технику и транспорт на выгодных условиях. Сотрудничаем напрямую с
              крупнейшими лизингодателями страны, что гарантирует быстрое одобрение и минимальные ставки.
            </p>
            <div className="leasing__partners">
              <h3>Наши партнёры по лизингу:</h3>
              <ul className="leasing__list">
                <li>• Балтийский лизинг</li>
                <li>• Сбербанк Лизинг</li>
                <li>• Альфа-Банк Лизинг</li>
                <li>• ВТБ Лизинг</li>
                <li>• Газпромбанк Автолизинг</li>
              </ul>
            </div>
            <p className="leasing__description">
              Мы берём на себя полное сопровождение сделки: от подбора оптимальной программы
              до подписания договора. Благодаря многолетнему опыту и доверию со стороны лизингодателей,
              наши клиенты получают финансирование в среднем на 15–20% быстрее рынка.
              Работаем с суммами от 1 млн до 500 млн рублей.
            </p>
            <button
              className="btn btn--primary"
              onClick={() =>
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
              }
            >
              Получить консультацию
            </button>
          </div>
          <div className="leasing__image-wrapper">
            <img
              src="/images/diting_result.jpeg"
              alt="Сотрудник компании"
              className="leasing__image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Leasing;