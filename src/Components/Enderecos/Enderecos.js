import React, { useEffect, useMemo, useState } from "react";

export const Enderecos = () => {

    const [estado, setEstado] = useState('')
    const [estados, setEstados] = useState([])
    const [cidade, setCidade] = useState('')
    const [cidades, setCidades] = useState([])
    const [loading, setLoading] = useState(true)
    const [loadingCidades, setLoadingCidades] = useState(true)

    const handleChange = ({ target: { value } }) => {
        setEstado(value)
    }

    const label = useMemo(() => loading ? 'Aguarde...' : 'Selecione', [loading])

    useEffect(() => {
        const loadEstados = async () => {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
            const data = await response.json()
            console.log(data)
            setEstados(data)
        }
        loadEstados()
        setLoading(false)


        // if (loading) return <p>Aguarde...</p>

    }, [])

    useEffect(() => {
        setLoadingCidades(true)
        const loadCidades = async () => {
            const response = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/municipios`)
            const data = await response.json()
            console.log(data)
            setCidades(data)
        }
        loadCidades()
        setLoadingCidades(false)

    }, [estado])

    return (
        <>
            <div>
                <span>Estados:</span>
                <select disabled={loading} value={estado} onChange={handleChange}>
                    <option value="">{label}</option>
                    {estados.map(({ id, sigla, nome }) => <option key={id} value={sigla}>{nome}</option>)}
                </select>
            </div>

            <div>
                <span>Cidades:</span>
                <select disabled={loading} value={cidade} onChange={handleChange}>
                    <option value="">{label}</option>
                    {cidades.map(({ id, sigla, nome }) => <option key={id} value={sigla}>{nome}</option>)}
                </select>
            </div>
        </>
    )
}

