import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Category } from "../components/ecom-ui";
import { getCategories } from "../state/categorySlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { loading, error, records } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const categories = records.map((item) => (
    <Category
      key={item.id}
      {...item}
    />
  ));

  return (
    <div>
      <div className="grid">{categories}</div>
    </div>
  );
};

export default Categories;
