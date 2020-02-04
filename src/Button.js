import React from 'react';
import { withStyles } from './withStyles';
import { fade } from './styles/colorManipulator';
import clsx from 'clsx';

export const styles = ({
  palette,
  shape,
  typography,
  transitions,
  shadows,
}) => ({
  root: {
    ...typography.button,
    cursor: 'pointer',
    outline: 0,
    border: [2, 'solid', palette.primary.main],
    padding: [8, 18],
    backgroundColor: palette.primary.main,
    color: palette.primary.contrastText,
    borderRadius: shape.borderRadius,
    boxShadow: shadows[2],
    transition: transitions.create(
      ['background-color', 'box-shadow', 'border'],
      {
        duration: transitions.duration.short,
      }
    ),
    '&:hover': {
      backgroundColor: fade(palette.text.primary, palette.action.hoverOpacity),
      boxShadow: shadows[4],
    },
    '&:active': {
      backgroundColor: fade(
        palette.text.secondary,
        palette.action.selectedOpacity
      ),
      boxShadow: shadows[8],
    },
  },
});

const Button = React.forwardRef(function Button(props, ref) {
  const {
    children,
    classes,
    className,
    component = 'button',
    type = 'button',
    ...other
  } = props;

  let ComponentProp = component;
  const buttonProps = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type;
  }

  return (
    <ComponentProp
      ref={ref}
      className={clsx(classes.root, className)}
      {...buttonProps}
      {...other}
    >
      {children}
    </ComponentProp>
  );
});

export default withStyles(styles, { name: 'blxButton' })(Button);
