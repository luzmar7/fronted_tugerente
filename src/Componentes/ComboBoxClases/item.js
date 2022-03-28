/**
 * Created by Mariluz Vargas on 25/03/2022.
 * Subcomponente que se encarga de recibir el valor y devolver el valor soliitado al Padre.
 */
 import React, { Component } from 'react'
 import PropTypes from 'prop-types'
 
 class Item extends Component {
   /**
    * valor: Valor que recibe del array enviado desde el Padre.
    * desc: Desc recibe del array enviado desde el padre.
    * onClickItem: Valor que devuelve al padre luego del click.
    */
   static propTypes = {
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
 
   constructor (props) {
     super(props)
     this.state = {
       valorMostrar : this.props.valorMostrar,
       desc: this.props.desc,
       tipoIteraccion: this.props.tipoIteraccion,
       idClasificadorCliente: this.props.idClasificadorCliente,
       valor: this.props.valor,
       onClickItem: this.props.onClickItem,
       valorPadre: this.props.valorPadre
     }
   }
 
   static defaultProps = {
     valorMostrar : '',
     desc: '',
     tipoIteraccion: null,
     idClasificadorCliente: null,
     valor: '',
     valorPadre: ''
   }
   componentWillReceiveProps (nextProps) {
     if (nextProps.valorMostrar != null) {
       this.setState({ valorMostrar : nextProps.valorMostrar })
     }
     if (nextProps.desc !== null) {
       this.setState({ desc: nextProps.desc })
     }
     if (nextProps.tipoIteraccion !== null) {
       this.setState({ tipoIteraccion: nextProps.tipoIteraccion })
     }
     if (nextProps.idClasificadorCliente !== null) {
       this.setState({ idClasificadorCliente: nextProps.idClasificadorCliente })
     }
     if (nextProps.valor !== null) {
       this.setState({ valor: nextProps.valor })
     }
     if (nextProps.valorPadre !== null) {
       this.setState({ valorPadre: nextProps.valorPadre })
     }
     if (nextProps.onClickItem !== undefined && nextProps.onClickItem !== null) {
       this.setState({ onClickItem: nextProps.onClickItem })
     }
   }
   render () {
     return (
       <div>
         <div value={this.state.valorMostrar}
           onClick={() => this.state.onClickItem(
             this.state.valorMostrar,
             this.state.desc,
             this.state.valor,
             this.state.valorPadre,
             this.state.tipoIteraccion,
             this.state.idClasificadorCliente
           )}
           style={{ cursor:'pointer' }}>
           {this.state.desc}
         </div>
       </div>
     )
   }
 }
 export default Item