import notFoundImg from "../images/notfound.svg"
export default function Notfound() {
    return (
      <div className="container">
        <h2 className="title">404 NOT FOUND</h2>
        <img className="bigImg" src={notFoundImg} alt="" />
      </div>
    );
};
