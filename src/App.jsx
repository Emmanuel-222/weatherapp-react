import './App.css'

function App() {


  return (
    <div className='flex-col m-5 border-blue-700 w-full h-full pt-10 px-40 pb-40 bg-blue-950 text-center items-center shadow-2xl shadow-black'>
      <div>
        <h1 className='text-3xl mb-5'>Weather App</h1>
        <input 
        className='p-1.5 w-9/12 mr-2 outline-none rounded-lg'
        type="text" 
        />
        <button
        className='bg-blue-700 rounded-lg p-2 text-white'
        >
          Search
        </button>
      </div>

      <div className='flex-col items-center justify-evenly mt-10 p-5 w-full h-full bg-gray-500 shadow-2xl shadow-black opacity-50 text-white'>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
        <h1>HEllo</h1>
      </div>
    </div>
  )
}

export default App
