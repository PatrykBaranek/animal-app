import NavBar from './NavBar';

function NotFoundPage() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center gap-2 bg-slate-400 font-bold">
        404 not found
      </div>
      <NavBar />
    </>
  );
}

export default NotFoundPage;
