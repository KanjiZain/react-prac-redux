export const HOCScreen = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const HOCComponent: React.FC<P> = (props) => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <WrappedComponent {...(props as P)} />
      </div>
    );
  };
  return HOCComponent;
};


export const Message: React.FC<{ sender: string; message: string }> = ({
  sender,
  message,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "5px",
        borderRadius: "5px",
      }}
    >
      <strong>{sender}</strong>: {message}
    </div>
  );
};
