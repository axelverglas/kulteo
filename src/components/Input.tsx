import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  register: any;
  error?: string | undefined;
  textarea?: boolean;
}

export default function Input({
  id,
  label,
  type,
  placeholder,
  register,
  error,
  textarea = false,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="mb-4">
      <label className="mb-2 block" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        {textarea ? (
          <textarea
            className={`min-h-[12rem] w-full rounded-lg border ${
              error
                ? 'border-red-500'
                : 'border-secondarylight dark:border-secondary'
            } bg-transparent px-2 py-2 outline-none`}
            {...register}
            id={id}
            placeholder={placeholder}
          />
        ) : (
          <>
            <input
              className={`w-full rounded-lg border ${
                error
                  ? 'border-red-500'
                  : 'border-secondarylight dark:border-secondary'
              } bg-transparent px-2 py-2 outline-none`}
              {...register}
              type={showPassword ? 'text' : type}
              id={id}
              placeholder={placeholder}
            />
            {type === 'password' && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 mr-4 -translate-y-1/2 transform"
              >
                {showPassword ? (
                  <AiFillEyeInvisible aria-label="Masquer le mot de passe" />
                ) : (
                  <AiFillEye aria-label="Afficher le mot de passe" />
                )}
              </button>
            )}
          </>
        )}
      </div>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
