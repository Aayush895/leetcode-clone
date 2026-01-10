function Input({
  htmlForLabel,
  labelValue='',
  inputType,
  inputName,
  placeholder = '',
  classesForDiv,
  classesForLabel,
  ClassesForInput,
}) {
  return (
    <div className={classesForDiv}>
      <label htmlFor={htmlForLabel} className={classesForLabel}>
        {labelValue}
      </label>
      <input
        type={inputType}
        name={inputName}
        placeholder={placeholder}
        className={ClassesForInput}
      />
    </div>
  )
}
export default Input
