import { Oval } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBox>
      <Oval
        height={80}
        width={80}
        color="#5ac8fa"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#ededed"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </LoaderBox>
  );
};
