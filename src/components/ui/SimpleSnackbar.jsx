import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class SimpleSnackbar extends React.Component {
  
  static propTypes = {
    classes: PropTypes.object,
    handleClose: PropTypes.func.isRequired,
    open: PropTypes.bool,
    text: PropTypes.string.isRequired,
  };

  static defaultProps = {
    classes: {},
    open: false,
  };

  handleClick = () => {
    this.setState({ open: true });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes, open, handleClose, text } = this.props;

    return (
      <div>
        {/*<Button onClick={this.handleClick}>Open simple snackbar</Button>*/}
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{text}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
      </div>
    );
  }
}

export default withStyles(styles)(SimpleSnackbar);