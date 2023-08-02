import {ArrowLeftRight, StepBack,PlaySquare, Mic2, ListOrdered, MonitorSpeaker, VolumeX, RotateCcw, StepForward, PlayCircle} from 'lucide-react';


function Rodape() {

return(
    <footer className='flex flex-row justify-between '>

    <section className=' flex flex-row ml-3 '>
      <img src="musica.jpg" className='w-12 h-12 rounded-md ' />
      <span className='pt-1 pl-2 flex flex-col'>Quando ela desce
        <span className='text-white/40'>Kvyn Mc</span>
      </span>


    </section>

    <aside className='flex flex-row gap-4 '> <ArrowLeftRight className='text-white/40 hover:cursor-pointer hover:text-white/80' size={30} /> <StepBack size={30} className=' text-white/40 hover:text-white/80 hover:cursor-pointer' />  <PlayCircle size={30} className='hover:cursor-pointer' />  <StepForward size={30} className='text-white/40 hover:text-white/80 hover:cursor-pointer' /> <RotateCcw size={24} className='mt-1 text-white/40 hover:text-white/80 hover:cursor-pointer' />  </aside>



    <section className='flex flex-row gap-2 pt-2 mr-3'> <PlaySquare  size={18} className='text-white/40 hover:cursor-pointer hover:text-white/80' />
      <Mic2 size={18} className='text-white/40 hover:cursor-pointer hover:text-white/80' />
      <ListOrdered size={18} className='text-white/40 hover:cursor-pointer hover:text-white/80' />
      <MonitorSpeaker size={18} className='text-white/40 hover:cursor-pointer hover:text-white/80' />
      <VolumeX size={18} className='text-white/40 hover:cursor-pointer hover:text-white/80' />


    </section>

  </footer>
)


}
export default Rodape;