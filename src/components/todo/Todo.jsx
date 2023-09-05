
const Todo = ({ title, description, status }) => {
  // Define inline styles using JavaScript objects
  const containerStyle = {
    backgroundColor: '#f5f5f5',
    padding: '10px',
    margin: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const titleStyle = {
    fontSize: '1.5rem',
    margin: '0',
    color: '#333',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    margin: '5px 0',
    color: '#666',
  };

  const statusStyle = {
    fontWeight: 'bold',
    color: '#007bff', // Blue color for status text
  };

  return (
    <div style={containerStyle}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descriptionStyle}>{description}</p>
      <p>
        Status: <strong style={statusStyle}>{status}</strong>
      </p>
    </div>
  );
};

export default Todo;
