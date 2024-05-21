import classes from "./Profile.module.scss";

export default function Profile() {
  const user = {
    firstName: "Даша",
    lastName: "Мельникова",
    imageUrl: "./src/components/Profile/ProfileImg/userPic.jpg",
    active: true,
  };
  if (!user.active) {
    return null;
  }
  return (
    <>
      <div className={classes.profile}>
        <img className={classes.userPic} src={user.imageUrl} alt="" />
        <p className={classes.userName}>
          {user.firstName} {user.lastName[0]}
        </p>
      </div>
    </>
  );
}
