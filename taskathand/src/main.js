import { useContext } from 'react';
import Header from './components/nav/nav';
// import Footer from './components/Footer.js';
import Form from './components/form'
import { ThemeContext } from './context/theme.js';

const styles = {
  dark: {
    background: "#111",
    color: 'ivory'
  },
  light: {
    background: '#f5f5f5',
    color: '#525252'
  }
};

function Main(props) {

  const themeSettings = useContext(ThemeContext);

  return (
    <main style={styles[themeSettings]}>
      <Header />
      <Form />
    </main>
  )
}

export default Main;
