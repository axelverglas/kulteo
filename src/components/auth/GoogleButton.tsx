import { FcGoogle } from 'react-icons/fc';

export default function GoogleButton() {
  return (
    <button className="mt-8 flex w-80 items-center justify-center rounded-lg border bg-whitesmoke px-4 py-2 text-night shadow-light">
      <span className="mr-3 inline-block shrink-0 self-center">
        <FcGoogle size={20} className="shrink-0 align-middle leading-4" />
      </span>
      Sign in with Google
    </button>
  );
}
