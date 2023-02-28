import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import TicketFilter from '../TicketFilter';
import Head from '../Head';
import CardList from '../CardList';
import Logo from '../../img/Logo.svg';
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
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
