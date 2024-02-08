import gifImage from "../../assets/body1.gif";
import './Body.css';

export function Body() {
    
  const cards = [
    {
      title: "Canva Gratis",
      text: "Para cualquier persona que quiera diseñar lo que sea por su cuenta, con su familia, con sus amistades o con quien quiera. No se necesita tener experiencia.",
      buttonText: "Usar Canva Gratis"
    },
    {
      title: "Canva Pro",
      icon: "https://cdn-icons-png.flaticon.com/512/6941/6941697.png",
      text: "Para cualquier persona usuaria o para quienes se dediquen al emprendimiento o al diseño de forma independiente y quieran tener acceso ilimitado a contenido prémium para crear diseños profesionales con facilidad y aumentar su productividad.",
      buttonText: "Quiero probar Canva Pro gratis"
    },
    {
      title: "Canva para Equipos",
      icon: "https://cdn-icons-png.flaticon.com/512/6941/6941697.png",
      text: "Incluye todas las mejores funciones de Canva Pro. Además, creemos que te encantarán estas funciones diseñadas para facilitar el trabajo en equipos de cualquier tamaño.",
      buttonText: "Empieza tu prueba gratis de Canva para Equipos"
    }
  ];

  const secondCard = [
    {
      image: "https://content-management-files.canva.com/a9cdf47a-b256-4b62-aa8a-4b48a83c85b5/walkthrough-start-univ-728x584.jpg",
      label: "PASO 1",
      title: "Empieza como quieras",
      description: "Elige un archivo multimedia propio o una plantilla prediseñada, o usa la IA para generar lo que quieras."
    },
    {
      image: "https://content-management-files.canva.com/d46f9540-d80e-4b45-a5f4-dbfe019d2197/walkthrough-edit-univ-724x584.jpg",
      label: "PASO 2",
      title: "Arrastra, suelta y edita",
      description: "Busca y encuentra lo que necesites en el editor. Pueden ser elementos, fotos, audios o, incluso, apps. Arrastra, suelta y personaliza; todo en el mismo lugar."
    },
    {
      image: "https://content-management-files.canva.com/692627b4-0152-4eca-b088-88e47e92a96f/walkthrough-collaborate-univ-724x584.jpg",
      label: "PASO 3",
      title: "Colabora, comparte o imprime",
      description: "Invita a otras personas a ver o editar tu diseño, o bien descárgalo, publícalo en tus redes sociales sin salir de Canva o envíalo a imprimir."
    }
  ];

  return (
    <div className="body">
      <section className="section">
        <div className="content">
          <h2>¿Qué diseñaremos hoy?</h2>
          <p>Con Canva, es muy fácil crear, compartir e imprimir diseños profesionales.</p>
          <button className="body-button">Registrarme gratis</button>
        </div>
        <div className="gif-container">
          <img src={gifImage} alt="GIF 1" />
        </div>
      </section>

      <section className="section">
        <div className="title">
          <h2>Una herramienta ideal para todo el mundo</h2>
          <div className="card-container">
            {cards.map((card, index) => (
              <div className="card" key={index}>
                <div className="card-content">
                  {card.icon && <img src={card.icon} alt="Icono" className="card-icon" />} 
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-text">{card.text}</p>
                  <button className="card-button">{card.buttonText}</button>
                </div>
              </div>
            ))}
            <div className="condicionAdicional">
          <p><u>Los centros educativos</u> y <u>las organizaciones sin fines de lucro</u> pueden usar las funciones prémium de Canva gratis</p>
          </div>
          </div>
        </div>
      </section>

      <section className="section">
  <h2 className="second-section-title">Cómo funciona Canva</h2>
  <div className="second-card-container">
    {secondCard.map((card, index) => (
      <div className="second-card" key={index}>
        <img src={card.image} alt="Imagen" className="second-card-image" />
        <p className="second-card-label"> <b>{card.label}</b></p>
        <h3 className="second-card-title">{card.title}</h3>
        <p className="second-card-description">{card.description}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  );
}
