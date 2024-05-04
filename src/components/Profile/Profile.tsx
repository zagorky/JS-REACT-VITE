export default function Profile() {
    const user = {
            firstName : "Даша",
            lastName : "Мельникова",
            imageUrl : "./src/components/Profile/ProfileImg/userPic.jpg",
        }
return (
    <>
    <div>
        <p>Ваше имя : {user.firstName}</p>
        <p>Ваша фамилия : {user.lastName}</p>
        <p>Ваш аватар : 
        <img 
        className="userPic" 
        src={user.imageUrl} 
        alt="" 
        width="200px"
        height="100px"
        />
        </p>
        <p>Добавляем вывод имени и первой буквы фамилии : 
            {user.firstName} {user.lastName[0]}
        </p>

    </div>
    </>
);
}