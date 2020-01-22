import React from "react"
import PropTypes from "prop-types"

const DownArrow = props => {
  const { color, className, height, style, width } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 68 68"
      fill="none"
      style={style}
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.045 30.478l-30.62 34.05-2.772 3.082-2.771-3.082L.26 30.478l5.543-4.985 24.122 26.824V.029h7.454v52.288l24.122-26.824 5.543 4.985z"
        fill={color || "#000000"}
      />
    </svg>
  )
}

DownArrow.defaultProps = {
  style: {},
  color: "",
  className: "",
  height: null,
  width: null,
}

DownArrow.propTypes = {
  style: PropTypes.objectOf(PropTypes.any),
  color: PropTypes.string,
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
}

export default DownArrow
