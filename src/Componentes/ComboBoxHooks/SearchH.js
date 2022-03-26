
/**
 * Created by Mariluz Vargas on 25/03/2022.
 * Sub Componente que se encarga de manejar los Inputs.
 */
import React, { useState } from 'react'
import PropTypes from 'prop-types'
const SearchH = (props) => {
  console.log('SACURA CAPCAPTOR', props)
  /**
  * valorCategoria: Variable que almacena el valor entrante, para la categoria.
  * valorItem: Variable que almacena el valor entrante, para el item.
  * obtenerValorCategoria: Función que se encarga de enviar el valorCategoria
  * obtenerValorItem: Función que se encarga de enviar el valorItem
  * onChangeCategoria: Función que se envia al momento de hacer el OnChange, para la categoria.
  * onChangeItem: Función que se envia al momento de hacer el OnChange, para el item..
  */
  const [placeholderCategoria, setPlaceholderCategoria] = useState(props.placeholderCategoria);
  const [placeholderItems, setPlaceholderItems] = useState(props.placeholderItems);
  const [valorCategoria, setValorCategoria] = useState(props.valorCategoria);
  const [valorItem, setValorItem] = useState(props.valorItem);
  const [obtenerValorCategoria, setObtenerValorCategoria] = useState(props.obtenerValorCategoria);
  const [obtenerValorItem, setObtenerValorItem] = useState(props.obtenerValorItem);
  const [onChangeCategoria, setOnChangeCategoria] = useState(props.onChangeCategoria);
  const [onChangeItem, setOnChangeItem] = useState(props.onChangeItem);
  const [visibleCategoria, setVisibleCategoria] = useState(props.visibleCategoria);
  const [visibleItem, setVisibleItem] = useState(props.visibleItem);

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
    visibleCategoria: true,
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
