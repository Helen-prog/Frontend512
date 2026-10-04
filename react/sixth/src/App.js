import { useState, useEffect } from 'react';
import Users from './components/users/Users';
import Success from './components/success/Success';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [invites, setInvites] = useState([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch('https://www.myjsons.com/v/0f284975')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data);
      })
      .catch(err => {
        console.warn(err);
        alert('Ошибка при получении пользователя');
      })
  }, []);

  const onChangeValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickInvite = (id) => {  // invites = [4]
    if(invites.includes(id)){
      setInvites(prev => prev.filter(ch => ch != id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }
  
  const onClickSendInvites = () => {
    setSuccess(true);
  }
  

  return (
    <div className="main">
      {
        success ? <Success count={invites.length} /> : <Users items={users} searchValue={searchValue} onChangeValue={onChangeValue} invites={invites} onClickInvite={onClickInvite} onClickSendInvites={onClickSendInvites} />
      }
      
    </div>
  );
}

export default App;

// import { useState, useEffect, use } from 'react';
// import Users from './components/users/Users';
// import './App.css';
 
// function App() {
 
//   const [users, setUsers] = useState([]);
//   const [searchValue, setSearchValue] = useState("");
//   const [invites, setInvites] = useState([]);
 
//   useEffect(() => {
//     fetch("https://www.myjsons.com/v/0f284975")
//       .then(res => res.json())
//       .then(json => {
//         setUsers(json.data);
//       })
//       .catch(err => { //поиск ошибок
//         console.warn(err);
//         alert("Ошибка при получении данных пользователя")
 
//       })
//   }, [])
 
//   console.log(searchValue);
//   const onChangeValue = (event) => {
//     setSearchValue(event.target.value);
//   }
 
//   const onClickInvite = (id) => {
//     // if (invites.includes(id)) {
//     //   setInvites(prev => prev.filter(ch => ch != id))
//     // } else {
//     //   setInvites(prev => [...prev, id])
//     // }
//      if(invites.includes(id)){
//       searchValue(prev => prev.filter(ch => ch != id));
//     } else {
//       setInvites(prev => [...prev, id]);
//     }
//   }
//   console.log(invites);
 
 
//   return (
//     <div className="main">
//       <Users items={users} searchValue={searchValue} onChangeValue={onChangeValue} invites={invites} onClickInvite={onClickInvite} />
//     </div>
//   );
// }
 
// export default App;
 