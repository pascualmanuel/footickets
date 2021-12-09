import OffCanvasExample from "./Offcanvas";

function Example() {
  return (
    <>
      {["start", "end", "top", "bottom"].map((placement, idx) => (
        <OffCanvasExample key={idx} placement={placement} name={placement} />
      ))}
    </>
  );
}

export default Example;
