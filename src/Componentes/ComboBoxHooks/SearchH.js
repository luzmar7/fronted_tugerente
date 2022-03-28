/**
 * Created by Mariluz Vargas on 25/03/2022.
 * Sub Componente que se encarga de manejar los Inputs.
 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
const SearchH = ({ placeholderCategoria, placeholderItems, valorCategoria, valorItem, obtenerValorCategoria, obtenerValorItem, onChangeCategoria, onChangeItem, visibleCategoria, visibleItem}) => {
  /**
  * valorCategoria: Variable que almacena el valor entrante, para la categoria.
  * valorItem: Variable que almacena el valor entrante, para el item.
  * obtenerValorCategoria: Función que se encarga de enviar el valorCategoria
  * obtenerValorItem: Función que se encarga de enviar el valorItem
  * onChangeCategoria: Función que se envia al momento de hacer el OnChange, para la categoria.
  * onChangeItem: Función que se envia al momento de hacer el OnChange, para el item..
  */

  SearchH.propTypes = {
    placeholderCategoria: PropTypes.string,
    placeholderItems: PropTypes.string,
    valorCategoria : PropTypes.string,
    valorItem : PropTypes.string,
    obtenerValorCategoria : PropTypes.func,
    obtenerValorItem : PropTypes.func,
    onChangeCategoria : PropTypes.func,
    onChangeItem : PropTypes.func,
    visibleCategoria: PropTypes.bool,
    visibleItem: PropTypes.bool
  }
  SearchH.defaultProps = {
    placeholderCategoria : 'Categoria',
    placeholderItems : 'Items',
    valorCategoria : '',
    valorItem : '',
    visibleCategoria: false,
    visibleItem: true
  }
  return (
    <div className='SearchBar'>
      <div hidden={!visibleCategoria}>
        <input className='input-style'
          // ref={input => (inputCategoria = input)}
          type='text'
          placeholder={placeholderCategoria}
          onChange={onChangeCategoria}
        />
      </div>
      <div hidden={!visibleItem}>
        <input className='input-style'
          // ref={input => (inputIem = input)}
          type='text'
          placeholder={placeholderItems}
          onChange={onChangeItem}
        />
      </div>
    </div>
  )
}

export default SearchH
