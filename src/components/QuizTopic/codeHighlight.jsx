export const JavaScript = () => {
  return (
    <div>
      <span style={{ color: "#9aebff" }}>document</span>.
      <span style={{ color: "#ece5a2" }}>querySelector</span>
      <span>
        (<span style={{ color: "#cc7e5e" }}>'.aboba'</span>)
      </span>
    </div>
  );
};
export const React = () => {
  return (
    <div style={{ whiteSpace: "nowrap" }}>
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
    </div>
  );
};

export const TypeScript = () => {
  return (
    <div style={{ textShadow: "none" }}>
      <span style={{ color: "#1069d3" }}>interface</span>
      <span style={{ color: "#00caad" }}> User</span>
      <span style={{ color: "white" }}>{`{}`}</span>
    </div>
  );
};

export const HTML = () => {
  return (
    <div style={{ textShadow: "none" }}>
      <span style={{ color: "#349ee4" }}>
        <span>&lt;</span>
        title
        <span>&gt;</span>
      </span>
      <span style={{ color: "white" }}>2Maslёnka</span>
      <span style={{ color: "#349ee4" }}>
        <span>&lt;</span>
        /title
        <span>&gt;</span>
      </span>
    </div>
  );
};

export const CSS = () => {
  return (
    <div>
      <div style={{ color: "#d3b16e", display: "flex" }}>
        .flexBox <span style={{ color: "#efcd19", paddingLeft: "16px" }}>{"{"}</span>{" "}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          paddingLeft: "16px",
        }}
      >
        <div>
          <span style={{ color: "#86d8fb" }}>display:</span>
          <span style={{ color: "#cd866d", paddingLeft: "8px" }}>flex</span>
          <span style={{ color: "white" }}>;</span>
        </div>
        <div>
          <span style={{ color: "#86d8fb" }}>align-items:</span>
          <span style={{ color: "#cd866d", paddingLeft: "8px" }}>center</span>
          <span style={{ color: "white" }}>;</span>
        </div>
        <div>
          <span style={{ color: "#86d8fb" }}>justify-content:</span>
          <span style={{ color: "#cd866d", paddingLeft: "8px" }}>center</span>
          <span style={{ color: "white" }}>;</span>
        </div>
      </div>
      <div>
        <span style={{ color: "#efcd19", display: "flex" }}>{`}`}</span>
      </div>
    </div>
  );
};
