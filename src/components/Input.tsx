import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import clsx from 'clsx';

interface InputProps {
  id: string;
  label?: string;
  type?: string;
  placeholder: string;
  register: any;
  error?: string | undefined;
  textarea?: boolean;
  className?: string;
}

export default function Input({
  id,
  label,
  type,
  placeholder,
  register,
  error,
  textarea = false,
  className = '',
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const handleTextareaInput = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  };

  const inputClassName = clsx(
    'w-full',
    'rounded-lg',
    'border',
    {
      'border-red-500': error,
      'border-secondarylight dark:border-secondary': !error,
    },
    'bg-transparent',
    'px-2',
    'py-2',
    'outline-none',
    className // Utiliser clsx pour gérer les classes dynamiques
  );

  return (
    <div className="mb-4">
      <label className="mb-2 block" htmlFor={id}>
        {label}
      </label>
      <div className="relative">
        {textarea ? (
          <textarea
            className={inputClassName} // Utilisation de la classe personnalisée
            {...register}
            id={id}
            placeholder={placeholder}
            onInput={handleTextareaInput}
          />
        ) : (
          <>
            <input
              className={inputClassName} // Utilisation de la classe personnalisée
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
