import React, {useState} from 'react'
import PropTypes from 'prop-types'
import CategoriaH from './CategoriaH'
const uuid = require('uuid')
const ContenedorCategoriaH = (props) => {
  console.log('CONTENEDORCATEGORIAH', props)
    /**
    * categoria: Array que recibe del Padre.
    * filtroCategoria: Variable que maneja el input de las categorias.
    * filtroItem: Variable que maneja el input de los Item.
    * onClickItem: Función que valida la entrada de un evento.
    * estiloCampo: Propiedad que acepta estilos
    * ej: {
       cursiva: false,
       subRayado: false,
       negrilla: false,
       tamanio: 20
      }
    */
   const [categoria, setCategoria] = useState(props.categoria);
   const [filtroCategoria, setFiltroCategoria] = useState(props.filtroCategoria);
   const [filtroItem, setFiltroItem] = useState(props.filtroItem);
   const [onClickItem, setOnClickItem] = useState(props.onClickItem);
   const [estiloCampo, setEstiloCampo] = useState(props.estiloCampo);
    ContenedorCategoriaH.propTypes = {
      categoria : PropTypes.array,
      filtroCategoria : PropTypes.string,
      filtroItem : PropTypes.string,
      onClickItem : PropTypes.func,
      estiloCampo: PropTypes.object

    }
    ContenedorCategoriaH.defaultProps = {
      categoria : null,
      filtroCategoria : '',
      filtroItem : '',
      estiloCampo: {}
    }


    let categoriaL = []
    let categoriaFiltrada = []
    if (categoria !== null) {
      if (filtroCategoria !== '') {
        categoria.filter((item) => {
          if (item.categoria.toLowerCase().indexOf(filtroCategoria.toLowerCase()) > -1) {
            categoriaFiltrada.push(item)
          }
        })
        categoriaL.push(<CategoriaH key={uuid.v4()} items={categoriaFiltrada} filtroItem={filtroItem}
          onClickItem={onClickItem} />)
      } else {
        if (filtroItem !== '') {
          // console.log('hay filtro item de categoria ContendorCategoria')
          categoria.filter((item) => {
            if (item.desc.toLowerCase().indexOf(filtroItem.toLowerCase()) > -1) {
              categoriaFiltrada.push(item)
            }
          })
          categoriaL.push(<CategoriaH key={uuid.v4()} items={categoriaFiltrada} filtroItem={filtroItem}
            onClickItem={onClickItem} />)
        } else {
          categoriaL.push(<CategoriaH key={uuid.v4()} items={categoria} filtroItem={filtroItem}
            onClickItem={onClickItem} />)
        }
      }
    } else {
      categoria.push(<h4>Cargando .... </h4>)
    }

  return (
    <div className='ContainerCategoria' style={estiloCampo}>
      {categoriaL} 
    </div>
  )
}

export default ContenedorCategoriaH
