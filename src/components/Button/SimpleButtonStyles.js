import { createStyles } from '@material-ui/core/styles';

const styles = theme =>
  createStyles({
    container: {
      backgroundColor: theme.palette.error.main
    },
    btn: {
      fontFamily: 'SST W20 Medium,Verdana,sans-serif',
      borderRadius: 0,
      padding: '12px 30px',
      minWidth: 120,
      textAlign: 'center',
      color: '#f5f5f5',
      border: '1px solid #f5f5f5',
      transition: 'all .25s ease',
      fontSize: 14,
      marginRight: 16,
      marginBottom: 25,

      '&:hover, focus': {
        color: '#2c3e50',
        backgroundColor: '#f5f5f5',
        border: '1px solid currentcolor'
      }
    }
  });

export default styles;
