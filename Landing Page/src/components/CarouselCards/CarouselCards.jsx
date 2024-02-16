import CarouselCards from "../../constants/CarouselCards";

export function CarouselCards() {
return (
<section className="carousel-section">
  <div className="carousel-text">
    <h2>Tenemos muchas sorpresas para ti</h2>
    <p>Estas son algunas de nuestras mejores características que quizás no conoces</p>
  </div>
  <div className="carousel-container">
    {CarouselCards.map((card, index) => (
      <div className="cardCarousel" key={index}>
        <img src={card.image} alt={card.title} />
        <div className="cardCarousel-text">
          <h2 className="carousel-title">{card.title}</h2>
          <p className="carousel-description">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>
);
}
