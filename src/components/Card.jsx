const Card = ({ title, description, children }) => {
  return (
    <div className="card">
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </div>
  );
};

export default Card;
