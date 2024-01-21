import PropTypes from 'prop-types'

//props: es un objeto que recibimos
export const FirstApp = ({title}) => {
    const name = "Wilson"

    return (
      <div>
        <h1>{title}</h1>
        <p>{name}</p>
      </div>
     )
  }

  //propTypes : nos sirve para tipar nuestras propiedades
  FirstApp.propTypes = {
    title : PropTypes.string.isRequired
  }
//defaultProps : si en caso no se cumple un tipado, 
//aqui se puede mandar un valor por defecto
  FirstApp.defaultProps  = {
    title : 'No hay titulo'
  }
  

  