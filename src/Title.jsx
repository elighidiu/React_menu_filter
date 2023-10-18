function Title({ text }) {
  return (
    <div>
      <h2>{text || "Default Title"}</h2>
      <div className="title-underline"></div>

    </div>
  );
}
export default Title;
