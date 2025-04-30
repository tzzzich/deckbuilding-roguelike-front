import { Outlet } from 'react-router';
import classes from './RootPage.module.css';

export const Root = () => {
  return (
    <div className={classes.root_wrapper}>
      {/* <Header className={classes.header} /> */}
      <div className={classes.content}>
        <Outlet />
      </div>
    </div>
  );
};
