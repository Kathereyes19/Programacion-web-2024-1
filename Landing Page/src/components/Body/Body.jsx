import gifImage from "../../assets/body1.gif";
import gifImage2 from "../../assets/body2.gif";
import plantillasImage from "../../assets/plantillas.png";
import icon1 from '../../assets/icono1.png'; 
import icon2 from '../../assets/icono2.png';
import icon3 from '../../assets/icono3.png';
import icon4 from '../../assets/icono4.png';
import carrusel1 from "../../assets/carrusel1.png";
import carrusel2 from "../../assets/carrusel2.png";
import carrusel3 from "../../assets/carrusel3.png";
import carrusel4 from "../../assets/carrusel4.png";
import carrusel5 from "../../assets/carrusel5.png";
import carrusel6 from "../../assets/carrusel6.png";
import carrusel7 from "../../assets/carrusel7.png";
import carrusel8 from "../../assets/carrusel8.png";
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

  const verticalCards = [
    {
      title: "Crea con IA",
      description: "Redefine tu forma de crear con Estudio Mágico, nuestro paquete de herramientas con tecnología de la IA. Genera texto con la voz de tu marca usando Texto Mágico o transforma tus fotos con Edición Mágica.",
      buttonText: "Descubrir ahora",
      image: "https://static.canva.com/anon_home/benefits/benefits-magic-studio-fallback-en-1288x952.jpg", 
    },
    {
      title: "Diseña con otras personas",
      description: "Invita a tus amistades y a tu familia a diseñar contigo, o arma tu propio equipo para diseñar en conjunto. Nuestras funciones de colaboración te permiten comentar y trabajar en tiempo real en presentaciones, pizarras online, docs, videos o la planificación de una fiesta de cumpleaños.",
      buttonText: "Empezar a diseñar",
      image: "https://static.canva.com/anon_home/benefits/benefits-together-es-mx-1288x952.jpg", 
    },
    {
      title: "Diseña e imprime sin salir de Canva",
      description: "Convierte tus recuerdos en álbumes de fotos; tus diseños, en playeras; y la identidad de tu marca, en tarjetas de presentación, flyers o invitaciones. Imprime aquí mismo todo lo que necesites y te lo enviamos gratis a tu casa. ",
      buttonText: "Imprime tu diseño",
      image: "https://static.canva.com/anon_home/benefits/benefits-print-es-mx-1288x952.jpg",
    },
  ];

  const DiseñoEquipos = [
    { icono: icon1, 
      texto: "Carpetas de equipo para ayudarte a organizarte, a guardar recursos de marca y a gestionar contenido" 
    },
    { icono: icon2, 
      texto: "Diseña y planifica la publicación de tus posts de redes sociales desde Canva" 
    },
    { icono: icon3, 
      texto: "Trabaja en equipo y en tiempo real con personas de distintos países, departamentos o empresas." 
    },
    { icono: icon4, 
      texto: "Comentarios en los diseños para comunicarte, seguir creando contenido y resolver sugerencias en tiempo real" 
    },
    ];

    const CarruselCards = [
      { image: carrusel1,
      title: "Tenemos un Marketplace de apps",
      description: "Accede a las funciones con IA más destacadas, descubre más contenido o integra Canva con las plataformas que ya tengas.",
      },
  
      { image: carrusel2,
      title: "Hacemos que dar presentaciones sea fácil",
      description: "Olvídate del estrés que genera preparar y dar presentaciones con nuestras presentaciones de consulta.",
      },
  
      { image: carrusel3,
      title: "Tenemos un editor de video",
      description: "Crea y edita videos profesionales con animaciones y audios sencillos, y mucho más.",
      },
  
      { image: carrusel4,
      title: "Es gratis para el salón de clases",
      description: "Usa Canva para enseñar y aprender en persona, de forma remota o en modalidad híbrida. Docentes y estudiantes obtienen su propia versión gratuita de Canva.",
      },
  
      { image: carrusel5,
      title: "Imprimimos y llevamos tu pedido a la puerta de tu casa",
      description: "Elige una plantilla creada por nuestros diseñadores y diseñadoras, y personaliza el diseño en segundos. Nosotros lo imprimimos de manera sostenible y lo...",
      },
  
      { image: carrusel6,
      title: "Es sostenible",
      description: "Descubre lo que hacemos para reducir nuestra huella de carbono y cómo tu pedido de impresión de Canva hace que el planeta sea un lugar más habitable.",
      },
  
      { image: carrusel7,
      title: "Gratis para ONG",
      description: "Las ONG obtienen su propia versión de Canva para que puedan seguir contribuyendo al mundo.",
      },


      { image: carrusel8,
        title: "Celebramos la diversidad",
        description: "Conoce cómo apoyamos a creadores y creadoras diversos y les damos voz a culturas de todas partes del mundo.",
        },
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
            {card.icon && <img src={card.icon} alt="Icono" className="card-icon"/>} 
            <div className="card-text-container">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-text">{card.text}</p>
            </div>
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

<section className="section">
      <h2 className="gif-section-title">Empresas de renombre que confían en Canva</h2>
      <div className="second-gif-container">
        <img src={gifImage2} alt="GIF" className="gif-image2" />
      </div>
    </section>

    <section className="section">
      <div className="vertical-cards-container">
        {verticalCards.map((card, index) => (
          <div className="vertical-card" key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="vertical-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <button>{card.buttonText}</button>
                </div>
                <img src={card.image} alt={card.title} className="vertical-card-image" />
              </>
            ) : (
              <>
                <img src={card.image} alt={card.title} className="vertical-card-image" />
                <div className="vertical-card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <button>{card.buttonText}</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>

    <section className="large-image-section">
  <h2>Plantillas para diseñar de todo</h2>
  <p>Personaliza una plantilla de negocios o diseña algo más personal, como una invitación.</p>
  <div className="large-image-container">
    <img src={plantillasImage} alt="Imagen grande" className="large-image" />
  </div>
</section>

<section className="diseños-en-equipo">
      <div className="titulo-descripcion">
        <h2>Crea tus mejores diseños en equipo.</h2>
        <p>Prueba Canva para Equipos, la solución integral para que equipos de cualquier tamaño diseñen y colaboren en conjunto.</p>
      </div>
      <div className="cardDiseño">
        <div className="card-textos">
          {DiseñoEquipos.map((item, index) => (
            <div className="DiseñoEquipos" key={index}>
              <img src={item.icono} alt={`Icono ${index + 1}`} />
              <p>{item.texto}</p>
            </div>
          ))}
        </div>
        <img src="https://static.canva.com/anon_home/teams-es-MX-1150x850.png" alt="Imagen" className="card-imagen" />
      </div>
      <button className="boton">Prueba Canva para Equipos</button>
    </section>

    <section className="carousel-section">
  <div className="carousel-text">
    <h2>Tenemos muchas sorpresas para ti</h2>
    <p>Estas son algunas de nuestras mejores características que quizás no conoces</p>
  </div>
  <div className="carousel-container">
    {CarruselCards.map((card, index) => (
      <div className="cardCarrusel" key={index}>
        <img src={card.image} alt={card.title} />
        <div className="cardCarrusel-text">
          <h2 className="carrusel-title">{card.title}</h2>
          <p className="carrusel-description">{card.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


  </div>
);
}

