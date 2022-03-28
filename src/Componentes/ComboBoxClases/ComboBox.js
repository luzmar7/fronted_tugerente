/**
 * Created by Mariluz Vargas on 25/03/2022
 * Componente que muestra un listado dividido en partes y con buscadores tanto para el titulo como el contenido.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Search from './Search'
import ContendorCategoria from './ContenedorCategoria'
import './ComboBox.scss'

class ComboBox extends Component {

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
  static propTypes = {
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

  constructor (props) {
    super(props)
    console.log('COMBO BOX NOMRAL', props)

    this.state = {
      placeholderCategoria: this.props.placeholderCategoria,
      placeholderItems: this.props.placeholderItems,
      datos: this.props.datos,
      filtroCategoria: this.props.filtroCategoria,
      filtroItem: this.props.filtroItem,
      valorSeleccionado: this.props.valorSeleccionado,
      valorMostrado: this.props.valorMostrado,
      etiqueta: this.props.etiqueta,
      valor: this.props.valor,
      habilitado: this.props.habilitado,
      visible: this.props.visible,
      error: this.props.error,
      mensajeError: this.props.mensajeError,
      desplegable: this.props.desplegable,
      obtenerValor: this.props.obtenerValor,
      valorPadre: this.props.valorPadre,
      id: this.props.id,
      visibleCategoria: this.props.visibleCategoria,
      visibleItem: this.props.visibleItem,
      estiloCampo: this.props.estiloCampo,
      tipoIteraccion: this.props.tipoIteraccion,
      idClasificadorCliente: this.props.idClasificadorCliente
    }
    this.filtrarCategoria = this.filtrarCategoria.bind(this)
    this.filtrarItem = this.filtrarItem.bind(this)
    this.obtenerDatoItem = this.obtenerDatoItem.bind(this)
    this.handleOnClick = this.handleOnClick.bind(this)
    this.obtenerSeleccionado = this.obtenerSeleccionado.bind(this)
  }

  static defaultProps = {
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

  componentWillMount () {
    console.log('componentWillMount, lista filtrado', this)
    this.obtenerSeleccionado(this.state.valor, this.state.valorPadre, this.state.datos, this.state.tipoIteraccion, this.state.idClasificadorCliente)
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.datos !== null) {
      this.setState({
        datos: nextProps.datos,
        valor: '',
        valorPadre: '',
        valorMostrado: 'Seleccionar...',
        idClasificadorCliente: null,
        tipoIteraccion: null
      })
      if (nextProps.valor !== null && nextProps.valorPadre !== null &&
        nextProps.valor !== undefined && nextProps.valorPadre !== undefined) {
        this.obtenerSeleccionado(nextProps.valor, nextProps.valorPadre, nextProps.datos, nextProps.tipoIteraccion, nextProps.idClasificadorCliente)
      } 
    } else {
      this.setState({ datos: {}, valor: '', valorPadre: '', valorMostrado: 'Seleccionar...' })
    }
    if (nextProps.id !== null) {
      this.setState({ id: nextProps.id })
    }
    if (nextProps.etiqueta !== null) {
      this.setState({ etiqueta: nextProps.etiqueta })
    }
    if (nextProps.visible !== null) {
      if (nextProps.visible) {
        this.setState({ visible: true })
      } else {
        this.setState({ visible: false })
      }
    }
    if (nextProps.habilitado !== null) {
      if (nextProps.habilitado) {
        this.setState({ habilitado: true })
      } else {
        this.setState({ habilitado: false })
      }
    }

    if (nextProps.visibleCategoria !== null) {
      if (nextProps.visibleCategoria) {
        this.setState({ visibleCategoria: true })
      } else {
        this.setState({ visibleCategoria: false })
      }
    }
    if (nextProps.visibleItem !== null) {
      if (nextProps.visibleItem) {
        this.setState({ visibleItem: true })
      } else {
        this.setState({ visibleItem: false })
      }
    }
    if (nextProps.placeholderCategoria !== null) {
      this.setState({ placeholderCategoria: nextProps.placeholderCategoria })
    }
    if (nextProps.placeholderItems !== null) {
      this.setState({ placeholderItems: nextProps.placeholderItems })
    }
    if (nextProps.filtroCategoria !== null) {
      this.setState({ filtroCategoria: nextProps.filtroCategoria })
    }
    if (nextProps.filtroItem !== null) {
      this.setState({ filtroItem: nextProps.filtroItem })
    }
    if (nextProps.desplegable !== null) {
      if (nextProps.desplegable) {
        this.setState({ desplegable: true })
      } else {
        this.setState({ desplegable: false })
      }
    }
    if (nextProps.obtenerValor !== undefined && nextProps.obtenerValor !== null) {
      this.setState({ obtenerValor: nextProps.obtenerValor })
    }

    if (nextProps.estiloCampo !== null) {
      this.setState({ estiloCampo: nextProps.estiloCampo })
    }
    if (nextProps.tipoIteraccion !== null) {
      this.setState({ tipoIteraccion: nextProps.tipoIteraccion })
    }
    if (nextProps.idClasificadorCliente !== null) {
      this.setState({ idClasificadorCliente: nextProps.idClasificadorCliente })
    }
  }
  /**
   * Funcion que valida los datos del array del padre como el valor, desc.
   */
  validar (valorMostrar, desc, valor, valorPadre, tipoIteraccion, idClasificadorCliente) {
    console.log('validar CampoListaFiltrado', valorMostrar, desc, valor,
      valorPadre, tipoIteraccion, idClasificadorCliente)
    if (valorMostrar !== 'Seleccione...') {
      this.setState({
        id: valorMostrar,
        valor: valor,
        valorMostrado: desc,
        error: false,
        valorPadre: valorPadre,
        tipoIteraccion: tipoIteraccion,
        idClasificadorCliente: idClasificadorCliente
      })
    }
  }

  /**
   * Metodo que recibe el valor enviado desde el padre para mostrarlo en la pantalla.
   */
  obtenerSeleccionado (pValor, pValorPadre, pDatos, ptipoIteraccion = null,
    pidClasificadorCliente = null) {
    console.log('obtenerSeleccionado', pValor, pValorPadre)
    pValor = (pValor !== null) ? this.ConvertirCadena(pValor) : pValor
    let datos = pDatos // this.state.datos
    let sw = true
    for (let i in datos) {
      if (pValor === this.ConvertirCadena(datos[i].idItem)) {
        sw = false
        this.setState({
          valor: pValor,
          valorMostrado: datos[i].desc,
          valorPadre: pValorPadre,
          tipoIteraccion: (ptipoIteraccion !== null)
            ? ptipoIteraccion : datos[i].tipoIteraccion,
          idClasificadorCliente: (pidClasificadorCliente !== null)
            ? pidClasificadorCliente : datos[i].idClasificadorCliente,
          error: false
        })
        break
      }
    }
  }

  /**
   * Se encarga de devolver la cadena vacia o con toString()
   */
  ConvertirCadena (pValor) {
    if (pValor !== undefined && pValor !== null) {
      return pValor.toString()
    } else {
      return pValor
    }
  }

  /**
   * Funcion encargada de recibir los datos del input Categoria.
   */
  filtrarCategoria (valor) {
    console.log('filtrarCategoria CampoListaFiltrado')
    this.setState({
      filtroCategoria: valor.target.value
    })
  }

  /**
   * Funcion encargada de validar los datos del input item.
   */
  filtrarItem (valor) {
    console.log('ValorItem CampoListaFiltrado')
    this.setState({
      filtroItem: valor.target.value
    })
  }

  /**
   * Funcion que se activa para enviar a los contenedor categoria.
   */
  obtenerDatoItem (valorMostrar, desc, valor, valorPadre, tipoIteraccion, idClasificadorCliente) {
    console.log('obtenerDatoItem CLASES', valorMostrar, desc, valor, valorPadre,
      tipoIteraccion, idClasificadorCliente)
    this.setState({
      desplegable: !this.state.desplegable,
      valorSeleccionado: this.state.valorSeleccionado
    })
    this.validar(valorMostrar, desc, valor, valorPadre, tipoIteraccion, idClasificadorCliente)
    this.refs.Search.clear()
    if (this.state.obtenerValor !== undefined && this.state.obtenerValor !== null) {
      setTimeout(function () {
        this.state.obtenerValor(valor, desc, tipoIteraccion, idClasificadorCliente)
      }.bind(this), 100)
    }
  }

  /**
   * Funcion que se activa cuando se envia un valor del padre.
   */
  obtenerValorSeleccionado (datos, valor) {
    if (this.state.datos.length > 0) {
      datos.forEach((item) => {
        if (valor === item.valor) {
          this.setState({
            valorSeleccionado: item.idItem,
            valorMostrado: item.desc,
            tipoIteraccion: item.tipoIteraccion,
            idClasificadorCliente: item.idClasificadorCliente,
            error: false
          })
        }
      })
    }
  }

  /**
   * Funcion que se activa al momento de hacer el click.
   */
  handleOnClick (e) {
    console.log('handleOnClick CampoListaFiltrado', this)
    e.preventDefault()
    if (this.state.habilitado) {
      this.refs.Search.clear()
      this.setState({
        filtroCategoria: '',
        filtroItem: '',
        desplegable: !this.state.desplegable
      })
    }
  }



  render () {
    console.log('render CampoListaFiltrado', this.state)
    let mensajeEstado = 'mensajeEstado ' + (this.state.error ? 'error' : 'success')
    return (
      <div className='containerGeneral' hidden={!this.state.visible}>
        <div className={'listaFiltradoCabecera'}
          onClick={this.handleOnClick} >
          <div className='listaFiltradoEtiqueta' >
            {this.state.etiqueta}
          </div>
          <div className={'listaFiltradoValor'} >
            {this.state.valorMostrado}
          </div>
          <i className='fa fa-chevron-circle-down fa-lg' aria-hidden='true' > {'component combobox CLASES'} </i>
        </div>
        <div className={this.state.desplegable ? 'listaFiltradoContainerCategoria listaFiltradoDesplegable'
          : 'listaFiltradoContainerCategoria listaFiltradoNoDesplegable'} >
          <div >
            <Search
              ref='Search'
              onChangeCategoria={this.filtrarCategoria}
              onChangeItem={this.filtrarItem}
              placeholderCategoria={this.state.placeholderCategoria}
              placeholderItems={this.state.placeholderItems}
              valor={this.state.valorSeleccionado}
              visibleCategoria={this.state.visibleCategoria}
              visibleItem={this.state.visibleItem}
            />
          </div>
          <div>
            <ContendorCategoria
              categoria={this.state.datos}
              filtroCategoria={this.state.filtroCategoria}
              filtroItem={this.state.filtroItem}
              onClickItem={this.obtenerDatoItem}
              estiloCampo={this.state.estiloCampo}
            />
          </div>
        </div>
      </div>
    )
  }
}
export default ComboBox