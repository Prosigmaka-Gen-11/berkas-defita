import { useState } from "react"

const genderList = [
  {value: 'L', label: 'Laki-laki'},
  {value: 'P', label: 'Perempuan'}
]
export default function FormHandBasic () {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [prodi, setProdi] = useState('')
  const [gender, setGender] = useState('')

  return <>
  <label>
    Nama saya <br />
    <input 
    type="text" 
    value={name}
    onChange={(evt) => setName (evt.target.value)}
    placeholder={"anonymous"} />
  <br />
  {name}
  </label>

  <br /><br /><br />

  <label>
    Umur saya <br />
    <input 
    type="text" 
    value={age}
    onChange={(evt) => setAge (evt.target.value)}
    placeholder={"anonymous"} />
  <br />
  {age}
  </label>

  <br /><br /><br />

  <label>
    Pilih Prodi: {prodi} <br />
    <select value={prodi} onChange={evt => setProdi(evt.target.value)}>
      <option value="" disabled>-pilih prodi-</option>
      <option value="teknik-informatika">Teknik Informatika</option>
      <option value="teknik-elektro">Teknik Elektro</option>
    </select>
  </label>

  <br /><br /><br />

  <p>Gender: {gender}</p>
  {genderList.map(genderItem =>
      <label key={genderItem.value}>
      <input 
      type="radio" 
      name="gender" 
      value={genderItem.value}
      checked={gender === genderItem.value} 
      onChange={evt => setGender(evt.target.value)}/>
    {genderItem.label}
    </label>
  )}
  </>
}