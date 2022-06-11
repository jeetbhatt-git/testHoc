let _styles = {
  backgroundColor: "red",
  color: "green",
};

function getStyles(props) {
  const newProps = { ...props, styles: _styles };
  return newProps;
}

// changing some file here to get to get thsi in local

export default (WrappedComponent) => {
  return function wrapperRender(args) {
    return WrappedComponent(getStyles(args));
  };
};
