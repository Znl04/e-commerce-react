function Input({handleChange, value, title, name, color}) {
  return (
    <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value={value} name={name}/>
          <span className="chekmark" style={{backgroundColor: color}}></span>{title}
    </label>
  );
}

export default Input;