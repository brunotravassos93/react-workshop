import { Fragment } from "react";

const ListaMonstros = (props) => {

   const dados = props.dados

   return (
      <Fragment>
      {
         dados.map(object => {
         return (
           <article key={object.id} className="monstros">
             <img src={`https://robohash.org/${object.id}?set=set2`} alt="monstro" />
             <div>
               <h2>{object.name}</h2>
               <p>{object.email}</p>
             </div>
           </article>
         )
       })
      }
      </Fragment>
   );
};

export default ListaMonstros;