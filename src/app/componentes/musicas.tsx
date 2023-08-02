import {ArrowLeftCircle, ArrowRightCircle,Check, PlayCircle, Heart} from 'lucide-react'
import '../kevin.css'
import { useState } from 'react'
import { document } from 'postcss'

function Musica(){

    return(

        <section className=' pl-3 flex flex-col w-[78.5%] h-full  pr-2 '>
        <div className='kevin flex flex-col p-2 rounded-t-lg h-96'>

          <ol className='inline-flex'>
            <ArrowLeftCircle className='ml-4 mr-2 bg-gray-700/60 rounded-full' />
            <ArrowRightCircle className=' bg-gray-700/60 rounded-full' />
          </ol>
          <p className='gap-2 inline-flex mt-48 pl-3'><Check color='white' className='bg-blue-500 rounded-full' /> Artista Verificado </p>

          <h1 className='text-7xl pl-3'>Kvyn MC</h1>


        </div>

        <div className=' bg-gradient-to-b from-zinc-700/80  from-2% to-zinc-800/50 to-20% rounded-b-lg h-[31.1rem] '>
          
          <section className='pt-10 pl-6 flex flex-col'>
            <button>
              <PlayCircle size={40} color="black" className='ml-1 bg-green-500 rounded-full h-10 w-10 hover:h-[41.3px] hover:w-[41.3px]' />

            </button>
            <b className=' pt-6 text-[23px]'>Populares</b>
            <div className=' flex flex-col'>
              <section className='pl-4 flex flex-row justify-between w-5/6 mr-2 p-3 gap-4 hover:bg-zinc-800/70 rounded-md'>
                <ol className='flex flex-row gap-4 '><li className='mt-2'>1</li> <img src="musica.jpg" className='w-10 h-10' /> <li className='pt-1'> Quando Ela Desce </li></ol>

                <li className='mt-2 flex flex-row gap-5 mr-10'>     <p className='' > <Heart color='green' /> </p>2:57 </li>

              </section>
              <section className='pl-4 flex flex-row justify-between w-5/6 mr-2 p-3 gap-4 hover:bg-zinc-800/70 rounded-md'>
                <ol className='flex flex-row gap-4 '><li className='mt-2'>2</li> <img src="queDeus.jpg" className='w-10 h-10' /> <li className='pt-1'> Que Deus Me Proteja </li></ol>

                <li className='mt-2 flex flex-row gap-5 mr-10'>     <p className='' > <Heart color='green' /> </p>2:57 </li>
              </section>

              <section className='pl-4 flex flex-row justify-between w-5/6 mr-2 p-3 gap-4 hover:bg-zinc-800/70 rounded-md'>
                <ol className='flex flex-row gap-4 '><li className='mt-2'>3</li> <img src="lambo.jpg" className='w-10 h-10' /> <li className='pt-1'> Que Deus Me Proteja </li></ol>

                <div className='mt-2 flex flex-row gap-5 mr-10'>     <p className='' > <Heart color='green' /> </p>2:57 </div>
              </section>
            </div>
          </section>
        </div>



      </section>
 


    )

 

  }



export default Musica