function Wrapper(props) {
  const style = { backgroundColor: props.color, width: '250px', padding: '20px', margin: 'auto',  }

  return <div style={style}>{props.children}</div>
}

export default Wrapper
