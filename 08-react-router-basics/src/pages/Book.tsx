import { useParams } from 'react-router-dom';

export const Book = () => {
  const { id } = useParams();

  return <h2>{`Book Information for id '${id}'`}</h2>;
};
