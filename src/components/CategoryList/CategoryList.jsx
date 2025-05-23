import { CategoryContainer } from './CategoryList.styled';
import CategoryItem from 'components/CategoryItem/CategoryItem';
import { Loader } from 'components/Loader/Loader';

export const CategoryList = ({ categories, isLoading, error }) => {
  return (
    <CategoryContainer>
      {isLoading && <Loader />}
      {error && <h3>ERORR</h3>}
      {categories &&
        categories.map(product => {
          return <CategoryItem key={product.id} product={product} />;
        })}
    </CategoryContainer>
  );
};
