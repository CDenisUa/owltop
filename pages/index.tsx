import { Button, Htag, Ptag, Tag } from '../components';

export default function Home(): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
