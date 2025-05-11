import React from 'react';
import '../../../styles/Buttons.css'

const Styles = ['btns--primary', 'btns--secondary', 'btns--quaternary', 'btns--terinary','btns--outline','btns--outline--bg','btns--rounded', 'btns--theme--violet','btns--theme--red','btns--theme--grey'];

const Sizes = ['btns--small','btns--medium', 'btns--large','btns--width--extra'];

const Buttons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  style
}) => {
  const checkButtonStyle = Styles.includes(buttonStyle)
    ? buttonStyle
    : Styles[0];

  const checkButtonSize = Sizes.includes(buttonSize) ? buttonSize : Sizes[0];

  return (
    <button
      className={`btns ${checkButtonStyle} ${checkButtonSize}`}
      onClick={onClick}
      type={type}
      style={style}
    >
      {children}
    </button>
  );
};

export default Buttons;