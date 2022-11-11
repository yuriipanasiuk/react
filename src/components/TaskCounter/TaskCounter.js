import css from './TaskCounter.module.css';
import { useSelector } from 'react-redux';
import { getTasks } from 'redux/selectors';

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const caunt = tasks.reduce(
    (acc, task) => {
      if (task.completed) {
        acc.completed += 1;
      } else {
        acc.active += 1;
      }
      return acc;
    },
    { active: 0, completed: 0 }
  );

  return (
    <div>
      <p className={css.text}>Active: {caunt.active}</p>
      <p className={css.text}>Completed: {caunt.completed}</p>
    </div>
  );
};
