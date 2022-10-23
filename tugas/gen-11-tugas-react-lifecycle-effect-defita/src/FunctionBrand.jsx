import React, { useEffect, useState } from 'react' //hook

export default function FunctionBrand () {
    const [nama, setNama] = useState('')
    const [tahun, setTahun] = useState('')
    const [negara, setNegara] = useState('')
    const [penjelasan, setPenjelasan] = useState('')

    useEffect(() => {
		console.log('efek samping setiap update')

		return () => {
			console.log('sebelum efek samping selanjutnya jalan')
		}
	})

    useEffect(() => {
        console.log('efek samping untuk render pertama')

        const brandDb = {
            nama: 'Marc Jacobs',
            tahun: '1986',
            negara: 'New York'
        }

        setNama(brandDb.nama)
        setTahun(brandDb.tahun)
        setNegara(brandDb.negara)

        return () => {
            console.log('sebelum component hilang')

            setNama('')
            setTahun('')
            setNegara('')
        }
    }, [])

    useEffect(() => {
        console.log('efek samping ketika nama, tahun, negara berubah')
        setPenjelasan(`Brand ${nama} berasal dari Negara ${negara} yang berdiri pada tahun ${tahun}`)
        return () => {
            console.group('sebelum data hilang')
        }
    }, [nama, tahun, negara])

    return <>
    <button onClick={() => setNama('Louis Vitton')}>
        Ubah Nama Brand
    </button>
    <button onClick={() => setTahun(1854)}>
        Ubah Tahun
    </button>
    <button onClick={() => setNegara('Perancis')}>
        Ubah Negara
    </button>
    <p>{penjelasan}</p>
    </>
}