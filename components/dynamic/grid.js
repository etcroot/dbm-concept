import { useRouter } from "next/router";

export function Grid(props) {
  return <div className="data-grid">{props.children}</div>;
}

export function GridBox(props) {
  const router = useRouter();
  return (
    <div key={props.key} className="grid-box">
      <div className="grid-image-wrapper">
        <img className="grid-image" src={props.image} />
      </div>
      <div className="grid-body">
        <h3 className="grid-title">{props.title}</h3>
        <p className="grid-desc">{props.description}</p>
      </div>
      <div className="grid-footer">
        <button
          onClick={() => router.push(`${props.linkAction}`)}
          className="grid-button"
        >
          Raw Data
        </button>
        <button
          onClick={() => router.push(`${props.authorAction}`)}
          className="grid-button"
        >
          Author
        </button>
      </div>
    </div>
  );
}
