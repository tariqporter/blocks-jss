import React from 'react';
import { withStyles } from '../withStyles';
import { fade } from '../styles/colorManipulator';
import clsx from 'clsx';

export const styles = theme => {
  const { palette, shape, typography, transitions, shadows } = theme;
  return {
    root: {
      ...typography.button,
      display: 'inline-block',
      cursor: 'pointer',
      minWidth: 64,
      outline: 0,
      padding: [8, 18],
      textAlign: 'center',
      borderRadius: shape.borderRadius,
      textDecoration: 'none',
      boxShadow: shadows[2],
      transition: transitions.create(['background-color', 'box-shadow', 'border'], {
        duration: transitions.duration.short,
      }),
      '&$disabled': {
        opacity: palette.action.disabledOpacity,
        pointerEvents: 'none',
      },
    },
    primary: {
      backgroundColor: palette.primary.main,
      color: palette.primary.contrastText,
      border: [2, 'solid', palette.primary.border],
      '&:hover': {
        backgroundColor: fade(palette.primary.hover, palette.action.hoverOpacity),
        boxShadow: shadows[4],
      },
      '&:active': {
        backgroundColor: fade(palette.primary.active, palette.action.selectedOpacity),
        boxShadow: shadows[8],
      },
    },
    secondary: {
      backgroundColor: palette.secondary.main,
      color: palette.secondary.contrastText,
      border: [2, 'solid', palette.secondary.border],
      '&:hover': {
        backgroundColor: fade(palette.secondary.hover, palette.action.hoverOpacity),
        boxShadow: shadows[4],
      },
      '&:active': {
        backgroundColor: fade(palette.secondary.active, palette.action.selectedOpacity),
        boxShadow: shadows[8],
      },
    },
    disabled: {},
  };
};

const Button = React.forwardRef(function Button(props, ref) {
  const {
    children,
    classes,
    color = 'primary',
    className,
    component = 'button',
    disabled = false,
    type = 'button',
    ...other
  } = props;
  let ComponentProp = component;

  if (ComponentProp === 'button' && other.href) {
    ComponentProp = 'a';
  }

  const buttonProps = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type;
  }

  return (
    <ComponentProp
      ref={ref}
      className={clsx(
        classes.root,
        classes[color],
        {
          [classes.disabled]: disabled,
        },
        className
      )}
      disabled
      {...buttonProps}
      {...other}
    >
      {children}
    </ComponentProp>
  );
});

export default withStyles(styles, { name: 'blxButton' })(Button);
