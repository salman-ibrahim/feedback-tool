
import { Head, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { PageProps } from '@/types';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { formatDate } from '@/utils/helper';
import CommentIcon from '@/Components/CommentIcon';
import CommentView from '@/Components/CommentView';
import TextareaInput from '@/Components/TextareaInput';
import PrimaryButton from '@/Components/PrimaryButton';
import InputError from '@/Components/InputError';

export default function Feedback( {auth, feedback}: PageProps) {
    const { data, setData, post, processing, errors, reset } = useForm({
        feedback_id: feedback.id,
        comment: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('comment'), {
            preserveScroll: true,
            onSuccess: () => reset('comment'),
            onError: () => {},
            onFinish: () => {},
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Feedback</h2>}
        >
            <Head title={`Feedback - ${feedback.title}`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg p-2 gap-2">
                        
                        {/* Feedback Basic Data */}
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{feedback.title}  <span className="px-2 bg-green-200 text-green-800 text-sm rounded-full">{feedback.category}</span></h1>
                        <div className="flex items-center mb-2 border-y border-y-gray-500 py-2 text-gray-900 dark:text-gray-100">
                            <p className="text-sm font-semibold">{feedback.user.name} • <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(feedback.created_at)}</span></p>
                        </div>
                        <p className="text-black dark:text-white">{feedback.description}</p>

                        {/* Comment Icon badge */}
                        <div className='flex items-center border-t border-gray-200 dark:border-gray-500 pt-2'>
                            <div className="flex items-center bg-gray-900 py-1 px-2 rounded-full">
                                <CommentIcon className="block h-4 w-auto fill-current text-gray-800 dark:text-gray-200" />
                                <p className="text-xs font-bold text-slate-100">{feedback.comments_count}</p>
                            </div>
                        </div>

                        {/* Comments */}
                        <div className="grid gap-2">
                            {feedback.comments.map((comment: any, key: number) => (
                                <div key={key} className='overflow-y-auto'>
                                    <CommentView comment={comment} />
                                </div>
                            ))}
                        </div>

                        {/* Add Comment */}
                        <form onSubmit={submit}>
                            <div className="flex flex-col gap-2">
                                <div className="bg-gray-900 py-1 px-2 rounded-lg">
                                    <TextareaInput
                                        className="block w-full text-sm text-gray-900 dark:text-gray-100 border-0 ring-0 focus:ring-0 focus:border-0"
                                        name="comment"
                                        value={data.comment}
                                        onChange={(e) => setData('comment', e.target.value)}
                                        placeholder="Add a comment"
                                    />
                                    <InputError message={errors.comment} className="mt-2" />
                                </div>
                                <div className='flex justify-between'>
                                    <p>
                                        <span className="text-xs text-gray-500 dark:text-gray-400">**bold** *italic* [link](https://example.com) `code`</span>
                                    </p>
                                    <PrimaryButton className="self-end" disabled={processing}>
                                        Comment
                                    </PrimaryButton>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
};
