

import Leftbar from './componentes/leftBar';
import Musica from './componentes/musicas'
import Rodape from './componentes/rodape'
export default function inicio() {
  return (
    <header className='h-screen flex flex-col gap-5  pt-2'>
      
      <main className='flex flex-row'>
      <Leftbar/>
<Musica/>

   </main>
   <Rodape/>


    </header>

  )
}