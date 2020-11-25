import './Box.css';

function Box({ type = 'small', classNames = '', styles }) {
  return (
    <div className={`box box-${type} ${classNames}`} style={styles}>
      Box
    </div>
  );
}

export default Box;
