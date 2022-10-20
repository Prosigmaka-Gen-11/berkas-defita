import React from "react";
import Button from "./Button";

export default function NamaBuah(props) {
    const [name, setName] = React.useState ('Semangka')

    return (
        <>
        <h1 className="text-center font-bold mt-4">
            Buah {name}
        </h1>
        <Button
            title="Ubah Nama"
            tekanKlik={() => {
                setName("Jeruk");
            }}
        />
        </>
    );
}
