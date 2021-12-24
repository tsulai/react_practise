import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

function MyComponent(props) {
  if (isWidthUp('sm', props.width)) {
    return <span>span {props.width}</span>
  }

  return <div>div {props.width}</div>;
}

export default withWidth()(MyComponent);