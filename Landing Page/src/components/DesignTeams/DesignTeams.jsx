import designteams from "../../constants/designteams";
import './DesignTeams.css';

export function DesignTeams() {
return (
<section className="design-team-section">
  <div className="design-team-title-description">
    <h2>Crea tus mejores diseños en equipo.</h2>
    <p>Prueba Canva para Equipos, la solución integral para que equipos de cualquier tamaño diseñen y colaboren en conjunto.</p>
  </div>
  <div className="design-team-card">
  <img src="https://static.canva.com/anon_home/teams-es-MX-1150x850.png" className="design-team-image" />
    <div className="design-team-texts">
      {designteams.map((item, index) => (
        <div className="design-team-item" key={index}>
          <img src={item.icon} alt={`Icono ${index + 1}`} />
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  </div>
  <button className="design-team-button">Prueba Canva para Equipos</button>
</section>

);
}