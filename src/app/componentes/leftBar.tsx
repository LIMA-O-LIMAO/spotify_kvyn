import { Home, Search, Library, Sidebar } from 'lucide-react';
function Leftbar() {

  return (

    <nav className=' ml-2  h-full flex flex-col w-[410px] gap-3   '>
      <section className="h-24 flex flex-col bg-zinc-800/50 w-full rounded-md p-4   ">


        <div className='flex 1 flex-col gap-5 pl-2 ' >

          <a className='inline-flex gap-6'><Home /> Inicio </a>
          <a className='inline-flex gap-6'><Search />Buscar</a>

        </div>



      </section>


      <section className='h-full flex flex-col space-y-6 bg-zinc-800/50 w-full rounded-md pl-6 pt-4   '>


        <a className='inline-flex gap-2 p-2 hover:bg-zinc-800/70 rounded-md  hover:cursor-pointer'> <Library />Biblioteca</a>
        <li className='inline-flex gap-3 mr-2 p-2 hover:bg-zinc-800/70 rounded-md  hover:cursor-pointer  '>
          <img src="branco.jpeg" className=' w-12 h-12 rounded-md' /> <a className=' pt-2   '>Trap
          </a>
        </li>
        <li className='inline-flex gap-3 mr-2 p-2 hover:bg-zinc-800/70 rounded-md  hover:cursor-pointer  '>
          <img src="Funk.jpg " className='h-12 w-12 rounded-md' />   <a className='pt-2'>Funk </a>
        </li>
        <li className='inline-flex gap-3 mr-2 p-2 hover:bg-zinc-800/70 rounded-md  hover:cursor-pointer  '>
          <img src="igor.jpg" className='h-12 w-12 rounded-full' /> <a className='pt-2 flex flex-col'>Ricardo Alabama<p className='text-gray-500/60'>Artista </p>      </a>
        </li>
        <li className='inline-flex gap-3 mr-2 p-2 hover:bg-zinc-800/70 rounded-md  hover:cursor-pointer  '>
          <img src="tridi.jpeg" className='h-12 w-12 rounded-full' /> <a className='pt-2 flex flex-col'>Astridi<p className='text-gray-500/60'>Artista </p>      </a>
        </li>
      </section>


    </nav>
  )

}


export default Leftbar;