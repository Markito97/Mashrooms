import styles from "./QuizTopic.module.css";
export const JavaScript = () => {
  return (
    <div style={{ textShadow: "none" }}>
      <span style={{ color: "#9aebff" }}>document</span>.
      <span style={{ color: "#ece5a2" }}>querySelector</span>
      <span>
        (<span style={{ color: "#cc7e5e" }}>.JavaScript</span>)
      </span>
    </div>
  );
};
export const React = () => {
  return (
    <div style={{ textShadow: "none" }} className={styles.test}>
      <nobr>
        <span style={{ color: "#35a4e5" }}>const </span>
        <span style={{ color: "#a130c7" }}>
          [<span style={{ color: "#349ee4" }}>count</span>
          <span style={{ color: "white" }}> , </span>
          <span style={{ color: "#cdcb7a" }}>setCount</span>]
        </span>{" "}
        <span style={{ color: "white" }}>= </span>
        <span style={{ color: "#cdcb7a" }}>
          useState
          <span>
            (<span style={{ color: "white" }}>0</span>)
          </span>
        </span>
      </nobr>
    </div>
  );
};
export const TypeScript = () => {
  return (
    <div style={{ textShadow: "none" }}>
      <span style={{ color: "#1069d3" }}>interface</span>
      <span style={{ color: "#00caad" }}>User</span>
      <span style={{ color: "white" }}>{`{}`}</span>
    </div>
  );
};
export const HTML = () => {
  return (
    <div style={{ textShadow: "none" }}>
      <span style={{ color: "#349ee4" }}>
        <span>&lt;</span>
        head
        <span>&gt;</span>
      </span>
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: "#349ee4" }}>
        <span>&lt;</span>
        title
        <span>&gt;</span>
      </span>
      <br></br>
      <span style={{ color: "white" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2Maslёnka
      </span>
      <br></br>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <span style={{ color: "#349ee4" }}>
        <span>&lt;</span>
        /title
        <span>&gt;</span>
      </span>
      <br></br>
      <span style={{ color: "#349ee4" }}>
        <span>&lt;</span>
        /head
        <span>&gt;</span>
      </span>
    </div>
  );
};
export const CSS = () => {
  return (
    <div style={{ textShadow: "none" }}>
      <span style={{ color: "#d3b16e" }}>.flexBox </span>
      <span style={{ color: "#efcd19" }}>{`{`}</span>
      <br></br>
      <nobr>
        <span style={{ color: "#86d8fb" }}>display</span>
        <span style={{ color: "white" }}>
          : <span style={{ color: "#cd866d" }}>flex</span>;
        </span>
      </nobr>
      <br></br>
      <nobr>
        <span style={{ color: "#86d8fb" }}>align-items</span>
        <span style={{ color: "white" }}>
          {" "}
          :<span style={{ color: "#cd866d" }}>center</span>;
        </span>
      </nobr>
      <br></br>
      <nobr>
        <span style={{ color: "#86d8fb" }}>justify-content</span>
        <span style={{ color: "white" }}>
          {" "}
          :<span style={{ color: "#cd866d" }}>center</span>;
        </span>
      </nobr>
      <br></br>
      <span style={{ color: "#efcd19" }}>{`}`}</span>
    </div>
  );
};
