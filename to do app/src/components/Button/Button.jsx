import styles from './Button.module.css'

export function Button ({ className, onClick, disabled }) {
  let btnStyle, content

// Define un componente funcional que toma tres propiedades
// Declara dos variables locales que se utilizarán para determinar el estilo y el contenido.

  if (className === 'add') {
    btnStyle = styles.add
    content = 'Add'
  } else if (className === 'erase') {
    btnStyle = styles.erase
    content = 'X'
  } else if (className === 'clearAll') {
    btnStyle = styles.clearAll
    content = 'Clear'
  }

  // serie de condiciones que determinan el estilo y el contenido basándose en el valor de la propiedad className. 
  // Dentro de cada condicional, se asigna un valor a btnStyle utilizando los estilos definidos
  // Se asigna un valor a content que representa el texto que se mostrará en el botón.

  return (
    <div>
      <button className={btnStyle} onClick={onClick} disabled={disabled}>{content}</button>
    </div>
  )

  // Renderiza un elemento button. 
  // Se aplica la clase de estilo determinada dinámicamente según el valor de btnStyle
  // Se establecen los controladores de eventos onClick y disabled según los valores pasados como propiedades. 
  // El texto del botón se establece dinámicamente según el valor de content.

}

