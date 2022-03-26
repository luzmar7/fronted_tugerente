import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import CategoriaH from './CategoriaH'
const uuid = require('uuid')
const ContenedorCategoriaH = ({categoria, filtroCategoria, filtroItem, onClickItem, estiloCampo}) => {
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
    ContenedorCategoriaH.propTypes = {
      categoria : PropTypes.array,
      filtroCategoria : PropTypes.string,
      filtroItem : PropTypes.string,
      onClickItem2 : PropTypes.func,
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
      console.log('categoria  SASUKE')
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
