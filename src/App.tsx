// import React from 'react'
// import ReactDOM from 'react-dom/client'
import MyButton from "./components/MyButton/MyButton.tsx";
import Profile from "./components/Profile/Profile.tsx"


function App() {

  return (
    <>
    <h1>Hello World </h1>
    <p>Добавляем кнопку:</p>
    <MyButton />
    <p>Добавляем данные пользователя: </p>
    <Profile />
    </>
  )
}

export default App
