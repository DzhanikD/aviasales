import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import TicketFilter from '../TicketFilter';
import Head from '../Head';
import CardList from '../CardList';
import ButtonShowMore from '../ButtonShowMore';
import Logo from '../../img/Logo.png';
import ticketLoad from '../../actions/asyncActions';

import classes from './App.module.scss';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ticketLoad());
  }, [dispatch]);

  return (
    <div className={classes.app}>
      <div className={classes.wrapper}>
        <header className={classes.logo}>
          <img src={Logo} alt="AviaSales" />
        </header>
        <main className={classes.main}>
          <TicketFilter />
          <div className={classes['main-content']}>
            <Head />
            <CardList />
            <ButtonShowMore />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
