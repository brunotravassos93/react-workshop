import { useEffect, useState } from 'react'

function App() {
  const [dados, setDados] = useState([])

  const apagarDados = () => {
    setDados([])
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((dadosAPI) => setDados(dadosAPI.slice(0, 5)));
  }, [])


  return (
    <main>
      <section className="container">
        <h1>{dados.length} monstros</h1>

        {dados.map(object => {
          return (
            <article key={object.id} className="monstros">
              <img src={`https://robohash.org/${object.id}?set=set2`} alt="monstro" />
              <div>
                <h2>{object.name}</h2>
                <p>{object.email}</p>
              </div>
            </article>
          )
        })}

        <button className="btn-azul" type="button" onClick={apagarDados}>
          limpar monstros
        </button>
      </section>
    </main>
  )
}

export default App
