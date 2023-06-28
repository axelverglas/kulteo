import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import Button from '@/components/Button';
import { toast } from 'react-hot-toast';

const CommentFormSchema = z.object({
  comment: z.string().nonempty('Un commentaire ne peut pas être vide'),
});

type CommentFormInputs = z.infer<typeof CommentFormSchema>;

interface CommentFormProps {
  videoId: string;
  onCommentSubmit: () => void;
}

export function CommentForm({ videoId, onCommentSubmit }: CommentFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CommentFormInputs>({
    resolver: zodResolver(CommentFormSchema),
  });

  const onSubmit: SubmitHandler<CommentFormInputs> = async data => {
    const res = await fetch('/api/postComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        comment: data.comment,
        videoId,
      }),
    });

    if (!res.ok) {
      toast.error(
        'Une erreur est survenue'
      );
    } else {
      toast.success('Votre commentaire a été publié');
      onCommentSubmit();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className="h-12 w-full resize-none rounded-lg border border-grayishblue px-6 py-3 shadow-light outline-none dark:border-jetdark dark:bg-black dark:shadow-night"
        placeholder="ajouter un commentaire..."
        style={{ overflow: 'hidden' }} // Ajoutez cette ligne pour supprimer le défilement
        onInput={e => {
          const target = e.target as HTMLTextAreaElement;
          target.style.height = '0px';
          target.style.height = `${target.scrollHeight}px`;
        }}
        {...register('comment')}
      />

      {errors.comment && (
        <p className="mt-1 text-sm text-red-500">{errors.comment.message}</p>
      )}

      <div className="flex justify-end mt-4">
        <Button type="submit">Publier un commentaire</Button>
      </div>
    </form>
  );
}
