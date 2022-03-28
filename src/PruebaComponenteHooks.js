import React, { useState, useEffect } from 'react'
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
  
  return (
    <div>
      <ComboBox 
        etiqueta={'CLASES'}
        placeholderItems={'buscar....'}
        visible={true}
        datos={lista}
        valor={1}
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
