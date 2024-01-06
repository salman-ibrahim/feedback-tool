
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '@/Components/PrimaryButton';
import CommentIcon from '@/Components/CommentIcon';
import { Feedback } from '@/types';
import { formatDate } from '@/utils/helper';

export default function Feedbacks({ feedbacks }: any) {

    return (
        feedbacks.map((feedback: Feedback, key: number) => (
            <Link key={key} className="block" href={route('feedback.show', { feedback: feedback })}>
                <div className="p-6 text-gray-900 dark:text-gray-100 rounded-md hover:bg-slate-300 dark:hover:bg-gray-600 cursor-pointer" key={feedback.id}>
                    <p className="text-sm font-semibold mb-2">{feedback.user.name} • <span className="text-xs text-gray-500 dark:text-gray-400">{formatDate(feedback.created_at)}</span></p>
                    {/* Badge */}
                    <div className="flex items-center mb-2">
                        <span className="px-2 bg-green-200 text-green-800 text-xs rounded-full">{feedback.category}</span>
                    </div>
                    <p className="text-lg font-semibold">{feedback.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 overflow-hidden overflow-ellipsis max-h-12">{feedback.description}</p>

                    {/* Comment Icon badge */}
                    <div className='flex items-center'>
                        <div className="flex items-center mt-4 bg-gray-900 py-1 px-2 rounded-full">
                            <CommentIcon className="block h-6 w-auto fill-current text-gray-800 dark:text-gray-200" />
                            <p className="text-sm text-slate-100 font-bold">{feedback.comments_count}</p>
                        </div>
                    </div>
                </div>
            </Link>
        ))
    );
}
