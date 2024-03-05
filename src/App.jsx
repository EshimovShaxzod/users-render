import React from 'react'
import SearchForm from './components/search-form'
import Card from './components/card';
import Header from './components/header';


const App = () => {

  const [results, setResults] = React.useState([]);

  const reload = () => {}
  


  React.useEffect(() => {
    fetch('https://randomuser.me/api/?results=25')
    .then((res) => res.json())
    .then((data) => {
      setResults(data.results)

    })
  }, [])

 

  const todolist = React.useRef()

  const searchUsers =  (evt) => {
    todolist.current.childNodes.forEach((item) => {
      if(item.children[1].outerText.toLowerCase().includes(evt.target.value.toLowerCase())){
         item.classList.remove("hidden")
      }else{
        item.classList.add("hidden")
       }
    })
  }


  

  return (
    <div>
    <div className='w-full max-w-[1240px] mx-auto my-6'>
      <Header />
      <SearchForm data={searchUsers} reload={reload} />
      <div ref={todolist} className='grid grid-cols-3 gap-3'>
       {results.map((data) => (
         <Card key={data.name.first} data={data} />
       ))}
      </div>
    </div>

    </div>
  )
}

export default App


