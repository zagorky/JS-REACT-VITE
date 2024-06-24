import { MyButton } from "@/components";
import CreateItems from "@/components/CreateItems/CreateItems";
import { useNavigate } from "react-router-dom";

const CreateItemPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <MyButton
        onClick={() => {
          navigate(-1);
        }}
      >
        Назад
      </MyButton>
      <CreateItems />
    </div>
  );
};

export default CreateItemPage;
