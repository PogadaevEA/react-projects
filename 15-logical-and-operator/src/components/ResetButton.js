function ResetButton({ count, onClick }) {
  const buttonStyle = { backgroundColor: 'lightgreen' }

  return (
    <div>
      {count > 0 && (
        <div>
          <button
            style={buttonStyle}
            onClick={onClick}
          >
            Reset
          </button>
        </div>
      )}
    </div>
  )
}

export default ResetButton
