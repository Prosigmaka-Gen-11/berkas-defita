import React from "react";
import Button from "./Button";

export default function DataDiri(props) {
    const [name, setName] = React.useState ('Defita')
    const [prodi, setProdi] = React.useState ('Matematika')
    const [warna, setWarna] = React.useState ('biru')

    return (
        <>
        <h1 className="text-center font-bold mt-4">
            Halo, nama Saya {name}. Saya berasal dari prodi {prodi} dan memiliki warna favorit {warna}
        </h1>
        <Button
            title="Ubah Data"
            tekanKlik={() => {
                setName("Rani");
                setProdi("Fisika");
                setWarna("Hijau");
            }}
        />
        </>
    );
}

