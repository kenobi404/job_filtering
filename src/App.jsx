import { useEffect, useState, useRef} from 'react'
import './App.css'

import data from '../data.json'
import LabelList from './components/LabelList';
import Card from './components/Card';

function App() {
  
  const [labels,setLabels] = useState([]);

  const ref = useRef(null)

  
  const updatedData = data.map(item => ({
    ...item,
    labels : [item.role,item.level,...item.tools,...item.languages]
  }))

  
  const [companies,setCompanies] = useState(updatedData);


  useEffect(()=>{
    setCompanies(updatedData.filter(item => labels.every(label => item.labels.includes(label))))
  },[labels])


 const addLabel = (label) => {
  
  if(!labels.includes(label)) {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setLabels(prev => [...prev , label])
  }
 }
 const removeLabel = (label) => {
  setLabels(prev => prev.filter(item => item!==label))
 }

 const clearLabels = () => {
  setLabels([])
 }



  return (
   <>
     <header className='h-screen'>
     </header>
     
     <main ref={ref}>
      {labels.length>0 && <LabelList 
       
        removeLabel={removeLabel}
        clearLabels={clearLabels}
        labels={labels}
      />}
      {companies.map(company => <Card key={company.id} 
      addLabel={addLabel}
      {...company}
      />)}
      
     </main>
   </>
  )
}

export default App
