// import React from 'react'
// import ReactDOM from 'react-dom/client'
import MyButton from "./components/MyButton/MyButton.tsx";
import Profile from "./components/Profile/Profile.tsx";

function App() {
  const isLoggedIn = true;

  // условные операторы
  // 1.
  // let content;
  // if (isLiggedIn)
  // {content = <Profile/>}
  // else
  // {content = <div> Авторизуйтесь</div>}
  // 2.
  // {isLoggedIn ? <Profile /> : <div> Авторизуйтесь</div>}
  // 3.
  // {isLoggedIn && <Profile/>}

  return (
    <>
      <h1>Hello World </h1>
      <p>Добавляем кнопку:</p>
      <MyButton />
      <p>Добавляем данные пользователя: </p>

      {isLoggedIn && <Profile />}
    </>
  );
}

export default App;
