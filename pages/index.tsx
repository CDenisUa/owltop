import axios from 'axios';
import { GetStaticProps } from 'next';
import { Button, Htag, Ptag, Rating, Tag } from '../components';
import { MenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';
import { Menu } from '../layout/Menu/Menu';


function Home({menu, firstCategory}:HomeProps): JSX.Element {
  return (
    <>
      <Htag tag='h1'>Text</Htag>
      <Button appearance='ghost'>Ghost button</Button>
      <Button appearance='ghost' arrow='right'>Ghost button</Button>
      <Button appearance='primary'>Primary button</Button>
      <Button appearance='primary' arrow='down'>Primary button</Button>
      <Ptag fontSize='small'>Small tag</Ptag>
      <Ptag fontSize='medium'>Small medium</Ptag>
      <Ptag fontSize='large'>Small large</Ptag>
      <Ptag>Small default</Ptag>
      <Tag href='https://google.com' size='small' color='ghost' >Just tag</Tag>
      <Tag href='https://google.com' size='medium' color='red' >Just tag</Tag>
      <Tag href='https://google.com' size='small' color='gray' >Just tag</Tag>
      <Tag href='https://google.com' size='medium' color='green' >Just tag</Tag>
      <Tag href='https://google.com' size='small' color='primary' >Just tag</Tag>
      <Rating rating={4} isEditable={true} />

    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number,
}