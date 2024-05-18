import classes from "./Profile.module.scss";

export default function Profile() {
  const user = {
    firstName: "Даша",
    lastName: "Мельникова",
    imageUrl: "./src/components/Profile/ProfileImg/userPic.jpg",
  };
  return (
    <>
      <div className={classes.profile}>
        <p className={classes.userName}>Ваше имя : {user.firstName}</p>
        <p className={classes.userName}>Ваша фамилия : {user.lastName}</p>
        <p>
          Ваш аватар :
          <img
            className={classes.userPic}
            src={user.imageUrl}
            alt=""
            width="200px"
            height="100px"
          />
        </p>
        <p>
          Добавляем вывод имени и первой буквы фамилии :{user.firstName}{" "}
          {user.lastName[0]}
        </p>
      </div>
    </>
  );
}
