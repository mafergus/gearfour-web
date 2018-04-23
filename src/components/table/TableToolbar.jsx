import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Tooltip from 'material-ui/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import MessageIcon from '@material-ui/icons/Message';
import { withStyles } from 'material-ui/styles';
import { lighten } from 'material-ui/styles/colorManipulator';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  withMobileDialog,
} from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

import SimpleSnackbar from 'components/ui/SimpleSnackbar';

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

class TableToolbar extends React.Component {

  static propTypes = {
    classes: PropTypes.object.isRequired,
    fullScreen: PropTypes.bool.isRequired,
    numSelected: PropTypes.number.isRequired,
  };

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  updateMessage = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  renderDialog() {
    const { fullScreen } = this.props;

    return <Dialog
        fullScreen={fullScreen}
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
      <DialogTitle id="responsive-dialog-title">{"Send Message"}</DialogTitle>
      <DialogContent>
        <TextField
          style={{ width: 250 }}
          placeholder="Message"
          label="Message"
          onChange={this.updateMessage}
          value={this.state.message}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={this.handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={this.handleClose} color="primary" autoFocus>
          Send
        </Button>
      </DialogActions>
    </Dialog>;
  }

  render() {
    const { numSelected, classes } = this.props;

    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: numSelected > 0,
        })}
      >
        <SimpleSnackbar text="Message Sent" />
        {this.renderDialog()}
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subheading">
              {numSelected} selected
            </Typography>
          ) : (
            <Typography variant="title">Customers</Typography>
          )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <div style={{ display: "flex" }}>
              <Tooltip title="Send Message">
                <IconButton aria-label="Message" onClick={this.handleClickOpen}>
                  <MessageIcon style={{ marginTop: 2 }} />
                </IconButton>
              </Tooltip>
              <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterListIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    );
  }
};

export default withStyles(toolbarStyles)(TableToolbar);
