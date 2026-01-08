export default function Home(){
  return (
    <div className="container">
      <div className="card">
        <div className="square"></div>
        <div className="content">
          <h2 className="title">today i feel:</h2>
          <input type="text" className="input-box" placeholder="current mood..." />
        </div>
      </div>
    </div>
  );
}
