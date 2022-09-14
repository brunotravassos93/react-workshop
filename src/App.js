import dados from './dados/dadosFake'

function App() {
  consta [dadosFake, setDadosFake] = useState();

  return (
    <main>
      <section className="container">
        <h1>monstros</h1>
        
        <article className="monstros">
          <img src="https://robohash.org/1?set=set2" alt="monstro" />
          <div>
            <h2>nome</h2>
            <p>email</p>
          </div>
        </article>

        <button className="btn-azul" type="button">
          limpar monstros
        </button>
      </section>
    </main>
  );
}

export default App;