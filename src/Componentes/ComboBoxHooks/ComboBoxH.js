/**
 * Created by Mariluz Vargas on 25/03/2022
 * Componente que muestra un listado dividido en partes y con buscadores tanto para el titulo como el contenido.
 */

import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import SearchH from './SearchH'
import ContenedorCategoriaH from './ContenedorCategoriaH'
import './ComboBoxH.scss'

const ComboBoxH = (props) => {
  /**
   * datos: Array que recive del Padre el array debe estar declarado de la siguiente manera:
   todo let lista = [
   todo { id: '1', categoria: 'Categoria 1', idItem:'1', valor:'item1-1', desc:'item uno' },
   todo { id: '2', categoria: 'Categoria 1', idItem:'2', valor:'item1-2', desc:'item dos' },
   todo { id: '3', categoria: 'Categoria 1', idItem:'3', valor:'item1-3', desc:'item tres' },
   todo { id: '4', categoria: 'Categoria 2', idItem:'4', valor:'item2-1', desc:'item cuatro' },
   todo { id: '5', categoria: 'Categoria 2', idItem:'5', valor:'item2-2', desc:'item cinco' },
   todo { id: '6', categoria: 'Categoria 2', idItem:'6', valor:'item2-3', desc:'item seis' },
   todo { id: '7', categoria: 'Categoria 2', idItem:'7', valor:'item2-4', desc:'item siete' },
   todo { id: '8', categoria: 'Categoria 3', idItem:'8', valor:'item3-1', desc:'item ocho' },
   todo { id: '9', categoria: 'Categoria 3', idItem:'9', valor:'item3-2', desc:'item nueve' },
   todo { id: '10', categoria: 'Categoria 4', idItem:'10', valor:'item4-1', desc:'item diez' },
   todo { id: '11', categoria: 'Categoria 4', idItem:'11', valor:'item4-2', desc:'item once' },
   todo { id: '12', categoria: 'Categoria 4', idItem:'12', valor:'item4-3', desc:'item doce' },
   todo { id: '13', categoria: 'Categoria 4', idItem:'13', valor:'item4-4', desc:'item trece' },
   todo { id: '14', categoria: 'Categoria 4', idItem:'14', valor:'item4-5', desc:'item catorce' }
   todo ]
   id: codigo para el objeto.
   categoria: para agrupar los valores que se mostrar en pantalla.
   idItem: id para manejar el Item en especifico.
   valor: codigo interno que se maneja para saber que item es ese valor se lo devuelve al Padre.
   desc: Valor que se muestra en los bloques de categoria dentro de la pantalla que se devuelve al Padre.
   * filtroCategoria: Variable que se maneja internamente para el buscado de Categoria.
   * filtroItem: Variable que se maneja para el buscado del Item.
   * valorSeleccionado: Variable seleccionada.
   * valorMostrado: Valor que se muestra en pantalla una ves seleccionado.
   * etiqueta: Titulo del Componente.
   * valor: Si se desea buscar un valor especifico dentro del array enviado. para que inicie en ese, se envia desde el Padre.
   * habilitado: Variable para desplegar la lista o no.
   * visible: Oculta o no el componente. solo bool.
   * desplegable: Variable que maneja el abrir o cerrar el listado desplegable.
   * obtenerValor: Debe recibir una funciÃ³n del padre para enviarle los valores a esa funciÃ³n.
   * estiloCampo: Propiedad que acepta estilos para el input del componente
   * ej: {
      cursiva: false,
      subRayado: false,
      negrilla: false,
      tamanio: 20}
   */
  const [placeholderCategoria, setPlaceholderCategoria] = useState(props.placeholderCategoria);
  const [placeholderItems, setPlaceholderItems] = useState(props.placeholderItems);
  const [filtroCategoria, setFiltroCategoria] = useState('Empresas');
  const [filtroItem, setfiltroItem] = useState(props.filtroItem);
  const [valorSeleccionado, setValorSeleccionado] = useState(props.valorSeleccionado);
  const [valorMostrado, setValorMostrado] = useState(props.valorMostrado);
  const [etiqueta, setEtiqueta] = useState(props.etiqueta);
  const [valor, setValor] = useState(props.valor);
  const [habilitado, setHabilitado] = useState(props.habilitado);
  const [visible, setVisible] = useState(props.visible);
  const [mensajeError, setMensajeError] = useState(props.mensajeError);
  const [desplegable, setDesplegable] = useState(props.desplegable);
  const [valorPadre, setValorPadre] = useState(props.valorPadre);
  const [id, setId] = useState(props.id);
  const [visibleCategoria, setVisibleCategoria] = useState(props.visibleCategoria);
  const [visibleItem, setVisibleItem] = useState(props.visibleItem);
  const [estiloCampo, setEstiloCampo] = useState(props.estiloCampo);
  const [tipoIteraccion, setTipoIteraccion] = useState(props.tipoIteraccion);
  const [idClasificadorCliente, setIdClasificadorCliente] = useState(props.idClasificadorCliente);
 
  ComboBoxH.propTypes = {
    placeholderCategoria: PropTypes.string,
    placeholderItems: PropTypes.string,
    datos: PropTypes.array,
    filtroCategoria: PropTypes.string,
    filtroItem: PropTypes.string,
    valorSeleccionado: PropTypes.string,
    valorMostrado: PropTypes.string,
    etiqueta: PropTypes.string,
    valor: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    habilitado: PropTypes.bool,
    visible: PropTypes.bool,
    mensajeError: PropTypes.string,
    desplegable: PropTypes.bool,
    obtenerValor: PropTypes.func,
    valorPadre: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    id: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    visibleCategoria: PropTypes.bool,
    visibleItem: PropTypes.bool,
    estiloCampo: PropTypes.object,
    tipoIteraccion: PropTypes.string,
    idClasificadorCliente: PropTypes.string
  }
  ComboBoxH.defaultProps = {
    placeholderCategoria: 'Categoria',
    placeholderItems: 'Items',
    datos: [],
    filtroCategoria: '',
    filtroItem: '',
    valorSeleccionado: '',
    valorMostrado: 'Seleccione...',
    etiqueta: 'Etiqueta',
    valor: '',
    habilitado: true,
    visible: true,
    desplegable: false,
    valorPadre: '',
    id: '',
    visibleCategoria: false,
    visibleItem: true,
    estiloCampo: {},
    tipoIteraccion: null,
    idClasificadorCliente: null
  }
  useEffect (() => {
    obtenerSeleccionado(valor, valorPadre, props.datos, tipoIteraccion, idClasificadorCliente)
  },[])

  /**
   * Metodo que recibe el valor enviado desde el padre para mostrarlo en la pantalla.
   */
  const obtenerSeleccionado = (pValor, pValorPadre, pDatos, ptipoIteraccion = null, pidClasificadorCliente = null) => {
    pValor = (pValor !== null) ? ConvertirCadena(pValor) : pValor
    let datos = pDatos
    let sw = true
    for (let i in datos) {
      if (pValor === ConvertirCadena(datos[i].idItem)) {
        sw = false
        setValor(pValor) 
        setValorMostrado(datos[i].desc)
        setValorPadre(pValorPadre)
        setTipoIteraccion(ptipoIteraccion)
        setIdClasificadorCliente(pidClasificadorCliente)

        break
      }
    }
  }


  /**
   * Se encarga de devolver la cadena vacia o con toString()
   */
  const ConvertirCadena = (pValor) => {
    if (pValor !== undefined && pValor !== null) {
      return pValor.toString()
    } else {
      return pValor
    }
  }
  /**
   * Funcion que se activa al momento de hacer el click.
   */
    const handleOnClick = () => {
      setDesplegable( !desplegable )
    }

  /**
   * Funcion que se activa para enviar a los contenedor categoria.
   */
  const obtenerDatoItem = (valorMostrar, desc, valor, valorPadre, tipoIteraccion, idClasificadorCliente) => {
      setDesplegable(!desplegable)
      setValorSeleccionado(valorSeleccionado)
      validar(valorMostrar, desc, valor, valorPadre, tipoIteraccion, idClasificadorCliente)
  }

    /**
   * Funcion que valida los datos del array del padre como el valor, desc.
   */
    const validar = (valorMostrar, desc, valor, valorPadre, tipoIteraccion, idClasificadorCliente) =>  {
      if (valorMostrar !== 'Seleccione...') {
        setValorMostrado(desc)
        setId(valorMostrar)
        setValor(valor)
        setValorPadre(valorPadre)
        setTipoIteraccion(tipoIteraccion)
        setIdClasificadorCliente(idClasificadorCliente)
      }
    }
  /**
   * Funcion encargada de validar los datos del input item.
   */
  const filtrarItem = (e) => {
    setfiltroItem(e.target.value)
  }

  /**
   * Funcion encargada de recibir los datos del input Categoria.
  */
  const filtrarCategoria = (e) => {
    setFiltroCategoria(e.target.value)
  } 
  return (
    <div className='containerGeneral' hidden={!visible}>
      <div className={'listaFiltradoCabecera'} onClick={handleOnClick}>
        <div className={'listaFiltradoEtiqueta'}>
          { etiqueta }
        </div>
        <div className={'listaFiltradoValor'}>
          { valorMostrado }
        </div>
        <i className='fa fa-chevron-circle-down fa-lg' aria-hidden='true'> {'Component combobox HOOKS'} </i>
      </div>
      <div className={desplegable ? 'listaFiltradoContainerCategoria listaFiltradoDesplegable' : 'listaFiltradoContainerCategoria listaFiltradoNoDesplegable'}>
        <div>
        <SearchH
          onChangeCategoria={filtrarCategoria}
          onChangeItem={filtrarItem}
          placeholderCategoria={placeholderCategoria}
          placeholderItems={placeholderItems}
          valor={valorSeleccionado}
          visibleCategoria={visibleCategoria}
          visibleItem={visibleItem}
        />
        </div>
        <div>
          <ContenedorCategoriaH
            categoria={props.datos}
            filtroCategoria={filtroCategoria}
            filtroItem={filtroItem}
            onClickItem={obtenerDatoItem}
            estiloCampo={estiloCampo}
          />
        </div>
      </div>
    </div>
  )
}

export default ComboBoxH
