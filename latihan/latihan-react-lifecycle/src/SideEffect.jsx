import React, { useEffect, useState } from 'react' //hook

export default function SideEffect () {
    const [toko, setToko] = useState('')
    const [kemeja, setKemeja] = useState('')
    const [rangkuman, setRangkuman] = useState('')


    useEffect(() => {
        console.log('efek samping setiap update')

        return () => {
            console.group('sebelum efek samping selanjutnya jalan')
        }
    })

    useEffect(() => {
        console.log('efek samping untuk render pertama kali')

        const dataFromDb = {
            toko: 'Shopee',
            kemeja: 'Woodcutter'
        }

        setToko(dataFromDb.toko)
        setKemeja(dataFromDb.kemeja)

        return () => {
            console.group('sebelum component hilag')

            setToko('')
            setKemeja('')
        }
    }, [])

    useEffect(() => {
        console.log('efek samping ketika toko berubah')

        setRangkuman(`Saya punya kemeja ${kemeja}, dari ${toko}`)
        return () => {
            console.group('sebelum toko hilang')
        }
    }, [toko])

    return <>
        <h1>Aku Side Effect</h1>
        <button onClick={() => setToko('Tokopedia')}>
            {toko}
        </button>
        <button onClick={() => setToko('Uniqlo')}>
            {kemeja}
        </button>
        <p>{rangkuman}</p>
    </>
}