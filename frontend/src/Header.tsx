import { useQuestionContext } from './context/QuestionContext';

function Header() {
  const { status } = useQuestionContext();
  return (
    <header className='app-header text-center'>
      {/* <img src='logo512.png' alt='React logo' /> */}
      <h1>
        {status === 'idle' ? 'The Ultimate Quiz Challenge' : 'The brain box'}
      </h1>
    </header>
  );
}

export default Header;
