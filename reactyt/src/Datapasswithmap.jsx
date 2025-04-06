import React from 'react'
import Card from '../components/Card'

const App = () => {
  const users=[
    {
      "name": "Alice Johnson",
      "city": "New York",
      "age": 28,
      "profession": "Software Engineer",
      "profile_photo": "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      "name": "Michael Smith",
      "city": "Los Angeles",
      "age": 35,
      "profession": "Graphic Designer",
      "profile_photo": "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      "name": "Sophie Martinez",
      "city": "Chicago",
      "age": 24,
      "profession": "Marketing Specialist",
      "profile_photo": "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
      "name": "David Brown",
      "city": "Houston",
      "age": 40,
      "profession": "Teacher",
      "profile_photo": "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
      "name": "Emma Wilson",
      "city": "San Francisco",
      "age": 31,
      "profession": "Data Scientist",
      "profile_photo": "https://randomuser.me/api/portraits/women/5.jpg"
    }
  ]

  // users.forEach(function(elem){
  //   console.log(elem)
  // })
  
  return (
    <div>
      <div className='p-10'>
        {users.map(function(elem,idx){
          return <Card key={idx} user={elem.name} city={elem.city} age={elem.age} profile={elem.profile_photo} prof={elem.profession}/>
        })}
      </div>
    </div>
  )
}

export default App