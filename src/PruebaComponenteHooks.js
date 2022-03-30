import React, { useState, useEffect } from 'react'
import CampoLabel from './Componentes/CampoLabel/CampoLabel'
import ComboBox from './Componentes/ComboBoxClases/ComboBox'
import ComboBoxH from './Componentes/ComboBoxHooks/ComboBoxH'

const axios = require('axios')


const PruebaComponentesHooks = () => {
  const [lista, setLista] = useState([]);
  
  useEffect (async () => {
    const algo = await getEmpresas()
    setLista(algo)
  },[])


  const getEmpresas = async () => {
    try {
      const { data } = await axios.get(`https://fb-api-tugerente-default-rtdb.firebaseio.com/empresas.json`)
      const respForm = formatearRespuesta(data)
      const pLista = FormatearLista(respForm, {id:'codigo', categoria: 'Empresas', idItem: 'codigo', valor: 'codigo', desc: 'nombre' })
      return pLista
    } catch (error) {
      console.error(error)
      return error 
    }
  }

    /**
   * Metodo para formatear repuestas
   */
     const formatearRespuesta = (respData) => {
      const arrayFormateado = []
      for(let city in respData)
      {
        let obj = {...respData[city]}
        obj.fbCodigo = city
        arrayFormateado.push(obj)
      }
      return arrayFormateado
    }
  
    /**
   * Metodo para Formatear los datos del Clasificador Multas
   */
    const FormatearLista = (pLista = [], pParametros = {}) => {
      const rLista = pLista.map( data => {
        return {
          id: data[pParametros.id],
          categoria: pParametros.categoria,
          idItem: data[pParametros.idItem],
          valor: data[pParametros.valor].toString(),
          desc: data[pParametros.desc].toString(),
        }
      })
      return rLista
    }
    let estilo =  {
      fondo: '#CDCDCD',
      color: '#353535',
      tamanio: 30
    }
    let estilo2 =  {
      fondo: '#CDCDCD',
      color: '#353535',
      tamanio: 25
    }
    let estilo3 =  {
      fondo: '#CDCDCD',
      color: '#353535',
      tamanio: 20
    }
    let estilo4 =  {
      color: '#353535',
      tamanio: 16
    }
  return (

    <div>
      <center>
      <CampoLabel 
        titulo={'PRUEBA FRONTEND - TuGerente'}
        estiloEtiqueta={estilo}
      />
      <CampoLabel 
        titulo={'Mariluz Vargas Hilari'}
        estiloEtiqueta={estilo2}
      />
      <CampoLabel 
        titulo={'luzmar7.luz@gmail.com'}
        estiloEtiqueta={estilo3}
      />
      </center>
      <br />

      <CampoLabel 
        titulo={'Componente realizado en base a CLASES, consulta un servicio de FIREBASE para listar, contiene el POP-UP para ingresar un nuevo registro hacia un servicio de FIREBASE y la busqueda de los elementos.'}
        estiloEtiqueta={estilo4}
      />

      <ComboBox 
        etiqueta={'CLASES'}
        placeholderItems={'buscar....'}
        visible={true}
        datos={lista}
        valor={1}
      />

      <CampoLabel 
        titulo={'Componente realizado en base a HOOKS, consulta un servicio de FIREBASE para listar y la busquedad de los elementos.'}
        estiloEtiqueta={estilo4}
      />
      <ComboBoxH
        etiqueta={'HOOKS'}
        visible={true}
        datos={lista}
        valor={1}
        placeholderItems={'buscar....'}
        valorMostrado={'MacDonals'}
      />
    </div>
  )
}

export default PruebaComponentesHooks
