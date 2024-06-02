import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-2">
      404 not found
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default NotFoundPage;
