type CardTextProps = {
  title: string;
  children: string;
};

export default function (props: CardTextProps) {
  return (
    <>
      <div className="card-text">
        <h2>{props.title}</h2>
        <p>{props.children}</p>
      </div>
    </>
  );
}
