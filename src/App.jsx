import './App.css';

function Container(props) {
  console.log('container');
  // props.children yra yra viskas kas bus tarp <Container> ir </Container>
  return <div className='container'>{props.children}</div>;
}

function SingleCard(props) {
  console.log('card');
  console.log('props ===', props);
  //const props = {title: 'Monday', text: 'Is the first day'}
  return (
    <div>
      <h2>title: {props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default function App() {
  console.log('app');
  return (
    <Container>
      <h1>New topic</h1>
      <p>hello </p>
      <button>Click</button>
      <hr />
      <SingleCard title='Monday' text='Is the first day' isSpecial={true} />
      <SingleCard title='React' text='is not that dificult' count={50} />
    </Container>
  );
}
