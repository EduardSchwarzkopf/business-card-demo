type CardContactProps = {
  name: string;
  role: string;
  homepage: string;
};

export default function (props: CardContactProps) {
  return (
    <>
      <div className="contact">
        <h1>{props.name}</h1>
        <h3>{props.role}</h3>

        <a href={`https://${props.homepage}`}>{props.homepage}</a>
      </div>
    </>
  );
}
