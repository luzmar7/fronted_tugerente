import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ItemH from './itemH'
const uuid = require('uuid')
const CategoriaH = ({nombreCategoria, items, filtroCategoria, filtroItem, onClickItem}) => {
  /**
  * nombreCategoria: Variable que maneja el nombre de la categoria.
  * items: Array que le llega desde el componente principal.
  * filtroCategoria: Variable para realizar la busqueda de Categoria.
  * filtroItem: Variable para realizar la busqueda de Item.
  * onClickItem: Evento que se activa desde la pantalla principal.
  */





  CategoriaH.propTypes = {
    nombreCategoria : PropTypes.string,
    items : PropTypes.array,
    filtroCategoria : PropTypes.string,
    filtroItem : PropTypes.string,
    onClickItem : PropTypes.func

  }
  CategoriaH.defaultProps = {
    nombreCategoria : 'Categoria',
    items : [],
    filtroCategoria : '',
    filtroItem : ''
  }

  let categoriaAnterior = null
  let categoriaArray = []
  if (items != null) {
    if (filtroItem !== '') {
      items.filter((item) => {
        if (item.categoria !== categoriaAnterior) {
          categoriaArray.push(
            <div key={uuid.v4()} className='categoria'>
              {item.categoria}
            </div>
          )
        }
        if (item.desc.toLowerCase().indexOf(filtroItem.toLowerCase()) > -1) {
          categoriaArray.push(
            <ItemH key={uuid.v4()} valorPadre={item.id} valor={item.idItem} valorMostrar={item.valor}
              desc={item.desc} tipoIteraccion={item.tipoIteraccion} idClasificadorCliente={item.idClasificadorCliente}
              onClickItem={onClickItem} />
          )
        }
        categoriaAnterior = item.categoria
      })
    } else {
      items.forEach((item, i) => {
        if (item.categoria !== categoriaAnterior) {
          categoriaArray.push(
            <div key={uuid.v4()} className='categoria'>
              {item.categoria}
            </div>
          )
        }
        categoriaArray.push(
          <ItemH key={uuid.v4()} valorPadre={item.id} valor={item.idItem} valorMostrar={item.valor}
            desc={item.desc} tipoIteraccion={item.tipoIteraccion}
            idClasificadorCliente={item.idClasificadorCliente} onClickItem={onClickItem} />
        )
        categoriaAnterior = item.categoria
      })
    }
  } else {
    categoriaArray.push(<h1>Loading....</h1>)
  }


  return (
    <div>
      <div>
        {categoriaArray}
      </div>
    </div>
  )
}

export default CategoriaH
