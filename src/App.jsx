import Products from './components/Products';

function App() {

  return (
    <div className="mx-auto p-6 bg-slate-900 text-white">
      <div className='flex flex-col items-center gap-2 my-8'>
      <h1 className='font-bold text-2xl'>Choose Your Skip Size</h1>
      <p className="text-gray-400 mb-6">Select the right skip for your needs. Click on a skip to see more details.</p>
      </div>
      <Products/>
    </div>
  )
}

export default App
