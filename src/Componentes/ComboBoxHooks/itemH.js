import React, { useState } from 'react'
import PropTypes from 'prop-types'

const ItemH = (props) => {
  console.log('ITEM HOKS', props)
  /**
  * valor: Valor que recibe del array enviado desde el Padre.
  * desc: Desc recibe del array enviado desde el padre.
  * onClickItem: Valor que devuelve al padre luego del click.
  */
  const [valorMostrar, setValorMostrar] = useState(props.valorMostrar);
  const [desc, setDesc] = useState(props.desc);
  const [tipoIteraccion, setTipoIteraccion] = useState(props.tipoIteraccion);
  const [idClasificadorCliente, setIdClasificadorCliente] = useState(props.idClasificadorCliente);
  const [onClickItem, setOnClickItem] = useState(props.onClickItem);
  const [valor, setValor] = useState(props.valor);
  const [valorPadre, setValorPadre] = useState(props.valorPadre);


  ItemH.propTypes = {
    valorMostrar : PropTypes.string,
    desc: PropTypes.string,
    tipoIteraccion: PropTypes.string,
    idClasificadorCliente: PropTypes.string,
    onClickItem : PropTypes.func,
    valor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    valorPadre: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }
  ItemH.defaultProps = {
    valorMostrar : '',
    desc: '',
    tipoIteraccion: null,
    idClasificadorCliente: null,
    valor: '',
    valorPadre: ''
  }
  return (
    <div >
      <div value={valorMostrar}
        onClick={() => onClickItem(
          valorMostrar,
          desc,
          valor,
          valorPadre,
          tipoIteraccion,
          idClasificadorCliente
        )}
        style={{ cursor:'pointer' }}>
        {desc}
      </div>
    </div>
  )
}

export default ItemH
