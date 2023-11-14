function PetInfo({ anymal, name, hasPet }) {
  return hasPet ? (
    <h1>
      My {anymal} is called: {name}
    </h1>
  ) : (
    <h2>I don't have a pet</h2>
  )
}

export default PetInfo
