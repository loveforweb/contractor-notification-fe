import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  const { pageClass } = props;
  return (
    <>
      <div className={pageClass && `${pageClass}`}>
        <Header page={pageClass && `${pageClass}`} />
        <div className={pageClass && `${pageClass}-main`}>
          <main>{props.children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
