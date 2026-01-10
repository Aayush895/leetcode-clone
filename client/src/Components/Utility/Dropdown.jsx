function Dropdown({
  classesForDiv,
  classesForLabel,
  classesForDropdown,
  labelValue,
  htmlForLabel,
  nameForDropdown,
  valuesForDropdown,
}) {
  return (
    <div className={classesForDiv}>
      <label htmlFor={htmlForLabel} className={classesForLabel}>
        {labelValue}
      </label>
      <select name={nameForDropdown} className={classesForDropdown}>
        {valuesForDropdown.length != 0 &&
          valuesForDropdown.map((item, idx) => {
            return (
              <option key={idx} value={item}>
                {item}
              </option>
            )
          })}
      </select>
    </div>
  )
}
export default Dropdown
