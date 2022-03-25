import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './ComboBoxH.scss'

const ComboBoxH = (props) => {
  console.log('lista sasuke', props)
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
  const [datos, setDatos] = useState(props.datos);
  const [filtroCategoria, setFiltroCategoria] = useState(props.filtroCategoria);
  const [filtroItem, setfiltroItem] = useState(props.filtroItem);
  const [valorSeleccionado, setValorSeleccionado] = useState(props.valorSeleccionado);
  const [valorMostrado, setValorMostrado] = useState(props.valorMostrado);
  const [etiqueta, setEtiqueta] = useState(props.etiqueta);
  const [valor, setValor] = useState(props.valor);
  const [habilitado, setHabilitado] = useState(props.habilitado);
  const [visible, setVisible] = useState(props.visible);
  const [error, setError] = useState(props.error);
  const [mensajeError, setMensajeError] = useState(props.mensajeError);
  const [desplegable, setDesplegable] = useState(props.desplegable);
  const [valorPadre, setValorPadre] = useState(props.valorPadre);
  const [id, setId] = useState(props.id);
  const [visibleCategoria, seVisibleCategoria] = useState(props.visibleCategoria);
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
    error: PropTypes.bool,
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

  return (
    <div className='containerGeneral' hidden={!visible}>
      {visible}
      {etiqueta}
      {placeholderCategoria}
      hola mundo
      
    </div>
  )
}

export default ComboBoxH
