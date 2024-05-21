import MyButton from "./components/MyButton/MyButton.tsx";
import Product from "./components/Product/Product.tsx";
import Profile from "./components/Profile/Profile.tsx";
import ProductList from "./components/ProductList/ProductList.tsx";

function App() {
  return (
    <>
      <h1> Пары по REACT</h1>
      <h2>Урок 1</h2>
      <p>Добавляем кнопку:</p>
      <MyButton />
      <p>Добавляем данные пользователя: </p>
      <Profile />
      <h2>Урок 2</h2>
      <code>
        Условные операторы
        <ul>
          <li>
            {" "}
            1. let content;
            <br />
            if (isLiggedIn)
            <br />
            /content = Profile ; <br />
            else
            <br />
            /content = <div> Авторизуйтесь</div> / return ( content )
          </li>

          <li>
            2. /isLoggedIn ? Profile : <div> Авторизуйтесь </div>/
          </li>
          <li>3. /isLoggedIn && Profile /</li>
        </ul>
      </code>

      <Product />

      <ProductList />
    </>
  );
}

export default App;
